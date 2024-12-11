/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './commandExecutionStatus';
import { PublishModelJobAttributesExtension } from './publishModelJobAttributesExtension';

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



