
import { ItemData } from './itemData';
import { JsonApiVersion } from './jsonApiVersion';
import { PaginationInfo } from './paginationInfo';
import { VersionData } from './versionData';

/**
 * Successful retrieval of the search results.
 * @export
 * @interface Search
 */
export interface Search {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Search
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {PaginationInfo}
     * @memberof Search
     */
    'links': PaginationInfo;
    /**
     * The object containing information on this resource.
     * @type {Set<VersionData>}
     * @memberof Search
     */
    'data': Set<VersionData>;
    /**
     * Information on the latest versions of the items in this resource.
     * @type {Set<ItemData>}
     * @memberof Search
     */
    'included'?: Set<ItemData>;
}

