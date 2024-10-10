/* tslint:disable */
/* eslint-disable */

import { TypeCommandtypePublishmodel } from './type-commandtype-publishmodel';

/**
 * An object that contains properties  specific to the GetPublishModelJob command,   extending the default properties of a command.
 * @export
 * @interface GetPublishModelJobRespAttributesExtension
 */
export interface GetPublishModelJobRespAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypePublishmodel}
     * @memberof GetPublishModelJobRespAttributesExtension
     */
    'type'?: TypeCommandtypePublishmodel;
    /**
     * The version of the schema. Must be ``1.0.0``  for the GetPublishModelJob command. 
     * @type {string}
     * @memberof GetPublishModelJobRespAttributesExtension
     */
    'version'?: string;
}



