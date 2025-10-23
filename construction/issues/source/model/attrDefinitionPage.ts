
import { AttrDefinition } from './attrDefinition';
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
     * A list of issue attribute definitions.
     * @type {Array<AttrDefinition>}
     * @memberof AttrDefinitionPage
     */
    'results'?: Array<AttrDefinition>;
}

