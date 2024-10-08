/* tslint:disable */
/* eslint-disable */

import { TypeCommandtypeGetPublishModelJob } from './type-commandtype-get-publish-model-job';

/**
 * An object that contains properties  specific to the GetPublishModelJob command,   extending the default properties of a command.
 * @export
 * @interface PublishModelJobPayloadAttributesExtension
 */
export interface PublishModelJobPayloadAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypeGetPublishModelJob}
     * @memberof PublishModelJobPayloadAttributesExtension
     */
    'type'?: TypeCommandtypeGetPublishModelJob;
    /**
     * The version of the schema. Must be ``1.0.0``  for the GetPublishModelJob command. 
     * @type {string}
     * @memberof PublishModelJobPayloadAttributesExtension
     */
    'version'?: string;
}



