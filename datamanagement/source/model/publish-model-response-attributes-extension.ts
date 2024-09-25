/* tslint:disable */
/* eslint-disable */

import { TypeCommandtypePublishmodel } from './type-commandtype-publishmodel';

/**
 * An object that contains properties  specific to the PublishModel command,   extending the default properties of a command.
 * @export
 * @interface PublishModelResponseAttributesExtension
 */
export interface PublishModelResponseAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypePublishmodel}
     * @memberof PublishModelResponseAttributesExtension
     */
    'type'?: TypeCommandtypePublishmodel;
    /**
     * The version of the schema. Always ``1.0.0``  for the PublishModel command. 
     * @type {string}
     * @memberof PublishModelResponseAttributesExtension
     */
    'version'?: string;
}



