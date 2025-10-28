

/**
 * 
 * @export
 * @interface IssueTypeSubtypes
 */
export interface IssueTypeSubtypes {
    /**
     * The ID of the issue subtype.
     * @type {string}
     * @memberof IssueTypeSubtypes
     */
    'id'?: string;
    /**
     * The ID of the parent issue type.
     * @type {string}
     * @memberof IssueTypeSubtypes
     */
    'issueTypeId'?: string;
    /**
     * Max length: 250
     * @type {string}
     * @memberof IssueTypeSubtypes
     */
    'title'?: string;
    /**
     * 3 chars pin label.
     * @type {string}
     * @memberof IssueTypeSubtypes
     */
    'code'?: string;
    /**
     * States whether the issue type is active.
     * @type {boolean}
     * @memberof IssueTypeSubtypes
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {number}
     * @memberof IssueTypeSubtypes
     */
    'orderIndex'?: number;
    /**
     * Not relevant
     * @type {boolean}
     * @memberof IssueTypeSubtypes
     */
    'isReadOnly'?: boolean;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueTypeSubtypes
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof IssueTypeSubtypes
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The unique identifier of the user who created the issue type.
     * @type {string}
     * @memberof IssueTypeSubtypes
     */
    'createdBy'?: string;
    /**
     * The date and time the issue was created, in ISO8601 format.
     * @type {string}
     * @memberof IssueTypeSubtypes
     */
    'createdAt'?: string;
    /**
     * The unique identifier of the user who updated the issue type.
     * @type {string}
     * @memberof IssueTypeSubtypes
     */
    'updatedBy'?: string;
    /**
     * The date and time the issue type was updated, in ISO8601 format.
     * @type {string}
     * @memberof IssueTypeSubtypes
     */
    'updatedAt'?: string;
    /**
     * The unique identifier of the user who deleted the issue type.
     * @type {string}
     * @memberof IssueTypeSubtypes
     */
    'deletedBy'?: string;
    /**
     * The date and time the issue type was deleted, in ISO8601 format.
     * @type {string}
     * @memberof IssueTypeSubtypes
     */
    'deletedAt'?: string;
}

