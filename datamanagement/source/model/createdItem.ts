/* tslint:disable */
/* eslint-disable */

import { CreatedItemMeta } from './createdItemMeta';
import { ItemData } from './itemData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';
import { VersionData } from './versionData';

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

