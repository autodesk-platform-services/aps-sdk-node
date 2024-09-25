/* tslint:disable */
/* eslint-disable */

import { DownloadData } from './download-data';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';

/**
 * Successful retrieval of the available downloads collection associated with a specific version.
 * @export
 * @interface Downloads
 */
export interface Downloads {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Downloads
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Downloads
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {Set<DownloadData>}
     * @memberof Downloads
     */
    'data'?: Set<DownloadData>;
}

