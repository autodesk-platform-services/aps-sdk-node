/* tslint:disable */
/* eslint-disable */

import { TypeCommandtypePublishmodel } from './type-commandtype-publishmodel';

/**
 * An object that contains properties  specific to the GetPublishModelJob command,   extending the default properties of a command.
 * @export
 * @interface PublishModelJobAttributesExtension
 */
export interface PublishModelJobAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypePublishmodel}
     * @memberof PublishModelJobAttributesExtension
     */
    'type'?: TypeCommandtypePublishmodel;
    /**
     * The version of the schema. Must be ``1.0.0``  for the GetPublishModelJob command. 
     * @type {string}
     * @memberof PublishModelJobAttributesExtension
     */
    'version'?: string;
}



