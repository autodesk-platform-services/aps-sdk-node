
import { IssueTypeSubtypes } from './issueTypeSubtypes';

/**
 * 
 * @export
 * @interface IssueType
 */
export interface IssueType {
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof IssueType
     */
    'id'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof IssueType
     */
    'containerId'?: string;
    /**
     * Max length: 250
     * @type {string}
     * @memberof IssueType
     */
    'title'?: string;
    /**
     * States whether the issue type is active.
     * @type {boolean}
     * @memberof IssueType
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {number}
     * @memberof IssueType
     */
    'orderIndex'?: number;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueType
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueType
     */
    'permittedAttributes'?: Array<string>;
    /**
     * A list of subtypes of the specific issue type.
     * @type {Array<IssueTypeSubtypes>}
     * @memberof IssueType
     */
    'subtypes'?: Array<IssueTypeSubtypes>;
    /**
     * Not relevant
     * @type {string}
     * @memberof IssueType
     */
    'statusSet'?: string;
    /**
     * The unique identifier of the user who created the issue type.
     * @type {string}
     * @memberof IssueType
     */
    'createdBy'?: string;
    /**
     * The date and time the issue was created, in ISO8601 format.
     * @type {string}
     * @memberof IssueType
     */
    'createdAt'?: string;
    /**
     * The unique identifier of the user who updated the issue type.
     * @type {string}
     * @memberof IssueType
     */
    'updatedBy'?: string;
    /**
     * The date and time the issue type was updated, in ISO8601 format.
     * @type {string}
     * @memberof IssueType
     */
    'updatedAt'?: string;
    /**
     * The unique identifier of the user who deleted the issue type.
     * @type {string}
     * @memberof IssueType
     */
    'deletedBy'?: string;
    /**
     * The date and time the issue type was deleted, in ISO8601 format.
     * @type {string}
     * @memberof IssueType
     */
    'deletedAt'?: string;
}

