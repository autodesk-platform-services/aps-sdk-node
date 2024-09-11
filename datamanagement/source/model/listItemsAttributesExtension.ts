
import { Type } from './type';

/**
 * An object that contains properties  specific to the ListItems command,   extending the default properties of a command.
 * @export
 * @interface ListItemsAttributesExtension
 */
export interface ListItemsAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof ListItemsAttributesExtension
     */
    'type'?: Type;
    /**
     * The version of the schema. Must be ``1.0.0``  for the ListItems command. 
     * @type {string}
     * @memberof ListItemsAttributesExtension
     */
    'version'?: string;
}



