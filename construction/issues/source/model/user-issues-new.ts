/* tslint:disable */
/* eslint-disable */


/**
 * If this object appears in the response, it indicates that the user can create and modify issues.
 * @export
 * @interface UserIssuesNew
 */
export interface UserIssuesNew {
    /**
     * The list of actions permitted for the user for this issue in its current state.
     * @type {Array<string>}
     * @memberof UserIssuesNew
     */
    'permittedActions'?: Array<string>;
    /**
     * A list of attributes you are allowed to open a new issue. issueTypeId, linkedDocument, links, ownerId, officialResponse, rootCauseId, snapshotUrn are not applicable.
     * @type {Array<string>}
     * @memberof UserIssuesNew
     */
    'permittedAttributes'?: Array<string>;
    /**
     * A list of available statuses for the project. Possible values: draft, open, pending, in_progress, completed, in_review, not_approved, in_dispute, closed.
     * @type {Array<string>}
     * @memberof UserIssuesNew
     */
    'permittedStatuses'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof UserIssuesNew
     */
    'permitted_actions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof UserIssuesNew
     */
    'permitted_attributes'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof UserIssuesNew
     */
    'permitted_statuses'?: Array<string>;
}

