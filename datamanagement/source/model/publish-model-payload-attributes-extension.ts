/* tslint:disable */
/* eslint-disable */

import { TypeCommandtypePublishmodel } from './type-commandtype-publishmodel';

/**
 * An object that contains properties  specific to the PublishModel command,   extending the default properties of a command.
 * @export
 * @interface PublishModelPayloadAttributesExtension
 */
export interface PublishModelPayloadAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypePublishmodel}
     * @memberof PublishModelPayloadAttributesExtension
     */
    'type'?: TypeCommandtypePublishmodel;
    /**
     * The version of the schema. Must be ``1.0.0``  for the PublishModel command. 
     * @type {string}
     * @memberof PublishModelPayloadAttributesExtension
     */
    'version'?: string;
}



