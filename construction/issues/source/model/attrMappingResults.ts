/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface AttrMappingResults
 */
export interface AttrMappingResults {
    /**
     * The ID of the custom attribute.
     * @type {string}
     * @memberof AttrMappingResults
     */
    'id'?: string;
    /**
     * The ID of the custom attribute definition.
     * @type {string}
     * @memberof AttrMappingResults
     */
    'attributeDefinitionId'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof AttrMappingResults
     */
    'containerId'?: string;
    /**
     * The title of the custom attribute. 
     * @type {string}
     * @memberof AttrMappingResults
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof AttrMappingResults
     */
    'mappedItemType'?: string;
    /**
     * The ID of the item (type, or subtype) the custom attribute is mapped to.
     * @type {string}
     * @memberof AttrMappingResults
     */
    'mappedItemId'?: string;
    /**
     * The order that the custom attributes were mapped to the item (type, subtype). This is only relevant to non-inherited mappings.
     * @type {number}
     * @memberof AttrMappingResults
     */
    'order'?: number;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrMappingResults
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrMappingResults
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrMappingResults
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the custom attribute.
     * @type {string}
     * @memberof AttrMappingResults
     */
    'createdBy'?: string;
    /**
     * The last date and time the custom attribute was updated, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrMappingResults
     */
    'updatedAt'?: string;
    /**
     * The Autodesk ID of the user who last updated the custom attribute.
     * @type {string}
     * @memberof AttrMappingResults
     */
    'updatedBy'?: string;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrMappingResults
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof AttrMappingResults
     */
    'deletedBy'?: string;
    /**
     * The description of the custom attribute.
     * @type {string}
     * @memberof AttrMappingResults
     */
    'description'?: string;
}

