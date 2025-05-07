

/**
 * 
 * @export
 * @interface TypesPageResultsSubtypes
 */
export interface TypesPageResultsSubtypes {
    /**
     * The ID of the issue subtype.
     * @type {string}
     * @memberof TypesPageResultsSubtypes
     */
    'id'?: string;
    /**
     * The ID of the parent issue type.
     * @type {string}
     * @memberof TypesPageResultsSubtypes
     */
    'issueTypeId'?: string;
    /**
     * Max length: 250
     * @type {string}
     * @memberof TypesPageResultsSubtypes
     */
    'title'?: string;
    /**
     * 3 chars pin label.
     * @type {string}
     * @memberof TypesPageResultsSubtypes
     */
    'code'?: string;
    /**
     * States whether the issue type is active.
     * @type {boolean}
     * @memberof TypesPageResultsSubtypes
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {number}
     * @memberof TypesPageResultsSubtypes
     */
    'orderIndex'?: number;
    /**
     * Not relevant
     * @type {boolean}
     * @memberof TypesPageResultsSubtypes
     */
    'isReadOnly'?: boolean;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof TypesPageResultsSubtypes
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof TypesPageResultsSubtypes
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The unique identifier of the user who created the issue type.
     * @type {string}
     * @memberof TypesPageResultsSubtypes
     */
    'createdBy'?: string;
    /**
     * The date and time the issue was created, in ISO8601 format.
     * @type {string}
     * @memberof TypesPageResultsSubtypes
     */
    'createdAt'?: string;
    /**
     * The unique identifier of the user who updated the issue type.
     * @type {string}
     * @memberof TypesPageResultsSubtypes
     */
    'updatedBy'?: string;
    /**
     * The date and time the issue type was updated, in ISO8601 format.
     * @type {string}
     * @memberof TypesPageResultsSubtypes
     */
    'updatedAt'?: string;
    /**
     * The unique identifier of the user who deleted the issue type.
     * @type {string}
     * @memberof TypesPageResultsSubtypes
     */
    'deletedBy'?: string;
    /**
     * The date and time the issue type was deleted, in ISO8601 format.
     * @type {string}
     * @memberof TypesPageResultsSubtypes
     */
    'deletedAt'?: string;
}

