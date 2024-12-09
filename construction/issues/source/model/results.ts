/* tslint:disable */
/* eslint-disable */

import { AssignedToType } from './assignedToType';
import { IssueCustomAttributes } from './issueCustomAttributes';
import { IssueGpsCoordinates } from './issueGpsCoordinates';
import { ResultsLinkedDocuments } from './resultsLinkedDocuments';

/**
 * 
 * @export
 * @interface Results
 */
export interface Results {
    /**
     * The unique identifier of the issue.
     * @type {string}
     * @memberof Results
     */
    'id'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Results
     */
    'containerId'?: string;
    /**
     * States whether the issue was deleted. Default value: false.
     * @type {boolean}
     * @memberof Results
     */
    'deleted'?: boolean;
    /**
     * The chronological user-friendly identifier of the issue.
     * @type {number}
     * @memberof Results
     */
    'displayId'?: number;
    /**
     * The description and purpose of the issue. Max length: 10000
     * @type {string}
     * @memberof Results
     */
    'title'?: string;
    /**
     * The description and purpose of the issue. Max length: 10000
     * @type {string}
     * @memberof Results
     */
    'description'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Results
     */
    'snapshotUrn'?: string;
    /**
     * The unique identifier of the type of the issue.
     * @type {string}
     * @memberof Results
     */
    'issueTypeId'?: string;
    /**
     * The unique identifier of the subtype of the issue.
     * @type {string}
     * @memberof Results
     */
    'issueSubtypeId'?: string;
    /**
     * The current status of the issue. To check the available statuses for the project, call GET users/me and check the permitted statuses list (issue.new.permittedStatuses). For more information about statuses, see the Help documentation.
     * @type {string}
     * @memberof Results
     */
    'status'?: string;
    /**
     * The Autodesk ID of the member, role, or company you want to assign to the issue. Note that if you select an assignee ID, you also need to select a type (assignedToType).
     * @type {string}
     * @memberof Results
     */
    'assignedTo'?: string;
    /**
     * 
     * @type {AssignedToType}
     * @memberof Results
     */
    'assignedToType'?: AssignedToType;
    /**
     * The due date of the issue, in ISO8601 format.
     * @type {string}
     * @memberof Results
     */
    'dueDate'?: string;
    /**
     * The start date of the issue, in ISO8601 format.
     * @type {string}
     * @memberof Results
     */
    'startDate'?: string;
    /**
     * The unique LBS (Location Breakdown Structure) identifier that relates to the issue.
     * @type {string}
     * @memberof Results
     */
    'locationId'?: string;
    /**
     * The location as plain text that relates to the issue. Max length: 8300
     * @type {string}
     * @memberof Results
     */
    'locationDetails'?: string;
    /**
     * Information about the files associated with issues (pushpins).
     * @type {Array<ResultsLinkedDocuments>}
     * @memberof Results
     */
    'linkedDocuments'?: Array<ResultsLinkedDocuments>;
    /**
     * Not relevant
     * @type {Array<object>}
     * @memberof Results
     */
    'links'?: Array<object>;
    /**
     * Not relevant
     * @type {string}
     * @memberof Results
     */
    'ownerId'?: string;
    /**
     * The unique identifier of the type of root cause for the issue.
     * @type {string}
     * @memberof Results
     */
    'rootCauseId'?: string;
    /**
     * Not relevant
     * @type {object}
     * @memberof Results
     */
    'officialResponse'?: object;
    /**
     * Not relevant
     * @type {string}
     * @memberof Results
     */
    'issueTemplateId'?: string;
    /**
     * A list of statuses accessible to the current user, this is based on the current status of the issue and the user permissions. Possible Values: open, pending, in_review, closed.
     * @type {Array<string>}
     * @memberof Results
     */
    'permittedStatuses'?: Array<string>;
    /**
     * A list of attributes the current user can manipulate in the current context. issueTypeId, linkedDocument, links, ownerId, officialResponse, rootCauseId, snapshotUrn are not applicable.
     * @type {Array<string>}
     * @memberof Results
     */
    'permittedAttributes'?: Array<string>;
    /**
     * States whether the issue is published. Default value: false (e.g. unpublished).
     * @type {boolean}
     * @memberof Results
     */
    'published'?: boolean;
    /**
     * The list of actions permitted for the user for this issue in its current state. Note that if a user with Create for my company permissions attempts to assign a user from a another company to the issue, it will return an error.  Possible Values: assign_all (can assign another user from another company to the issue), assign_same_company (can only assign another user from the same company to the issue), clear_assignee, delete, add_comment, add_attachment, remove_attachment.  The following values are not relevant: add_attachment, remove_attachment.
     * @type {object}
     * @memberof Results
     */
    'permittedActions'?: object;
    /**
     * The number of comments in this issue.
     * @type {number}
     * @memberof Results
     */
    'commentCount'?: number;
    /**
     * Not relevant
     * @type {number}
     * @memberof Results
     */
    'attachmentCount'?: number;
    /**
     * Not relevant
     * @type {string}
     * @memberof Results
     */
    'openedBy'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Results
     */
    'openedAt'?: string;
    /**
     * The unique identifier of the user who closed the issue.
     * @type {string}
     * @memberof Results
     */
    'closedBy'?: string;
    /**
     * The date and time the issue was closed, in ISO8601 format.
     * @type {string}
     * @memberof Results
     */
    'closedAt'?: string;
    /**
     * The unique identifier of the user who created the issue
     * @type {string}
     * @memberof Results
     */
    'createdBy'?: string;
    /**
     * The date and time the issue was created, in ISO8601 format.
     * @type {string}
     * @memberof Results
     */
    'createdAt'?: string;
    /**
     * The unique identifier of the user who updated the issue.
     * @type {string}
     * @memberof Results
     */
    'updatedBy'?: string;
    /**
     * The date and time the issue was updated, in ISO8601 format.
     * @type {string}
     * @memberof Results
     */
    'updatedAt'?: string;
    /**
     * The Autodesk ID of the member you want to assign as a watcher for the issue.
     * @type {Array<string>}
     * @memberof Results
     */
    'watchers'?: Array<string>;
    /**
     * A list of custom attributes of the specific issue.
     * @type {Array<IssueCustomAttributes>}
     * @memberof Results
     */
    'customAttributes'?: Array<IssueCustomAttributes>;
    /**
     * 
     * @type {IssueGpsCoordinates}
     * @memberof Results
     */
    'gpsCoordinates'?: IssueGpsCoordinates;
}



