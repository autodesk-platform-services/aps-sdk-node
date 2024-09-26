
import { CreatedDownloadDataAttributes } from './createdDownloadDataAttributes';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { TypeJob } from './typeJob';

/**
 * An array of objects containing a single object, which represents the job that was kicked off.
 * @export
 * @interface CreatedDownloadData
 */
export interface CreatedDownloadData {
    /**
     * 
     * @type {TypeJob}
     * @memberof CreatedDownloadData
     */
    'type'?: TypeJob;
    /**
     * 
     * @type {string}
     * @memberof CreatedDownloadData
     */
    'id'?: string;
    /**
     * 
     * @type {CreatedDownloadDataAttributes}
     * @memberof CreatedDownloadData
     */
    'attributes'?: CreatedDownloadDataAttributes;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof CreatedDownloadData
     */
    'links'?: JsonApiLinksSelf;
}



