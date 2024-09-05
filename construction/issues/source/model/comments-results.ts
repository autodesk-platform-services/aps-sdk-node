/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface CommentsResults
 */
export interface CommentsResults {
    /**
     * The comment ID.
     * @type {string}
     * @memberof CommentsResults
     */
    'id'?: string;
    /**
     * The comment content. A \\n indicates a new line, e.g.: Hey\\nAharon will be a 2 lines comment. Max length: 10000
     * @type {string}
     * @memberof CommentsResults
     */
    'body'?: string;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof CommentsResults
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the comment.
     * @type {string}
     * @memberof CommentsResults
     */
    'createdBy'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof CommentsResults
     */
    'updatedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof CommentsResults
     */
    'deletedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof CommentsResults
     */
    'clientCreatedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof CommentsResults
     */
    'clientUpdatedAt'?: string;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof CommentsResults
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof CommentsResults
     */
    'permittedAttributes'?: Array<string>;
}

