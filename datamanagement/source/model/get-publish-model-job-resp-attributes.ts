/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './command-execution-status';
import { GetPublishModelJobRespAttributesExtension } from './get-publish-model-job-resp-attributes-extension';

/**
 * Contains the properties of the response to the GetPublishModelJob command.
 * @export
 * @interface GetPublishModelJobRespAttributes
 */
export interface GetPublishModelJobRespAttributes {
    /**
     * 
     * @type {CommandExecutionStatus}
     * @memberof GetPublishModelJobRespAttributes
     */
    'status'?: CommandExecutionStatus;
    /**
     * 
     * @type {GetPublishModelJobRespAttributesExtension}
     * @memberof GetPublishModelJobRespAttributes
     */
    'extension'?: GetPublishModelJobRespAttributesExtension;
}



