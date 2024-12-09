/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface CreatedComment
 */
export interface CreatedComment {
    /**
     * The comment ID.
     * @type {string}
     * @memberof CreatedComment
     */
    'id'?: string;
    /**
     * The comment content. A \\n indicates a new line, e.g.: Hey\\nAharon will be a 2 lines comment. Max length: 10000
     * @type {string}
     * @memberof CreatedComment
     */
    'body'?: string;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof CreatedComment
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the comment.
     * @type {string}
     * @memberof CreatedComment
     */
    'createdBy'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof CreatedComment
     */
    'updatedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof CreatedComment
     */
    'deletedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof CreatedComment
     */
    'clientCreatedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof CreatedComment
     */
    'clientUpdatedAt'?: string;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof CreatedComment
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof CreatedComment
     */
    'permittedAttributes'?: Array<string>;
}

