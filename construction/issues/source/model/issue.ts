/* tslint:disable */
/* eslint-disable */

import { IssueCustomAttributes } from './issueCustomAttributes';
import { IssueGpsCoordinates } from './issueGpsCoordinates';
import { IssueLinkedDocuments } from './issueLinkedDocuments';

/**
 * 
 * @export
 * @interface Issue
 */
export interface Issue {
    /**
     * The unique identifier of the issue.
     * @type {string}
     * @memberof Issue
     */
    'id'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Issue
     */
    'containerId'?: string;
    /**
     * States whether the issue was deleted. Default value: false.
     * @type {boolean}
     * @memberof Issue
     */
    'deleted'?: boolean;
    /**
     * The chronological user-friendly identifier of the issue.
     * @type {number}
     * @memberof Issue
     */
    'displayId'?: number;
    /**
     * The description and purpose of the issue. Max length: 10000
     * @type {string}
     * @memberof Issue
     */
    'title'?: string;
    /**
     * The description and purpose of the issue. Max length: 10000
     * @type {string}
     * @memberof Issue
     */
    'description'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Issue
     */
    'snapshotUrn'?: string;
    /**
     * The unique identifier of the type of the issue.
     * @type {string}
     * @memberof Issue
     */
    'issueTypeId'?: string;
    /**
     * The unique identifier of the subtype of the issue.
     * @type {string}
     * @memberof Issue
     */
    'issueSubtypeId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Issue
     */
    'status'?: string;
    /**
     * The Autodesk ID of the member, role, or company you want to assign to the issue. Note that if you select an assignee ID, you also need to select a type (assignedToType).
     * @type {string}
     * @memberof Issue
     */
    'assignedTo'?: string;
    /**
     * The type of the current assignee of this issue. Possible values: user, company, role, null. Note that if you select a type, you also need to select the assignee ID (assignedTo).
     * @type {string}
     * @memberof Issue
     */
    'assignedToType'?: string;
    /**
     * The due date of the issue, in ISO8601 format.
     * @type {string}
     * @memberof Issue
     */
    'dueDate'?: string;
    /**
     * The start date of the issue, in ISO8601 format.
     * @type {string}
     * @memberof Issue
     */
    'startDate'?: string;
    /**
     * The unique LBS (Location Breakdown Structure) identifier that relates to the issue.
     * @type {string}
     * @memberof Issue
     */
    'locationId'?: string;
    /**
     * The location as plain text that relates to the issue. Max length: 8300
     * @type {string}
     * @memberof Issue
     */
    'locationDetails'?: string;
    /**
     * Information about the files associated with issues (pushpins).
     * @type {Array<IssueLinkedDocuments>}
     * @memberof Issue
     */
    'linkedDocuments'?: Array<IssueLinkedDocuments>;
    /**
     * Not relevant
     * @type {Array<object>}
     * @memberof Issue
     */
    'links'?: Array<object>;
    /**
     * Not relevant
     * @type {string}
     * @memberof Issue
     */
    'ownerId'?: string;
    /**
     * The unique identifier of the type of root cause for the issue.
     * @type {string}
     * @memberof Issue
     */
    'rootCauseId'?: string;
    /**
     * Not relevant
     * @type {object}
     * @memberof Issue
     */
    'officialResponse'?: object;
    /**
     * Not relevant
     * @type {string}
     * @memberof Issue
     */
    'issueTemplateId'?: string;
    /**
     * A list of statuses accessible to the current user, this is based on the current status of the issue and the user permissions. Possible Values: open, pending, in_review, closed.
     * @type {Array<string>}
     * @memberof Issue
     */
    'permittedStatuses'?: Array<string>;
    /**
     * A list of attributes the current user can manipulate in the current context. issueTypeId, linkedDocument, links, ownerId, officialResponse, rootCauseId, snapshotUrn are not applicable.
     * @type {Array<string>}
     * @memberof Issue
     */
    'permittedAttributes'?: Array<string>;
    /**
     * States whether the issue is published. Default value: false (e.g. unpublished).
     * @type {boolean}
     * @memberof Issue
     */
    'published'?: boolean;
    /**
     * The list of actions permitted for the user for this issue in its current state. Note that if a user with Create for my company permissions attempts to assign a user from a another company to the issue, it will return an error.  Possible Values: assign_all (can assign another user from another company to the issue), assign_same_company (can only assign another user from the same company to the issue), clear_assignee, delete, add_comment, add_attachment, remove_attachment.  The following values are not relevant: add_attachment, remove_attachment.
     * @type {object}
     * @memberof Issue
     */
    'permittedActions'?: object;
    /**
     * The number of comments in this issue.
     * @type {number}
     * @memberof Issue
     */
    'commentCount'?: number;
    /**
     * Not relevant
     * @type {number}
     * @memberof Issue
     */
    'attachmentCount'?: number;
    /**
     * Not relevant
     * @type {string}
     * @memberof Issue
     */
    'openedBy'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Issue
     */
    'openedAt'?: string;
    /**
     * The unique identifier of the user who closed the issue.
     * @type {string}
     * @memberof Issue
     */
    'closedBy'?: string;
    /**
     * The date and time the issue was closed, in ISO8601 format.
     * @type {string}
     * @memberof Issue
     */
    'closedAt'?: string;
    /**
     * The unique identifier of the user who created the issue
     * @type {string}
     * @memberof Issue
     */
    'createdBy'?: string;
    /**
     * The date and time the issue was created, in ISO8601 format.
     * @type {string}
     * @memberof Issue
     */
    'createdAt'?: string;
    /**
     * The unique identifier of the user who updated the issue.
     * @type {string}
     * @memberof Issue
     */
    'updatedBy'?: string;
    /**
     * The date and time the issue was updated, in ISO8601 format.
     * @type {string}
     * @memberof Issue
     */
    'updatedAt'?: string;
    /**
     * The Autodesk ID of the member you want to assign as a watcher for the issue.
     * @type {Array<string>}
     * @memberof Issue
     */
    'watchers'?: Array<string>;
    /**
     * A list of custom attributes of the specific issue.
     * @type {Array<IssueCustomAttributes>}
     * @memberof Issue
     */
    'customAttributes'?: Array<IssueCustomAttributes>;
    /**
     * 
     * @type {IssueGpsCoordinates}
     * @memberof Issue
     */
    'gpsCoordinates'?: IssueGpsCoordinates;
}

