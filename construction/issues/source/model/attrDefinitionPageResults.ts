
import { AttrDefinitionPageResultsMetadata } from './attrDefinitionPageResultsMetadata';
import { DataType } from './dataType';

/**
 * 
 * @export
 * @interface AttrDefinitionPageResults
 */
export interface AttrDefinitionPageResults {
    /**
     * The ID of the custom attribute.
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'id'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'containerId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'mappedItemType'?: string;
    /**
     * The ID of the item (type, or subtype) the custom attribute is mapped to.
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'mappedItemId'?: string;
    /**
     * The order that the custom attributes were mapped to the item (type, subtype). This is only relevant to non-inherited mappings.
     * @type {number}
     * @memberof AttrDefinitionPageResults
     */
    'order'?: number;
    /**
     * 
     * @type {DataType}
     * @memberof AttrDefinitionPageResults
     */
    'dataType'?: DataType;
    /**
     * 
     * @type {AttrDefinitionPageResultsMetadata}
     * @memberof AttrDefinitionPageResults
     */
    'metadata'?: AttrDefinitionPageResultsMetadata;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrDefinitionPageResults
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrDefinitionPageResults
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the custom attribute.
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'createdBy'?: string;
    /**
     * The last date and time the custom attribute was updated, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'updatedAt'?: string;
    /**
     * The Autodesk ID of the user who last updated the custom attribute.
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'updatedBy'?: string;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'deletedBy'?: string;
    /**
     * The title of the custom attribute.
 * 
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'title'?: string;
    /**
     * The description of the custom attribute.
     * @type {string}
     * @memberof AttrDefinitionPageResults
     */
    'description'?: string;
}



