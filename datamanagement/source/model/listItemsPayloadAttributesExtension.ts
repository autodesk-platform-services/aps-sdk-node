
import { ListItemsPayloadAttributesExtensionData } from './listItemsPayloadAttributesExtensionData';
import { Type } from './type';

/**
 * An object that contains properties  specific to the ListItems command,   extending the default properties of a command.
 * @export
 * @interface ListItemsPayloadAttributesExtension
 */
export interface ListItemsPayloadAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof ListItemsPayloadAttributesExtension
     */
    'type'?: Type;
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



