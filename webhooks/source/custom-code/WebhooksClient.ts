import { HooksApi, TokensApi } from '../api';
import {
  Systems,
  Events,
  HookPayload,
  Hook,
  Hooks,
  HookDetails,
  ModifyHookPayload,
  TokenPayload,
  Token
} from '../model';
import { SDKManager, ApsServiceRequestConfig } from '@aps_sdk/autodesk-sdkmanager'; // Assuming a default export

export class WebhooksClient {
  public hooksApi: HooksApi;
  public tokensApi: TokensApi;

  constructor(sdkManager: SDKManager) {
    this.hooksApi = new HooksApi(sdkManager);
    this.tokensApi = new TokensApi(sdkManager);
  }

  //#region HooksAPi
  public async createSystemEventHookAsync(
    accessToken: string,
    system: Systems,
    event: Events,
    hookPayload: HookPayload,
    xAdsRegion?: string,
    region?: string,
    options?: ApsServiceRequestConfig
  ): Promise<void> {
    const response = await this.hooksApi.createSystemEventHook(
      accessToken,
      system,
      event,
      xAdsRegion,
      region,
      hookPayload,
      options
    );
    return response.content;
  }

  public async createSystemHookAsync(
    accessToken: string,
    system: Systems,
    xAdsRegion?: string,
    region?: string,
    hookPayload?: HookPayload,
    options?: ApsServiceRequestConfig
  ): Promise<Hook> {
    const response = await this.hooksApi.createSystemHook(
      accessToken,
      system,
      xAdsRegion,
      region,
      hookPayload,
      options
    );
    return response.content;
  }

  public async deleteSystemEventHookAsync(
    accessToken: string,
    system: Systems,
    event: Events,
    hookId: string,
    xAdsRegion?: string,
    region?: string,
    options?: ApsServiceRequestConfig
  ): Promise<void> {
    const response = await this.hooksApi.deleteSystemEventHook(
      accessToken,
      system,
      event,
      hookId,
      xAdsRegion,
      region,
      options
    );
    return response.content;
  }

  public async getAppHooksAsync(
    accessToken: string,
    xAdsRegion?: string,
    pageState?: string,
    status?: string,
    sort?: string,
    region?: string,
    options?: ApsServiceRequestConfig
  ): Promise<Hooks> {
    const response = await this.hooksApi.getAppHooks(
      accessToken,
      xAdsRegion,
      pageState,
      status,
      sort,
      region,
      options
    );
    return response.content;
  }

  public async getHookDetailsAsync(
    accessToken: string,
    system: Systems,
    event: Events,
    hookId: string,
    xAdsRegion?: string,
    region?: string,
    options?: ApsServiceRequestConfig
  ): Promise<HookDetails> {
    const response = await this.hooksApi.getHookDetails(
      accessToken,
      system,
      event,
      hookId,
      xAdsRegion,
      region,
      options
    );
    return response.content;
  }

  public async getHooksAsync(
    accessToken: string,
    pageState?: string,
    status?: string,
    region?: string,
    xAdsRegion?: string,
    options?: ApsServiceRequestConfig
  ): Promise<Hooks> {
    const response = await this.hooksApi.getHooks(
      accessToken,
      pageState,
      status,
      region,
      xAdsRegion,
      options
    );
    return response.content;
  }

  public async getSystemEventHooksAsync(
    accessToken: string,
    system: Systems,
    event: Events,
    xAdsRegion?: string,
    region?: string,
    scopeName?: string,
    pageState?: string,
    status?: string,
    options?: ApsServiceRequestConfig
  ): Promise<Hooks> {
    const response = await this.hooksApi.getSystemEventHooks(
      accessToken,
      system,
      event,
      xAdsRegion,
      region,
      scopeName,
      pageState,
      status,
      options
    );
    return response.content;
  }

  public async getSystemHooksAsync(
    accessToken: string,
    system: Systems,
    xAdsRegion?: string,
    status?: string,
    pageState?: string,
    region?: string,
    options?: ApsServiceRequestConfig
  ): Promise<Hooks> {
    const response = await this.hooksApi.getSystemHooks(
      accessToken,
      system,
      xAdsRegion,
      status,
      pageState,
      region,
      options
    );
    return response.content;
  }

  public async patchSystemEventHookAsync(
    accessToken: string,
    system: Systems,
    event: Events,
    hookId: string,
    xAdsRegion?: string,
    region?: string,
    modifyHookPayload?: ModifyHookPayload,
    options?: ApsServiceRequestConfig
  ): Promise<void> {
    const response = await this.hooksApi.patchSystemEventHook(
      accessToken,
      system,
      event,
      hookId,
      xAdsRegion,
      region,
      modifyHookPayload,
      options
    );
    return response.content;
  }

  public async createTokenAsync(
    accessToken: string,
    xAdsRegion?: string,
    region?: string,
    tokenPayload?: TokenPayload,
    options?: ApsServiceRequestConfig
  ): Promise<Token> {
    const response = await this.tokensApi.createToken(
      accessToken,
      xAdsRegion,
      region,
      tokenPayload,
      options
    );
    return response.content;
  }

  public async deleteTokenAsync(
    accessToken: string,
    xAdsRegion?: string,
    region?: string,
    options?: ApsServiceRequestConfig
  ): Promise<void> {
    const response = await this.tokensApi.deleteToken(
      accessToken,
      xAdsRegion,
      region,
      options
    );
    return response.content;
  }

  public async putTokenAsync(
    accessToken: string,
    xAdsRegion?: string,
    region?: string,
    tokenPayload?: TokenPayload,
    options?: ApsServiceRequestConfig
  ): Promise<void> {
    const response = await this.tokensApi.putToken(
      accessToken,
      xAdsRegion,
      region,
      tokenPayload,
      options
    );
    return response.content;
  }
}
