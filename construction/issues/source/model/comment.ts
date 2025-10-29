

/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * The comment ID.
     * @type {string}
     * @memberof Comment
     */
    'id'?: string;
    /**
     * The comment content. A \n indicates a new line, e.g.: Hey\nAharon will be a 2 lines comment.
 * Max length: 10000
     * @type {string}
     * @memberof Comment
     */
    'body'?: string;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof Comment
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the comment.
     * @type {string}
     * @memberof Comment
     */
    'createdBy'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Comment
     */
    'updatedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Comment
     */
    'deletedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Comment
     */
    'clientCreatedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Comment
     */
    'clientUpdatedAt'?: string;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof Comment
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof Comment
     */
    'permittedAttributes'?: Array<string>;
}

