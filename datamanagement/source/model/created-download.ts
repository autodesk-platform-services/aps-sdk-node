/* tslint:disable */
/* eslint-disable */

import { CreatedDownloadData } from './created-download-data';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';

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

