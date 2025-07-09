
import { BatchCompletedResults } from './batchCompletedResults';

/**
 * The response to a Complete Batch Upload to S3 Signed URLs operation.
 * @export
 * @interface BatchcompleteuploadResponse
 */
export interface BatchcompleteuploadResponse {
    /**
     * A map of the returned results; each key in the map corresponds to an object key in the batch, and the value includes the results for that object.
     * @type {{ [key: string]: BatchCompletedResults; }}
     * @memberof BatchcompleteuploadResponse
     */
    'results': { [key: string]: BatchCompletedResults; };
}

