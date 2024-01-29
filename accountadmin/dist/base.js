"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructionadminApiError = exports.RequiredError = exports.BaseAPI = exports.COLLECTION_FORMATS = void 0;
const axios_1 = require("axios");
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
class BaseAPI {
    constructor(sdkManager, axios = axios_1.default) {
        this.axios = axios;
        if (sdkManager) {
            this.sdkManager = sdkManager;
        }
    }
}
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
exports.RequiredError = RequiredError;
class ConstructionadminApiError extends Error {
    constructor(message, axiosError) {
        super(message);
        if (axiosError) {
            this.axiosError = axiosError;
        }
        Object.setPrototypeOf(this, ConstructionadminApiError.prototype);
    }
}
exports.ConstructionadminApiError = ConstructionadminApiError;
