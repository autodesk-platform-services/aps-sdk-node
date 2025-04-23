
import type { AxiosPromise, AxiosInstance } from 'axios';
import globalAxios, {AxiosError} from 'axios';
import {ApsServiceRequestConfig, ISdkError, SdkManager} from "@aps_sdk/autodesk-sdkmanager";

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
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: ApsServiceRequestConfig;
}

/**
 *
 * @export
 * @class BaseApi
 */
export class BaseApi {
    protected sdkManager: SdkManager | undefined;

    constructor(sdkManager?: SdkManager, protected axios: AxiosInstance = globalAxios) {
        if (sdkManager) {
            this.sdkManager = sdkManager;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}

export class ConstructionIssuesApiError extends Error implements ISdkError {
    /* istanbul ignore next */
    axiosError?: any;
    constructor(message: string, axiosError?: any) {
        super(message);
        if (axiosError) {
            this.axiosError = axiosError;
        }
        Object.setPrototypeOf(this, ConstructionIssuesApiError.prototype);
    }
    httpStatusCode(): number | null {
      return this.axiosError?.response?.status;
    }
}
