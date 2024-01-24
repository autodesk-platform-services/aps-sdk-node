export class FileTransferConfigurations {
    constructor(retryCount, maxChunkCountAllowed = 10000, maxRetryOnTokenExpiry = 2, maxRetryOnUrlExpiry = 2) {
        this._retryCount = retryCount;
        this._maxChunkCountAllowed = maxChunkCountAllowed;
        this._maxRetryOnTokenExpiry = maxRetryOnTokenExpiry;
        this._maxRetryOnUrlExpiry = maxRetryOnUrlExpiry;
    }
    GetRetryCount() {
        return this._retryCount;
    }
    GetMaxChunkCountAllowed() {
        return this._maxChunkCountAllowed;
    }
    GetMaxRetryOnTokenExpiry() {
        return this._maxRetryOnTokenExpiry;
    }
    GetMaxRetryOnUrlExpiry() {
        return this._maxRetryOnUrlExpiry;
    }
}
