
import { CreatedDownloadData } from './createdDownloadData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';

/**
 * An object that represents the response to a Create Download request.
 * @export
 * @interface CreatedDownload
 */
export interface CreatedDownload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof CreatedDownload
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof CreatedDownload
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {CreatedDownloadData}
     * @memberof CreatedDownload
     */
    'data'?: CreatedDownloadData;
}

