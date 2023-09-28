/* tslint:disable */
/* eslint-disable */
import globalAxios from 'axios';
/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
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
export class BaseAPI {
    constructor(sdkManager, axios = globalAxios) {
        this.axios = axios;
        if (sdkManager) {
            this.sdkManager = sdkManager;
        }
    }
}
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
export class OssApiError extends Error {
    constructor(message, axiosError) {
        super(message);
        if (axiosError) {
            this.axiosError = axiosError;
        }
        Object.setPrototypeOf(this, OssApiError.prototype);
    }
}
