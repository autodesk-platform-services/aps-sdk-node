/* tslint:disable */
/* eslint-disable */

import { IssueRootCauseResultsRootCauses } from './issueRootCauseResultsRootCauses';

/**
 * 
 * @export
 * @interface IssueRootCauseResults
 */
export interface IssueRootCauseResults {
    /**
     * The ID of the issue root cause category.
     * @type {string}
     * @memberof IssueRootCauseResults
     */
    'id'?: string;
    /**
     * The title of the custom attribute. Max length: 100
     * @type {string}
     * @memberof IssueRootCauseResults
     */
    'title'?: string;
    /**
     * The description of the custom attribute. Max length: 500
     * @type {boolean}
     * @memberof IssueRootCauseResults
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueRootCauseResults
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueRootCauseResults
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The metadata object; only relevant for list custom attributes.
     * @type {Array<IssueRootCauseResultsRootCauses>}
     * @memberof IssueRootCauseResults
     */
    'rootCauses'?: Array<IssueRootCauseResultsRootCauses>;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof IssueRootCauseResults
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the custom attribute.
     * @type {string}
     * @memberof IssueRootCauseResults
     */
    'createdBy'?: string;
    /**
     * The last date and time the custom attribute was updated, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof IssueRootCauseResults
     */
    'updatedAt'?: string;
    /**
     * The Autodesk ID of the user who last updated the custom attribute.
     * @type {string}
     * @memberof IssueRootCauseResults
     */
    'updatedBy'?: string;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof IssueRootCauseResults
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof IssueRootCauseResults
     */
    'deletedBy'?: string;
}

