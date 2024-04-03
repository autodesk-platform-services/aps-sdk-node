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
import {
  SdkManager,
  ApsServiceRequestConfig
} from '@aps_sdk/autodesk-sdkmanager'; // Assuming a default export

export class WebhooksClient {
  public hooksApi: HooksApi;
  public tokensApi: TokensApi;

  constructor(sdkManager: SdkManager) {
    this.hooksApi = new HooksApi(sdkManager);
    this.tokensApi = new TokensApi(sdkManager);
  }

  //#region HooksAPi
  public async createSystemEventHook(
    accessToken: string,
    system: Systems,
    event: Events,
    hookPayload: HookPayload,
    optionalArgs?: {
      xAdsRegion?: string,
      region?: string,
      options?: ApsServiceRequestConfig,
    }
  ): Promise<void> {
    const response = await this.hooksApi.createSystemEventHook(
      accessToken,
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
    accessToken: string,
    system: Systems,
    hookPayload: HookPayload,
    optionalArgs?: {
      xAdsRegion?: string,
      region?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<Hook> {
    const response = await this.hooksApi.createSystemHook(
      accessToken,
      system,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      hookPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async deleteSystemEventHook(
    accessToken: string,
    system: Systems,
    event: Events,
    hookId: string,
    optionalArgs?: {
      xAdsRegion?: string,
      region?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<void> {
    const response = await this.hooksApi.deleteSystemEventHook(
      accessToken,
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
    accessToken: string,
    optionalArgs?: {
      xAdsRegion?: string,
      pageState?: string,
      status?: string,
      sort?: string,
      region?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<Hooks> {
    const response = await this.hooksApi.getAppHooks(
      accessToken,
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
    accessToken: string,
    system: Systems,
    event: Events,
    hookId: string,
    optionalArgs?: {
      xAdsRegion?: string,
      region?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<HookDetails> {
    const response = await this.hooksApi.getHookDetails(
      accessToken,
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
    accessToken: string,
    pageState?: string,
    status?: string,
    region?: string,
    optionalArgs?: {
      xAdsRegion?: string;
      options?: ApsServiceRequestConfig
    }
  ): Promise<Hooks> {
    const response = await this.hooksApi.getHooks(
      accessToken,
      pageState,
      status,
      region,
      optionalArgs?.xAdsRegion,
      optionalArgs?.options
    );
    return response.content;
  }

  public async getSystemEventHooks(
    accessToken: string,
    system: Systems,
    event: Events,
    optionalArgs?: {
      xAdsRegion?: string;
      region?: string,
      scopeName?: string,
      pageState?: string,
      status?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<Hooks> {
    const response = await this.hooksApi.getSystemEventHooks(
      accessToken,
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
    accessToken: string,
    system: Systems,
    optionalArgs?: {
      xAdsRegion?: string;
      status?: string,
      pageState?: string,
      region?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<Hooks> {
    const response = await this.hooksApi.getSystemHooks(
      accessToken,
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
    accessToken: string,
    system: Systems,
    event: Events,
    hookId: string,
    modifyHookPayload: ModifyHookPayload,
    optionalArgs?: {
      xAdsRegion?: string;
      region?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<void> {
    const response = await this.hooksApi.patchSystemEventHook(
      accessToken,
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
    accessToken: string,
    tokenPayload: TokenPayload,
    optionalArgs?: {
      xAdsRegion?: string;
      region?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<Token> {
    const response = await this.tokensApi.createToken(
      accessToken,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      tokenPayload,
      optionalArgs?.options
    );
    return response.content;
  }

  public async deleteToken(
    accessToken: string,
    optionalArgs?: {
      xAdsRegion?: string,
      region?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<void> {
    const response = await this.tokensApi.deleteToken(
      accessToken,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      optionalArgs?.options
    );
    return response.content;
  }

  public async putToken(
    accessToken: string,
    tokenPayload: TokenPayload,
    optionalArgs?: {
      xAdsRegion?: string,
      region?: string,
      options?: ApsServiceRequestConfig
    }
  ): Promise<void> {
    const response = await this.tokensApi.putToken(
      accessToken,
      optionalArgs?.xAdsRegion,
      optionalArgs?.region,
      tokenPayload,
      optionalArgs?.options
    );
    return response.content;
  }
}
