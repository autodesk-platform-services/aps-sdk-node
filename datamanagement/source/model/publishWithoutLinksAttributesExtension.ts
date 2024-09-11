
import { Type } from './type';

/**
 * An object that contains properties  specific to the PublishWithoutLinks command,   extending the default properties of a command.
 * @export
 * @interface PublishWithoutLinksAttributesExtension
 */
export interface PublishWithoutLinksAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof PublishWithoutLinksAttributesExtension
     */
    'type'?: Type;
    /**
     * The version of the schema. Always ``1.0.0``  for the PublishModel command. 
     * @type {string}
     * @memberof PublishWithoutLinksAttributesExtension
     */
    'version'?: string;
}



