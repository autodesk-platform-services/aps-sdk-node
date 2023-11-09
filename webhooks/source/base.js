"use strict";
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksApiError = exports.RequiredError = exports.BaseAPI = exports.COLLECTION_FORMATS = void 0;
var axios_1 = require("axios");
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
var BaseAPI = /** @class */ (function () {
    function BaseAPI(sdkManager, axios) {
        if (axios === void 0) { axios = axios_1.default; }
        this.axios = axios;
        if (sdkManager) {
            this.sdkManager = sdkManager;
        }
    }
    return BaseAPI;
}());
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
var RequiredError = /** @class */ (function (_super) {
    __extends(RequiredError, _super);
    function RequiredError(field, msg) {
        var _this = _super.call(this, msg) || this;
        _this.field = field;
        _this.name = "RequiredError";
        return _this;
    }
    return RequiredError;
}(Error));
exports.RequiredError = RequiredError;
var WebhooksApiError = /** @class */ (function (_super) {
    __extends(WebhooksApiError, _super);
    function WebhooksApiError(message, axiosError) {
        var _this = _super.call(this, message) || this;
        if (axiosError) {
            _this.axiosError = axiosError;
        }
        Object.setPrototypeOf(_this, WebhooksApiError.prototype);
        return _this;
    }
    WebhooksApiError.prototype.httpStatusCode = function () {
        var _a, _b;
        return (_b = (_a = this.axiosError) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.status;
    };
    return WebhooksApiError;
}(Error));
exports.WebhooksApiError = WebhooksApiError;
