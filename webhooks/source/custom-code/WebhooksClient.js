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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksClient = void 0;
var api_1 = require("../api");
var WebhooksClient = /** @class */ (function () {
    function WebhooksClient(sdkManager) {
        this.hooksApi = new api_1.HooksApi(sdkManager);
        this.tokensApi = new api_1.TokensApi(sdkManager);
    }
    //#region HooksAPi
    WebhooksClient.prototype.createSystemEventHookAsync = function (accessToken, system, event, hookPayload, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hooksApi.createSystemEventHook(accessToken, system, event, xAdsRegion, region, hookPayload, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    WebhooksClient.prototype.createSystemHookAsync = function (accessToken, system, xAdsRegion, region, hookPayload, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hooksApi.createSystemHook(accessToken, system, xAdsRegion, region, hookPayload, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    WebhooksClient.prototype.deleteSystemEventHookAsync = function (accessToken, system, event, hookId, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hooksApi.deleteSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    WebhooksClient.prototype.getAppHooksAsync = function (accessToken, xAdsRegion, pageState, status, sort, region, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hooksApi.getAppHooks(accessToken, xAdsRegion, pageState, status, sort, region, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    WebhooksClient.prototype.getHookDetailsAsync = function (accessToken, system, event, hookId, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hooksApi.getHookDetails(accessToken, system, event, hookId, xAdsRegion, region, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    WebhooksClient.prototype.getHooksAsync = function (accessToken, pageState, status, region, xAdsRegion, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hooksApi.getHooks(accessToken, pageState, status, region, xAdsRegion, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    WebhooksClient.prototype.getSystemEventHooksAsync = function (accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hooksApi.getSystemEventHooks(accessToken, system, event, xAdsRegion, region, scopeName, pageState, status, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    WebhooksClient.prototype.getSystemHooksAsync = function (accessToken, system, xAdsRegion, status, pageState, region, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hooksApi.getSystemHooks(accessToken, system, xAdsRegion, status, pageState, region, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    WebhooksClient.prototype.patchSystemEventHookAsync = function (accessToken, system, event, hookId, xAdsRegion, region, modifyHookPayload, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hooksApi.patchSystemEventHook(accessToken, system, event, hookId, xAdsRegion, region, modifyHookPayload, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    WebhooksClient.prototype.createTokenAsync = function (accessToken, xAdsRegion, region, tokenPayload, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokensApi.createToken(accessToken, xAdsRegion, region, tokenPayload, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    WebhooksClient.prototype.deleteTokenAsync = function (accessToken, xAdsRegion, region, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokensApi.deleteToken(accessToken, xAdsRegion, region, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    WebhooksClient.prototype.putTokenAsync = function (accessToken, xAdsRegion, region, tokenPayload, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokensApi.putToken(accessToken, xAdsRegion, region, tokenPayload, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.content];
                }
            });
        });
    };
    return WebhooksClient;
}());
exports.WebhooksClient = WebhooksClient;
