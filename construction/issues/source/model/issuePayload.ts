/* tslint:disable */
/* eslint-disable */

import { AssignedToType } from './assignedToType';
import { IssuePayloadCustomAttributes } from './issuePayloadCustomAttributes';
import { IssuePayloadGpsCoordinates } from './issuePayloadGpsCoordinates';
import { Status } from './status';

/**
 * 
 * @export
 * @interface IssuePayload
 */
export interface IssuePayload {
    /**
     * The description and purpose of the issue. Max length: 10000
     * @type {string}
     * @memberof IssuePayload
     */
    'title': string;
    /**
     * The description and purpose of the issue. Max length: 10000
     * @type {string}
     * @memberof IssuePayload
     */
    'description'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof IssuePayload
     */
    'snapshotUrn'?: string;
    /**
     * The unique identifier of the subtype of the issue.
     * @type {string}
     * @memberof IssuePayload
     */
    'issueSubtypeId': string;
    /**
     * 
     * @type {Status}
     * @memberof IssuePayload
     */
    'status': Status;
    /**
     * The Autodesk ID of the member, role, or company you want to assign to the issue. Note that if you select an assignee ID, you also need to select a type (assignedToType).
     * @type {string}
     * @memberof IssuePayload
     */
    'assignedTo'?: string;
    /**
     * 
     * @type {AssignedToType}
     * @memberof IssuePayload
     */
    'assignedToType'?: AssignedToType;
    /**
     * The due date of the issue, in ISO8601 format.
     * @type {string}
     * @memberof IssuePayload
     */
    'dueDate'?: string;
    /**
     * The start date of the issue, in ISO8601 format.
     * @type {string}
     * @memberof IssuePayload
     */
    'startDate'?: string;
    /**
     * The unique LBS (Location Breakdown Structure) identifier that relates to the issue.
     * @type {string}
     * @memberof IssuePayload
     */
    'locationId'?: string;
    /**
     * The location as plain text that relates to the issue. Max length: 8300
     * @type {string}
     * @memberof IssuePayload
     */
    'locationDetails'?: string;
    /**
     * The unique identifier of the type of root cause for the issue.
     * @type {string}
     * @memberof IssuePayload
     */
    'rootCauseId'?: string;
    /**
     * The unique identifier of the type of root cause for the issue.
     * @type {string}
     * @memberof IssuePayload
     */
    'issueTemplateId'?: string;
    /**
     * States whether the issue is published. Default value: false (e.g. unpublished).
     * @type {boolean}
     * @memberof IssuePayload
     */
    'published'?: boolean;
    /**
     * The list of actions permitted for the user for this issue in its current state. Note that if a user with Create for my company permissions attempts to assign a user from a another company to the issue, it will return an error.  Possible Values: assign_all (can assign another user from another company to the issue), assign_same_company (can only assign another user from the same company to the issue), clear_assignee, delete, add_comment, add_attachment, remove_attachment.  The following values are not relevant: add_attachment, remove_attachment.
     * @type {object}
     * @memberof IssuePayload
     */
    'permittedActions'?: object;
    /**
     * The Autodesk ID of the member you want to assign as a watcher for the issue.
     * @type {Array<string>}
     * @memberof IssuePayload
     */
    'watchers'?: Array<string>;
    /**
     * A list of custom attributes of the specific issue.
     * @type {Array<IssuePayloadCustomAttributes>}
     * @memberof IssuePayload
     */
    'customAttributes'?: Array<IssuePayloadCustomAttributes>;
    /**
     * 
     * @type {IssuePayloadGpsCoordinates}
     * @memberof IssuePayload
     */
    'gpsCoordinates'?: IssuePayloadGpsCoordinates;
}



