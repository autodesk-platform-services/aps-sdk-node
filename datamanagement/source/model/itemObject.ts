
import { ItemData } from './itemData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';
import { VersionData } from './versionData';

/**
 * An object that represents an item.
 * @export
 * @interface ItemObject
 */
export interface ItemObject {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof ItemObject
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof ItemObject
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {ItemData}
     * @memberof ItemObject
     */
    'data'?: ItemData;
    /**
     * An object containing information about the tip version of this item.
     * @type {Array<VersionData>}
     * @memberof ItemObject
     */
    'included'?: Array<VersionData>;
}

