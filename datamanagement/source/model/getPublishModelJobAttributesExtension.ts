
import { TypeCommandtypePublishmodel } from './typeCommandtypePublishmodel';

/**
 * An object that contains properties  specific to the GetPublishModelJob command,   extending the default properties of a command.
 * @export
 * @interface GetPublishModelJobAttributesExtension
 */
export interface GetPublishModelJobAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypePublishmodel}
     * @memberof GetPublishModelJobAttributesExtension
     */
    'type'?: TypeCommandtypePublishmodel;
    /**
     * The version of the schema. Must be ``1.0.0``  for the GetPublishModelJob command. 
     * @type {string}
     * @memberof GetPublishModelJobAttributesExtension
     */
    'version'?: string;
}



