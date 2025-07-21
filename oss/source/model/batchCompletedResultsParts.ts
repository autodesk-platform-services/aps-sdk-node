
import { Status } from './status';

/**
 * 
 * @export
 * @interface BatchCompletedResultsParts
 */
export interface BatchCompletedResultsParts {
    /**
     * The index of the first part in the multipart upload.
     * @type {number}
     * @memberof BatchCompletedResultsParts
     */
    'firstPart'?: number;
    /**
     * 
     * @type {Status}
     * @memberof BatchCompletedResultsParts
     */
    'status'?: Status;
    /**
     * The size of the corresponding part detected in S3.
     * @type {number}
     * @memberof BatchCompletedResultsParts
     */
    'size'?: number;
    /**
     * The eTag of the detected part in S3.
     * @type {string}
     * @memberof BatchCompletedResultsParts
     */
    'eTag'?: string;
}



