/* tslint:disable */
/* eslint-disable */

import { ListItemsPayloadAttributesExtensionData } from './list-items-payload-attributes-extension-data';
import { TypeCommandtypeListItems } from './type-commandtype-list-items';

/**
 * An object that contains properties  specific to the ListItems command,   extending the default properties of a command.
 * @export
 * @interface ListItemsPayloadAttributesExtension
 */
export interface ListItemsPayloadAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypeListItems}
     * @memberof ListItemsPayloadAttributesExtension
     */
    'type'?: TypeCommandtypeListItems;
    /**
     * The version of the schema. Must be ``1.0.0``  for the ListItems command. 
     * @type {string}
     * @memberof ListItemsPayloadAttributesExtension
     */
    'version'?: string;
    /**
     * 
     * @type {ListItemsPayloadAttributesExtensionData}
     * @memberof ListItemsPayloadAttributesExtension
     */
    'data'?: ListItemsPayloadAttributesExtensionData;
}



