/* tslint:disable */
/* eslint-disable */

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
     * An array of objects containing a single object, which represents the job that was kicked off.
     * @type {Array<CreatedDownloadData>}
     * @memberof CreatedDownload
     */
    'data'?: Array<CreatedDownloadData>;
}

