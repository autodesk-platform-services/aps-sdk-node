

/**
 * 
 * @export
 * @interface AttrMappingPageResults
 */
export interface AttrMappingPageResults {
    /**
     * The ID of the custom attribute.
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'id'?: string;
    /**
     * The ID of the custom attribute definition.
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'attributeDefinitionId'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'containerId'?: string;
    /**
     * The title of the custom attribute.
 * 
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'mappedItemType'?: string;
    /**
     * The ID of the item (type, or subtype) the custom attribute is mapped to.
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'mappedItemId'?: string;
    /**
     * The order that the custom attributes were mapped to the item (type, subtype). This is only relevant to non-inherited mappings.
     * @type {number}
     * @memberof AttrMappingPageResults
     */
    'order'?: number;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrMappingPageResults
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrMappingPageResults
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the custom attribute.
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'createdBy'?: string;
    /**
     * The last date and time the custom attribute was updated, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'updatedAt'?: string;
    /**
     * The Autodesk ID of the user who last updated the custom attribute.
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'updatedBy'?: string;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'deletedBy'?: string;
    /**
     * The description of the custom attribute.
     * @type {string}
     * @memberof AttrMappingPageResults
     */
    'description'?: string;
}

