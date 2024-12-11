/* tslint:disable */
/* eslint-disable */

import { PropertiesData } from './propertiesData';

/**
 * An object that represents a successful response to a Fetch All Properties operation.
 * @export
 * @class Properties
 */
export class Properties {
    private _isProcessing: boolean;

    constructor(isProcessing: boolean)  {
           this._isProcessing = isProcessing;
    } 

   public get isProcessing(): boolean {
       return this._isProcessing;
   }

   public set isProcessing(value){
    this._isProcessing = value;
 }
    /**
     * 
     * @type {PropertiesData}
     * @memberof Properties
     */
    'data': PropertiesData;
}

