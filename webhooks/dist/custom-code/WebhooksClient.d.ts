import { HooksApi, TokensApi } from '../api';
import { Systems, Events, HookPayload, Hook, Hooks, HookDetails, ModifyHookPayload, TokenPayload, Token } from '../model';
import { SDKManager, ApsServiceRequestConfig } from 'autodesk-sdkmanager';
export declare class WebhooksClient {
    hooksApi: HooksApi;
    tokensApi: TokensApi;
    constructor(sdkManager: SDKManager);
    createSystemEventHookAsync(accessToken: string, system: Systems, event: Events, xAdsRegion?: string, region?: string, hookPayload?: HookPayload, options?: ApsServiceRequestConfig): Promise<void>;
    createSystemHookAsync(accessToken: string, system: Systems, xAdsRegion?: string, region?: string, hookPayload?: HookPayload, options?: ApsServiceRequestConfig): Promise<Hook>;
    deleteSystemEventHookAsync(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<void>;
    getAppHooksAsync(accessToken: string, xAdsRegion?: string, pageState?: string, status?: string, sort?: string, region?: string, options?: ApsServiceRequestConfig): Promise<Hooks>;
    getHookDetailsAsync(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<HookDetails>;
    getHooksAsync(accessToken: string, pageState?: string, status?: string, region?: string, xAdsRegion?: string, options?: ApsServiceRequestConfig): Promise<Hooks>;
    getSystemEventHooksAsync(accessToken: string, system: Systems, event: Events, xAdsRegion?: string, region?: string, scopeName?: string, pageState?: string, status?: string, options?: ApsServiceRequestConfig): Promise<Hooks>;
    getSystemHooksAsync(accessToken: string, system: Systems, xAdsRegion?: string, status?: string, pageState?: string, region?: string, options?: ApsServiceRequestConfig): Promise<Hooks>;
    patchSystemEventHookAsync(accessToken: string, system: Systems, event: Events, hookId: string, xAdsRegion?: string, region?: string, modifyHookPayload?: ModifyHookPayload, options?: ApsServiceRequestConfig): Promise<void>;
    createTokenAsync(accessToken: string, xAdsRegion?: string, region?: string, tokenPayload?: TokenPayload, options?: ApsServiceRequestConfig): Promise<Token>;
    deleteTokenAsync(accessToken: string, xAdsRegion?: string, region?: string, options?: ApsServiceRequestConfig): Promise<void>;
    putTokenAsync(accessToken: string, xAdsRegion?: string, region?: string, tokenPayload?: TokenPayload, options?: ApsServiceRequestConfig): Promise<void>;
}
