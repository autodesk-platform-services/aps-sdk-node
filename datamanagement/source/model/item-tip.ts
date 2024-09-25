/* tslint:disable */
/* eslint-disable */

import { JsonApiLink } from './json-api-link';
import { JsonApiVersion } from './json-api-version';
import { VersionData } from './version-data';

/**
 * An object that represents the tip version of an item.
 * @export
 * @interface ItemTip
 */
export interface ItemTip {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof ItemTip
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof ItemTip
     */
    'links'?: JsonApiLink;
    /**
     * 
     * @type {VersionData}
     * @memberof ItemTip
     */
    'data'?: VersionData;
}

