"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksClient = void 0;
const api_1 = require("../api");
class WebhooksClient {
    constructor(sdkManager) {
        this.hooksApi = new api_1.HooksApi(sdkManager);
        this.tokensApi = new api_1.TokensApi(sdkManager);
    }
    //#region HooksAPi
    createSystemEventHookAsync(accessToken, system, event, xAdsRegion, region, hookPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.hooksApi.createSystemEventHook(accessToken, system, event, xAdsRegion, region, hookPayload, options);
            return response.content;
        });
    }
    createSystemHookAsync(accessToken, system, xAdsRegion, region, hookPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.hooksApi.createSystemHook(accessToken, system, xAdsRegion, region, hookPayload, options);
            return response.content;
        });
    }
    deleteSystemEventHookAsync(accessToken, system, event, hookId, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.hooksApi.deleteSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region, options);
            return response.content;
        });
    }
    getAppHooksAsync(accessToken, xAdsRegion, pageState, status, sort, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.hooksApi.getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region, options);
            return response.content;
        });
    }
    getHookDetailsAsync(accessToken, system, event, hookId, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.hooksApi.getHookDetails(accessToken, system, event, hookId, xAdsRegion, region, options);
            return response.content;
        });
    }
    getHooksAsync(accessToken, pageState, status, region, xAdsRegion, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.hooksApi.getHooks(accessToken, pageState, status, region, xAdsRegion, options);
            return response.content;
        });
    }
    getSystemEventHooksAsync(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.hooksApi.getSystemEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options);
            return response.content;
        });
    }
    getSystemHooksAsync(accessToken, system, xAdsRegion, status, pageState, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.hooksApi.getSystemHooks(accessToken, system, xAdsRegion, status, pageState, region, options);
            return response.content;
        });
    }
    patchSystemEventHookAsync(accessToken, system, event, hookId, xAdsRegion, region, modifyHookPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.hooksApi.patchSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region, modifyHookPayload, options);
            return response.content;
        });
    }
    createTokenAsync(accessToken, xAdsRegion, region, tokenPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.tokensApi.createToken(accessToken, xAdsRegion, region, tokenPayload, options);
            return response.content;
        });
    }
    deleteTokenAsync(accessToken, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.tokensApi.deleteToken(accessToken, xAdsRegion, region, options);
            return response.content;
        });
    }
    putTokenAsync(accessToken, xAdsRegion, region, tokenPayload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.tokensApi.putToken(accessToken, xAdsRegion, region, tokenPayload, options);
            return response.content;
        });
    }
}
exports.WebhooksClient = WebhooksClient;
