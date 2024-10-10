/* tslint:disable */
/* eslint-disable */

import { GetPublishModelJobRespAttributes } from './get-publish-model-job-resp-attributes';
import { TypeCommands } from './type-commands';

/**
 * The ``data`` object returned by the GetPublishModelJob command, if the model needs publishing. If the model is already published, the ``data`` object will bed ``null``. 
 * @export
 * @interface GetPublishModelJobResp
 */
export interface GetPublishModelJobResp {
    /**
     * 
     * @type {TypeCommands}
     * @memberof GetPublishModelJobResp
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof GetPublishModelJobResp
     */
    'id'?: string;
    /**
     * 
     * @type {GetPublishModelJobRespAttributes}
     * @memberof GetPublishModelJobResp
     */
    'attributes'?: GetPublishModelJobRespAttributes;
}



