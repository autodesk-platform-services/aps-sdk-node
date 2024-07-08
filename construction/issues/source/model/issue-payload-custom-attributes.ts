/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface IssuePayloadCustomAttributes
 */
export interface IssuePayloadCustomAttributes {
    /**
     * The unique identifier of the custom attribute.
     * @type {string}
     * @memberof IssuePayloadCustomAttributes
     */
    'attributeDefinitionId': string;
    /**
     * Custom attribute value. Possible value types: string, number, null.
     * @type {object}
     * @memberof IssuePayloadCustomAttributes
     */
    'value': object;
}

