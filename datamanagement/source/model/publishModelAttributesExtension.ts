
import { Type } from './type';

/**
 * An object that contains properties  specific to the PublishModel command,   extending the default properties of a command.
 * @export
 * @interface PublishModelAttributesExtension
 */
export interface PublishModelAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof PublishModelAttributesExtension
     */
    'type'?: Type;
    /**
     * The version of the schema. Always ``1.0.0``  for the PublishModel command. 
     * @type {string}
     * @memberof PublishModelAttributesExtension
     */
    'version'?: string;
}



