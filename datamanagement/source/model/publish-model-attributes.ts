/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './command-execution-status';
import { PublishModelAttributesExtension } from './publish-model-attributes-extension';

/**
 * Contains the properties of the response to the PublishModel command.
 * @export
 * @interface PublishModelAttributes
 */
export interface PublishModelAttributes {
    /**
     * 
     * @type {PublishModelAttributesExtension}
     * @memberof PublishModelAttributes
     */
    'extension'?: PublishModelAttributesExtension;
    /**
     * 
     * @type {CommandExecutionStatus}
     * @memberof PublishModelAttributes
     */
    'status'?: CommandExecutionStatus;
}



