
    export interface IFileTransferConfigurations {
        getRetryCount(): number;
        getMaxChunkCountAllowed(): number;
        getMaxRetryOnTokenExpiry(): number;
        getMaxRetryOnUrlExpiry(): number;
    }
    
    export class FileTransferConfigurations implements IFileTransferConfigurations {
        private _retryCount: number;
        private _maxChunkCountAllowed: number;
        private _maxRetryOnTokenExpiry: number;
        private _maxRetryOnUrlExpiry: number;

        constructor(retryCount: number, maxChunkCountAllowed: number = 10000, maxRetryOnTokenExpiry: number = 2, maxRetryOnUrlExpiry: number = 2) {
            this._retryCount = retryCount;
            this._maxChunkCountAllowed = maxChunkCountAllowed;
            this._maxRetryOnTokenExpiry = maxRetryOnTokenExpiry;
            this._maxRetryOnUrlExpiry = maxRetryOnUrlExpiry;
        }

        public getRetryCount(): number {
            return this._retryCount;
        }

        public getMaxChunkCountAllowed(): number {
            return this._maxChunkCountAllowed;
        }

        public getMaxRetryOnTokenExpiry(): number {
            return this._maxRetryOnTokenExpiry;
        }

        public getMaxRetryOnUrlExpiry(): number {
            return this._maxRetryOnUrlExpiry;
        }
    }
