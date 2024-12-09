/* tslint:disable */
/* eslint-disable */

import { AttrDefinitionResults } from './attrDefinitionResults';
import { IssueTypePagination } from './issueTypePagination';

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

