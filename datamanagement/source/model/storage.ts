/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';
import { StorageData } from './storage-data';

/**
 * An object representing a storage location.
 * @export
 * @interface Storage
 */
export interface Storage {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Storage
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Storage
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {StorageData}
     * @memberof Storage
     */
    'data'?: StorageData;
}

