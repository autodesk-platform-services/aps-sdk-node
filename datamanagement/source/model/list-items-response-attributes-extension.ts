/* tslint:disable */
/* eslint-disable */

import { TypeCommandtypeListItems } from './type-commandtype-list-items';

/**
 * An object that contains properties  specific to the ListItems command,   extending the default properties of a command.
 * @export
 * @interface ListItemsResponseAttributesExtension
 */
export interface ListItemsResponseAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypeListItems}
     * @memberof ListItemsResponseAttributesExtension
     */
    'type'?: TypeCommandtypeListItems;
    /**
     * The version of the schema. Must be ``1.0.0``  for the ListItems command. 
     * @type {string}
     * @memberof ListItemsResponseAttributesExtension
     */
    'version'?: string;
}



