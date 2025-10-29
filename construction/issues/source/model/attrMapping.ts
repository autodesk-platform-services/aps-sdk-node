

/**
 * 
 * @export
 * @interface AttrMapping
 */
export interface AttrMapping {
    /**
     * The ID of the custom attribute.
     * @type {string}
     * @memberof AttrMapping
     */
    'id'?: string;
    /**
     * The ID of the custom attribute definition.
     * @type {string}
     * @memberof AttrMapping
     */
    'attributeDefinitionId'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof AttrMapping
     */
    'containerId'?: string;
    /**
     * The title of the custom attribute.
 * 
     * @type {string}
     * @memberof AttrMapping
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof AttrMapping
     */
    'mappedItemType'?: string;
    /**
     * The ID of the item (type, or subtype) the custom attribute is mapped to.
     * @type {string}
     * @memberof AttrMapping
     */
    'mappedItemId'?: string;
    /**
     * The order that the custom attributes were mapped to the item (type, subtype). This is only relevant to non-inherited mappings.
     * @type {number}
     * @memberof AttrMapping
     */
    'order'?: number;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrMapping
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrMapping
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrMapping
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the custom attribute.
     * @type {string}
     * @memberof AttrMapping
     */
    'createdBy'?: string;
    /**
     * The last date and time the custom attribute was updated, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrMapping
     */
    'updatedAt'?: string;
    /**
     * The Autodesk ID of the user who last updated the custom attribute.
     * @type {string}
     * @memberof AttrMapping
     */
    'updatedBy'?: string;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrMapping
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof AttrMapping
     */
    'deletedBy'?: string;
    /**
     * The description of the custom attribute.
     * @type {string}
     * @memberof AttrMapping
     */
    'description'?: string;
}

