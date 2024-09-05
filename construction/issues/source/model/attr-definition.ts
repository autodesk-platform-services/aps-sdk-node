/* tslint:disable */
/* eslint-disable */

import { AttrDefinitionResults } from './attr-definition-results';
import { IssueTypePagination } from './issue-type-pagination';

/**
 * The pagination object.
 * @export
 * @interface AttrDefinition
 */
export interface AttrDefinition {
    /**
     * 
     * @type {IssueTypePagination}
     * @memberof AttrDefinition
     */
    'pagination'?: IssueTypePagination;
    /**
     * A list of issue attribute mappings.
     * @type {Array<AttrDefinitionResults>}
     * @memberof AttrDefinition
     */
    'results'?: Array<AttrDefinitionResults>;
}

