
import { AttrDefinitionMetadata } from './attrDefinitionMetadata';
import { DataType } from './dataType';

/**
 * 
 * @export
 * @interface AttrDefinition
 */
export interface AttrDefinition {
    /**
     * The ID of the custom attribute.
     * @type {string}
     * @memberof AttrDefinition
     */
    'id'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof AttrDefinition
     */
    'containerId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AttrDefinition
     */
    'mappedItemType'?: string;
    /**
     * The ID of the item (type, or subtype) the custom attribute is mapped to.
     * @type {string}
     * @memberof AttrDefinition
     */
    'mappedItemId'?: string;
    /**
     * The order that the custom attributes were mapped to the item (type, subtype). This is only relevant to non-inherited mappings.
     * @type {number}
     * @memberof AttrDefinition
     */
    'order'?: number;
    /**
     * 
     * @type {DataType}
     * @memberof AttrDefinition
     */
    'dataType'?: DataType;
    /**
     * 
     * @type {AttrDefinitionMetadata}
     * @memberof AttrDefinition
     */
    'metadata'?: AttrDefinitionMetadata;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrDefinition
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrDefinition
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrDefinition
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the custom attribute.
     * @type {string}
     * @memberof AttrDefinition
     */
    'createdBy'?: string;
    /**
     * The last date and time the custom attribute was updated, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrDefinition
     */
    'updatedAt'?: string;
    /**
     * The Autodesk ID of the user who last updated the custom attribute.
     * @type {string}
     * @memberof AttrDefinition
     */
    'updatedBy'?: string;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrDefinition
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof AttrDefinition
     */
    'deletedBy'?: string;
    /**
     * The title of the custom attribute.
 * 
     * @type {string}
     * @memberof AttrDefinition
     */
    'title'?: string;
    /**
     * The description of the custom attribute.
     * @type {string}
     * @memberof AttrDefinition
     */
    'description'?: string;
}



