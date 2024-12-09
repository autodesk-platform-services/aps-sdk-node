/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './command-execution-status';
import { PublishModelJobAttributesExtension } from './publish-model-job-attributes-extension';

/**
 * Contains the properties of the response to the GetPublishModelJob command.
 * @export
 * @interface PublishModelJobAttributes
 */
export interface PublishModelJobAttributes {
    /**
     * 
     * @type {CommandExecutionStatus}
     * @memberof PublishModelJobAttributes
     */
    'status'?: CommandExecutionStatus;
    /**
     * 
     * @type {PublishModelJobAttributesExtension}
     * @memberof PublishModelJobAttributes
     */
    'extension'?: PublishModelJobAttributesExtension;
}



