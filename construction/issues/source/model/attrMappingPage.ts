
import { AttrMappingPageResults } from './attrMappingPageResults';
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
     * @type {Array<AttrMappingPageResults>}
     * @memberof AttrMappingPage
     */
    'results'?: Array<AttrMappingPageResults>;
}

