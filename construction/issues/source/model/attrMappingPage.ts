
import { AttrMapping } from './attrMapping';
import { Pagination } from './pagination';

/**
 * The pagination object.
 * @export
 * @interface AttrMappingPage
 */
export interface AttrMappingPage {
    /**
     * 
     * @type {Pagination}
     * @memberof AttrMappingPage
     */
    'pagination'?: Pagination;
    /**
     * A list of issue attribute mappings.
     * @type {Array<AttrMapping>}
     * @memberof AttrMappingPage
     */
    'results'?: Array<AttrMapping>;
}

