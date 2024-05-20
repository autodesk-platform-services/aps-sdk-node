/* tslint:disable */
/* eslint-disable */

import { BatchcompleteuploadObjectRequests } from './batchcompleteupload-object-requests';

/**
 * The request payload for the Complete Batch Upload to S3 Signed URLs operation.
 * @export
 * @interface BatchcompleteuploadObject
 */
export interface BatchcompleteuploadObject {
    /**
     * An array of objects, each of which represents an upload to complete.
     * @type {Array<BatchcompleteuploadObjectRequests>}
     * @memberof BatchcompleteuploadObject
     */
    'requests': Array<BatchcompleteuploadObjectRequests>;
}

