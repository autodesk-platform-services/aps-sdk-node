/* tslint:disable */
/* eslint-disable */

import { CreatedItemMeta } from './created-item-meta';
import { ItemData } from './item-data';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';
import { VersionData } from './version-data';

/**
 * Create item response
 * @export
 * @interface CreatedItem
 */
export interface CreatedItem {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof CreatedItem
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof CreatedItem
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {ItemData}
     * @memberof CreatedItem
     */
    'data'?: ItemData;
    /**
     * An object containing information about the tip version of this item.
     * @type {Array<VersionData>}
     * @memberof CreatedItem
     */
    'included'?: Array<VersionData>;
    /**
     * 
     * @type {CreatedItemMeta}
     * @memberof CreatedItem
     */
    'meta'?: CreatedItemMeta;
}

