/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';
import { StorageData } from './storageData';

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

