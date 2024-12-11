/* tslint:disable */
/* eslint-disable */

import { ItemData } from './itemData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';
import { VersionData } from './versionData';

/**
 * An object that represents an item.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Item
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Item
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {ItemData}
     * @memberof Item
     */
    'data'?: ItemData;
    /**
     * An object containing information about the tip version of this item.
     * @type {Array<VersionData>}
     * @memberof Item
     */
    'included'?: Array<VersionData>;
}

