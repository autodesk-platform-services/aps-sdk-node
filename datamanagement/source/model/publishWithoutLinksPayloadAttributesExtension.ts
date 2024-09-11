
import { Type } from './type';

/**
 * An object that contains properties  specific to the PublishWithoutLinks command,   extending the default properties of a command.
 * @export
 * @interface PublishWithoutLinksPayloadAttributesExtension
 */
export interface PublishWithoutLinksPayloadAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof PublishWithoutLinksPayloadAttributesExtension
     */
    'type'?: Type;
    /**
     * The version of the schema. Must be ``1.0.0``  for the PublishWithoutLinks command. 
     * @type {string}
     * @memberof PublishWithoutLinksPayloadAttributesExtension
     */
    'version'?: string;
}



