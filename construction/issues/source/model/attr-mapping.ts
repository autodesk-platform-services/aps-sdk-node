/* tslint:disable */
/* eslint-disable */

import { AttrMappingResults } from './attr-mapping-results';
import { IssueTypePagination } from './issue-type-pagination';

/**
 * The pagination object.
 * @export
 * @interface AttrMapping
 */
export interface AttrMapping {
    /**
     * 
     * @type {IssueTypePagination}
     * @memberof AttrMapping
     */
    'pagination'?: IssueTypePagination;
    /**
     * A list of issue attribute mappings.
     * @type {Array<AttrMappingResults>}
     * @memberof AttrMapping
     */
    'results'?: Array<AttrMappingResults>;
}

