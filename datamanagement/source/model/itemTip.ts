
import { JsonApiLink } from './jsonApiLink';
import { JsonApiVersion } from './jsonApiVersion';
import { VersionData } from './versionData';

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

