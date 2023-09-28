import { HubsJsonapi } from './hubs-jsonapi';
import { SearchData } from './search-data';
import { SearchIncluded } from './search-included';
/**
 * Successful retrieval of the search results.
 * @export
 * @interface Search
 */
export interface Search {
    /**
     *
     * @type {HubsJsonapi}
     * @memberof Search
     */
    'jsonapi'?: HubsJsonapi;
    /**
     *
     * @type {Set<SearchData>}
     * @memberof Search
     */
    'data'?: Set<SearchData>;
    /**
     *
     * @type {Set<SearchIncluded>}
     * @memberof Search
     */
    'included'?: Set<SearchIncluded>;
}
