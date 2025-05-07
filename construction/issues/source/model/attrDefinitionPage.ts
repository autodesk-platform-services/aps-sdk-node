
import { AttrDefinitionPageResults } from './attrDefinitionPageResults';
import { Pagination } from './pagination';

/**
 * The pagination object.
 * @export
 * @interface AttrDefinitionPage
 */
export interface AttrDefinitionPage {
    /**
     * 
     * @type {Pagination}
     * @memberof AttrDefinitionPage
     */
    'pagination'?: Pagination;
    /**
     * A list of issue attribute mappings.
     * @type {Array<AttrDefinitionPageResults>}
     * @memberof AttrDefinitionPage
     */
    'results'?: Array<AttrDefinitionPageResults>;
}

