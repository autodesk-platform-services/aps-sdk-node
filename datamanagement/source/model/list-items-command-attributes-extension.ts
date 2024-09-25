/* tslint:disable */
/* eslint-disable */

import { ListItemsCommandAttributesExtensionData } from './list-items-command-attributes-extension-data';
import { TypeCommandtypeListItems } from './type-commandtype-list-items';

/**
 * An object that contains properties  specific to the ListItems command,   extending the default properties of a command.
 * @export
 * @interface ListItemsCommandAttributesExtension
 */
export interface ListItemsCommandAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypeListItems}
     * @memberof ListItemsCommandAttributesExtension
     */
    'type'?: TypeCommandtypeListItems;
    /**
     * The version of the schema. Must be ``1.0.0``  for the ListItems command. 
     * @type {string}
     * @memberof ListItemsCommandAttributesExtension
     */
    'version'?: string;
    /**
     * 
     * @type {ListItemsCommandAttributesExtensionData}
     * @memberof ListItemsCommandAttributesExtension
     */
    'data'?: ListItemsCommandAttributesExtensionData;
}



