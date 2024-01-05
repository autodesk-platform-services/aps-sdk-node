import { AdskEnvironment, IAuthClient, SdkManagerBuilder ,SDKManager } from "autodesk-sdkmanager";
import {IFileTransferConfigurations } from './FileTransferConfigurations'; 
import { OSSApi } from "./api";
import {Signeds3uploadResponse } from "./model";
import { OssApiError } from "./base";
import * as fs from 'fs';


namespace Autodesk.Oss{

  export interface IOSSFileTransfer{

  
  }
  class Constants{
      public static readonly  MaxRetry:number = 5;
      public static readonly ChunkSize:bigint = BigInt(5* 1024 * 1024);
      public static readonly BatchSize:number = 25;  
  }
  class OSSFileTransfer implements IOSSFileTransfer{

      private _configuration: IFileTransferConfigurations;
      private _ossApi: OSSApi;
      private _authentication: IAuthClient;
    
      private _maxRetryOnTokenExpiry: number;
      private _maxChunkCountAllowed: number;
      private _maxRetryOnUrlExpiry: number;
      private logger;

      private readonly _accessTokenExpiredMessage: string = 'Access token provided is invalid or expired.';
      private readonly _forbiddenMessage: string = '403 (Forbidden)';
    
      constructor(
        configuration: IFileTransferConfigurations,
        authentication: IAuthClient,
        adskEnvironment: AdskEnvironment = AdskEnvironment.Prd,     
      ) {
        
        const sdkManager = SdkManagerBuilder
          .Create()
          .build();
        this._ossApi = new OSSApi(sdkManager);
        this._maxChunkCountAllowed = this._configuration.GetMaxChunkCountAllowed();
        this._maxRetryOnUrlExpiry = this._configuration.GetMaxRetryOnUrlExpiry();
        this._maxRetryOnTokenExpiry = this._configuration.GetMaxRetryOnTokenExpiry();
        this._authentication = authentication;
        this.logger = sdkManager.logger;
      }
      
    private async isFileSizeAllowed(filePath:string):Promise<boolean>{
        return new Promise<boolean>((resolve,reject)=>{
          fs.open(filePath, 'r' ,(err,fd)=>{
            if(err){
              fs.close(fd,()=>{});
              reject(false);
              return ;
            }
            fs.fstat(fd,(err,stats)=>{
              if(err){
                fs.close(fd,()=>{});
                reject(false);
                return;
              }
              const fileSize: bigint= BigInt(stats.size);
              const numberOfChunks:number = this.CalculateNumberOfChunks(BigInt(fileSize));
              if(numberOfChunks>this._maxChunkCountAllowed){
                fs.close(fd,()=>{});
                reject(false);
                return;
              }
              fs.close(fd,()=>{});
              resolve(true);
            });
          });
        });
        
      }
    private async GetUploadUrlsWithRetry(bucketKey :string ,objectKey:string ,numberOfChunks:number,chunksUploaded:number,uploadKey:string, accessToken :string  ,projectScope:string ,requestId:string) : Promise<Signeds3uploadResponse|string>{
        
        var attemptcount:number = 0;
        var parts = Math.min(numberOfChunks-chunksUploaded,Constants.BatchSize);
        var firstPart = chunksUploaded + 1;

        do {
          this.logger.logInfo(`${requestId} Refreshing URL attempt:${attemptcount}.`);
          try {
            
            var response = await this._ossApi.signedS3Upload(accessToken, bucketKey, objectKey,projectScope,parts, firstPart, uploadKey);
            return (response.content, accessToken);
            
          } catch (e) {
            if(e.message.includes(this._accessTokenExpiredMessage)){
              
              attemptcount++;
              accessToken= this._authentication.getUpdatedAccessToken();
              
              this.logger.logInfo(`${requestId} Token expired. Trying to refresh`);
            }
            else{
              this.logger.logInfo(`${requestId} Error: ${e.message}`);
              throw e;
            }
          }
        } while (attemptcount<this._maxRetryOnTokenExpiry);
        throw new OssApiError(`${requestId} Error: Fail getting upload urls after maximum retry`);
    }
    private CalculateNumberOfChunks(fileSize: BigInt): number {
      if(fileSize==BigInt(0)){
        return 1;
      }
      var numberOfChunks: number = Number(BigInt(Number(fileSize)) / BigInt(Number(Constants.ChunkSize)));
     
      if(Number(fileSize) % Number(Constants.ChunkSize)!=0){

        numberOfChunks++;
      }
      return numberOfChunks;
    }
    private async ValidateFileSize( requestId : string,sourceToUpload:string){
        var sizeAllowed = await this.isFileSizeAllowed(sourceToUpload);
        if (!sizeAllowed)
        {
            throw new OssApiError(`${requestId} File size too big to upload. Currently max file size allowed is ${Number(this._maxChunkCountAllowed) *Number( Constants.ChunkSize)} bytes`);
        }
    }
 

  }

}


