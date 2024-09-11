
import { Type } from './type';

/**
 * An object that contains properties  specific to the PublishModel command,   extending the default properties of a command.
 * @export
 * @interface PublishModelPayloadAttributesExtension
 */
export interface PublishModelPayloadAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof PublishModelPayloadAttributesExtension
     */
    'type'?: Type;
    /**
     * The version of the schema. Must be ``1.0.0``  for the PublishModel command. 
     * @type {string}
     * @memberof PublishModelPayloadAttributesExtension
     */
    'version'?: string;
}



