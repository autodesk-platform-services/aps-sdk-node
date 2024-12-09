/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface IssueRootCauseResultsRootCauses
 */
export interface IssueRootCauseResultsRootCauses {
    /**
     * The ID of the issue root cause.
     * @type {string}
     * @memberof IssueRootCauseResultsRootCauses
     */
    'id'?: string;
    /**
     * The ID of the parent issue root cause category.
     * @type {string}
     * @memberof IssueRootCauseResultsRootCauses
     */
    'rootCauseCategoryId'?: string;
    /**
     * The title of the issue root cause. Max length: 100
     * @type {string}
     * @memberof IssueRootCauseResultsRootCauses
     */
    'title'?: string;
    /**
     * The description of the custom attribute. Max length: 500
     * @type {boolean}
     * @memberof IssueRootCauseResultsRootCauses
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueRootCauseResultsRootCauses
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueRootCauseResultsRootCauses
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof IssueRootCauseResultsRootCauses
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof IssueRootCauseResultsRootCauses
     */
    'deletedBy'?: string;
}

