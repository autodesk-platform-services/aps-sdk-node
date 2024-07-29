/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface IssueTypeResultsSubtypes
 */
export interface IssueTypeResultsSubtypes {
    /**
     * The ID of the issue subtype.
     * @type {string}
     * @memberof IssueTypeResultsSubtypes
     */
    'id'?: string;
    /**
     * The ID of the parent issue type.
     * @type {string}
     * @memberof IssueTypeResultsSubtypes
     */
    'issueTypeId'?: string;
    /**
     * Max length: 250
     * @type {string}
     * @memberof IssueTypeResultsSubtypes
     */
    'title'?: string;
    /**
     * 3 chars pin label.
     * @type {string}
     * @memberof IssueTypeResultsSubtypes
     */
    'code'?: string;
    /**
     * States whether the issue type is active.
     * @type {boolean}
     * @memberof IssueTypeResultsSubtypes
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {number}
     * @memberof IssueTypeResultsSubtypes
     */
    'orderIndex'?: number;
    /**
     * Not relevant
     * @type {boolean}
     * @memberof IssueTypeResultsSubtypes
     */
    'isReadOnly'?: boolean;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueTypeResultsSubtypes
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueTypeResultsSubtypes
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The unique identifier of the user who created the issue type.
     * @type {string}
     * @memberof IssueTypeResultsSubtypes
     */
    'createdBy'?: string;
    /**
     * The date and time the issue was created, in ISO8601 format.
     * @type {string}
     * @memberof IssueTypeResultsSubtypes
     */
    'createdAt'?: string;
    /**
     * The unique identifier of the user who updated the issue type.
     * @type {string}
     * @memberof IssueTypeResultsSubtypes
     */
    'updatedBy'?: string;
    /**
     * The date and time the issue type was updated, in ISO8601 format.
     * @type {string}
     * @memberof IssueTypeResultsSubtypes
     */
    'updatedAt'?: string;
    /**
     * The unique identifier of the user who deleted the issue type.
     * @type {string}
     * @memberof IssueTypeResultsSubtypes
     */
    'deletedBy'?: string;
    /**
     * The date and time the issue type was deleted, in ISO8601 format.
     * @type {string}
     * @memberof IssueTypeResultsSubtypes
     */
    'deletedAt'?: string;
}

