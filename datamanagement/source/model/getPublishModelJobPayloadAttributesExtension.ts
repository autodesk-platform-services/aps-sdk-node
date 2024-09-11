
import { Type } from './type';

/**
 * An object that contains properties  specific to the GetPublishModelJob command,   extending the default properties of a command.
 * @export
 * @interface GetPublishModelJobPayloadAttributesExtension
 */
export interface GetPublishModelJobPayloadAttributesExtension {
    /**
     * 
     * @type {Type}
     * @memberof GetPublishModelJobPayloadAttributesExtension
     */
    'type'?: Type;
    /**
     * The version of the schema. Must be ``1.0.0``  for the GetPublishModelJob command. 
     * @type {string}
     * @memberof GetPublishModelJobPayloadAttributesExtension
     */
    'version'?: string;
}



