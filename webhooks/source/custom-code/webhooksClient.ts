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
  Token,
  XAdsRegion,
  Region,
  StatusFilter,
  Sort
} from '../model';
import {
  SdkManager,
  ApsServiceRequestConfig,
  SdkManagerBuilder,
  IAuthenticationProvider,
  BaseClient
} from '@aps_sdk/autodesk-sdkmanager'; // Assuming a default export

export class WebhooksClient extends BaseClient {
  public hooksApi: HooksApi;
  public tokensApi: TokensApi;

  constructor(optionalArgs?: { sdkManager?: SdkManager, authenticationProvider?: IAuthenticationProvider }) {
    super(optionalArgs?.authenticationProvider);
    if (!optionalArgs?.sdkManager) {
        (optionalArgs ??= {}).sdkManager = SdkManagerBuilder.create().build();
    }
    this.hooksApi = new HooksApi(optionalArgs.sdkManager);
    this.tokensApi = new TokensApi(optionalArgs.sdkManager);
  }

  //#region HooksAPi
  public async createSystemEventHook(
    system: Systems | string,
    event: Events | string,
    hookPayload: HookPayload,
    optionalArgs?: {
      xAdsRegion?: XAdsRegion,
      region?: Region,
      accessToken?: string,
      options?: ApsServiceRequestConfig,
    }
  ): Promise<void> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.hooksApi.createSystemEventHook(
      optionalArgs?.accessToken,
      system,
      event,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      hookPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async createSystemHook(
    system: Systems | string,
    hookPayload: HookPayload,
    optionalArgs?: {
      xAdsRegion?: XAdsRegion,
      region?: Region,
      accessToken?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<Hook> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.hooksApi.createSystemHook(
      optionalArgs?.accessToken,
      system,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      hookPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async deleteSystemEventHook(
    system: Systems | string,
    event: Events | string,
    hookId: string,
    optionalArgs?: {
      xAdsRegion?: XAdsRegion,
      region?: Region,
      accessToken?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<void> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.hooksApi.deleteSystemEventHook(
      optionalArgs?.accessToken,
      system,
      event,
      hookId,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getAppHooks(
    optionalArgs?: {
      xAdsRegion?: XAdsRegion,
      pageState?: string,
      status?: StatusFilter,
      sort?: Sort,
      region?: Region,
      accessToken?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<Hooks> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.hooksApi.getAppHooks(
      optionalArgs?.accessToken,
      optionalArgs?.xAdsRegion,
      optionalArgs?.pageState,
      optionalArgs?.status,
      optionalArgs?.sort,
      optionalArgs?.region,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getHookDetails(
    system: Systems | string,
    event: Events | string,
    hookId: string,
    optionalArgs?: {
      xAdsRegion?: XAdsRegion,
      region?: Region,
      accessToken?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<HookDetails> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.hooksApi.getHookDetails(
      optionalArgs?.accessToken,
      system,
      event,
      hookId,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getHooks(
    optionalArgs?: {
      pageState?: string,
      status?: StatusFilter,
      region?: Region,
      xAdsRegion?: XAdsRegion;
      accessToken?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<Hooks> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.hooksApi.getHooks(
      optionalArgs?.accessToken,
      optionalArgs?.pageState,
      optionalArgs?.status,
      optionalArgs?.region,
      optionalArgs?.xAdsRegion,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getSystemEventHooks(
    system: Systems | string,
    event: Events | string,
    optionalArgs?: {
      xAdsRegion?: XAdsRegion;
      region?: Region,
      scopeName?: string,
      pageState?: string,
      status?: StatusFilter,
      accessToken?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<Hooks> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.hooksApi.getSystemEventHooks(
      optionalArgs?.accessToken,
      system,
      event,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      optionalArgs?.scopeName,
      optionalArgs?.pageState,
      optionalArgs?.status,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getSystemHooks(
    system: Systems | string,
    optionalArgs?: {
      xAdsRegion?: XAdsRegion;
      status?: StatusFilter,
      pageState?: string,
      region?: Region,
      accessToken?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<Hooks> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.hooksApi.getSystemHooks(
      optionalArgs?.accessToken,
      system,
      optionalArgs?.xAdsRegion,
      optionalArgs?.status,
      optionalArgs?.pageState,
      optionalArgs?.region,
      optionalArgs?.options
    );
    return response.content;
  }

  public async patchSystemEventHook(
    system: Systems | string,
    event: Events | string,
    hookId: string,
    modifyHookPayload: ModifyHookPayload,
    optionalArgs?: {
      xAdsRegion?: XAdsRegion;
      region?: Region,
      accessToken?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<void> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.hooksApi.patchSystemEventHook(
      optionalArgs?.accessToken,
      system,
      event,
      hookId,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      modifyHookPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async createToken(
    tokenPayload: TokenPayload,
    optionalArgs?: {
      xAdsRegion?: XAdsRegion;
      region?: Region,
      accessToken?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<Token> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.tokensApi.createToken(
      optionalArgs?.accessToken,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      tokenPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async deleteToken(
    optionalArgs?: {
      xAdsRegion?: XAdsRegion,
      region?: Region,
      accessToken?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<void> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.tokensApi.deleteToken(
      optionalArgs?.accessToken,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      optionalArgs?.options
    );
    return response.content;
  }

  public async putToken(
    tokenPayload: TokenPayload,
    optionalArgs?: {
      xAdsRegion?: XAdsRegion,
      region?: Region,
      accessToken?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<void> {
    if (!optionalArgs?.accessToken && !this.authenticationProvider) {
      throw new Error("Please provide a valid access token or an authentication provider");
    }
    else if (!optionalArgs?.accessToken) {
        (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
    }
    const response = await this.tokensApi.putToken(
      optionalArgs?.accessToken,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      tokenPayload,
      optionalArgs?.options
    );
    return response.content;
  }
}
