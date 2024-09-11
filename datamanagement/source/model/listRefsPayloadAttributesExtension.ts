
import { Type } from './type';

/**
 * An object that contains properties  specific to the ListRefs command,   extending the default properties of a command.
 * @export
 * @interface ListRefsPayloadAttributesExtension
 */
export interface ListRefsPayloadAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof ListRefsPayloadAttributesExtension
     */
    'type'?: Type;
    /**
     * The version of the schema. Must be ``1.0.0``  for the ListRefs command. 
     * @type {string}
     * @memberof ListRefsPayloadAttributesExtension
     */
    'version'?: string;
}



