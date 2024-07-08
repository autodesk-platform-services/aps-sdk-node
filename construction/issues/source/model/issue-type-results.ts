/* tslint:disable */
/* eslint-disable */

import { IssueTypeResultsSubtypes } from './issue-type-results-subtypes';

/**
 * 
 * @export
 * @interface IssueTypeResults
 */
export interface IssueTypeResults {
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof IssueTypeResults
     */
    'id'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof IssueTypeResults
     */
    'containerId'?: string;
    /**
     * Max length: 250
     * @type {string}
     * @memberof IssueTypeResults
     */
    'title'?: string;
    /**
     * States whether the issue type is active.
     * @type {boolean}
     * @memberof IssueTypeResults
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {number}
     * @memberof IssueTypeResults
     */
    'orderIndex'?: number;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueTypeResults
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueTypeResults
     */
    'permittedAttributes'?: Array<string>;
    /**
     * A list of subtypes of the specific issue type.
     * @type {Array<IssueTypeResultsSubtypes>}
     * @memberof IssueTypeResults
     */
    'subtypes'?: Array<IssueTypeResultsSubtypes>;
    /**
     * Not relevant
     * @type {string}
     * @memberof IssueTypeResults
     */
    'statusSet'?: string;
    /**
     * The unique identifier of the user who created the issue type.
     * @type {string}
     * @memberof IssueTypeResults
     */
    'createdBy'?: string;
    /**
     * The date and time the issue was created, in ISO8601 format.
     * @type {string}
     * @memberof IssueTypeResults
     */
    'createdAt'?: string;
    /**
     * The unique identifier of the user who updated the issue type.
     * @type {string}
     * @memberof IssueTypeResults
     */
    'updatedBy'?: string;
    /**
     * The date and time the issue type was updated, in ISO8601 format.
     * @type {string}
     * @memberof IssueTypeResults
     */
    'updatedAt'?: string;
    /**
     * The unique identifier of the user who deleted the issue type.
     * @type {string}
     * @memberof IssueTypeResults
     */
    'deletedBy'?: string;
    /**
     * The date and time the issue type was deleted, in ISO8601 format.
     * @type {string}
     * @memberof IssueTypeResults
     */
    'deletedAt'?: string;
}

