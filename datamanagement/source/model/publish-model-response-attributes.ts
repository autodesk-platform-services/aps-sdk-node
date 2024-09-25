/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './command-execution-status';
import { PublishModelResponseAttributesExtension } from './publish-model-response-attributes-extension';

/**
 * Contains the properties of the response to the PublishModel command.
 * @export
 * @interface PublishModelResponseAttributes
 */
export interface PublishModelResponseAttributes {
    /**
     * 
     * @type {PublishModelResponseAttributesExtension}
     * @memberof PublishModelResponseAttributes
     */
    'extension'?: PublishModelResponseAttributesExtension;
    /**
     * 
     * @type {CommandExecutionStatus}
     * @memberof PublishModelResponseAttributes
     */
    'status'?: CommandExecutionStatus;
}



