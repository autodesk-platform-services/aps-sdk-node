/* tslint:disable */
/* eslint-disable */

import { AttrDefinitionResultsMetadata } from './attrDefinitionResultsMetadata';
import { DataType } from './dataType';

/**
 * 
 * @export
 * @interface AttrDefinitionResults
 */
export interface AttrDefinitionResults {
    /**
     * The ID of the custom attribute.
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'id'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'containerId'?: string;
    /**
     * 
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'mappedItemType'?: string;
    /**
     * The ID of the item (type, or subtype) the custom attribute is mapped to.
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'mappedItemId'?: string;
    /**
     * The order that the custom attributes were mapped to the item (type, subtype). This is only relevant to non-inherited mappings.
     * @type {number}
     * @memberof AttrDefinitionResults
     */
    'order'?: number;
    /**
     * 
     * @type {DataType}
     * @memberof AttrDefinitionResults
     */
    'dataType'?: DataType;
    /**
     * 
     * @type {AttrDefinitionResultsMetadata}
     * @memberof AttrDefinitionResults
     */
    'metadata'?: AttrDefinitionResultsMetadata;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrDefinitionResults
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof AttrDefinitionResults
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the custom attribute.
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'createdBy'?: string;
    /**
     * The last date and time the custom attribute was updated, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'updatedAt'?: string;
    /**
     * The Autodesk ID of the user who last updated the custom attribute.
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'updatedBy'?: string;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'deletedBy'?: string;
    /**
     * The title of the custom attribute. 
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'title'?: string;
    /**
     * The description of the custom attribute.
     * @type {string}
     * @memberof AttrDefinitionResults
     */
    'description'?: string;
}



