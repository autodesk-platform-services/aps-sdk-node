/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface IssueCustomAttributes
 */
export interface IssueCustomAttributes {
    /**
     * The unique identifier of the custom attribute.
     * @type {string}
     * @memberof IssueCustomAttributes
     */
    'attributeDefinitionId'?: string;
    /**
     * Custom attribute value. Possible value types: string, number, null.
     * @type {object}
     * @memberof IssueCustomAttributes
     */
    'value'?: object;
    /**
     * The type of attribute. Possible values: numeric, paragraph, list (this corresponds to dropdown in the UI), text.
     * @type {string}
     * @memberof IssueCustomAttributes
     */
    'type'?: string;
    /**
     * Free text description of the attribute.
     * @type {string}
     * @memberof IssueCustomAttributes
     */
    'title'?: string;
}

