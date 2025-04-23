

/**
 * 
 * @export
 * @interface Comments
 */
export interface Comments {
    /**
     * The comment ID.
     * @type {string}
     * @memberof Comments
     */
    'id'?: string;
    /**
     * The comment content. A \n indicates a new line, e.g.: Hey\nAharon will be a 2 lines comment.
 * Max length: 10000
     * @type {string}
     * @memberof Comments
     */
    'body'?: string;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof Comments
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the comment.
     * @type {string}
     * @memberof Comments
     */
    'createdBy'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Comments
     */
    'updatedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Comments
     */
    'deletedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Comments
     */
    'clientCreatedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Comments
     */
    'clientUpdatedAt'?: string;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof Comments
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof Comments
     */
    'permittedAttributes'?: Array<string>;
}

