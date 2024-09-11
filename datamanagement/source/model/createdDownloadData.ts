
import { CreatedDownloadDataAttributes } from './createdDownloadDataAttributes';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { Type } from './type';

/**
 * 
 * @export
 * @interface CreatedDownloadData
 */
export interface CreatedDownloadData {
    /**
     * 
     * @type {Type}
     * @memberof CreatedDownloadData
     */
    'type'?: Type;
    /**
     * A unique ID assigned to identify the job that creates the download. This ID doubles up as the unique ID to identify the download.
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



