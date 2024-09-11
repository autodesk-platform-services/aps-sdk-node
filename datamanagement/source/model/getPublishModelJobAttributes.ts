
import { CommandExecutionStatus } from './commandExecutionStatus';
import { GetPublishModelJobPayloadAttributesExtension } from './getPublishModelJobPayloadAttributesExtension';

/**
 * Contains the properties of the response to the GetPublishModelJob command.
 * @export
 * @interface GetPublishModelJobAttributes
 */
export interface GetPublishModelJobAttributes {
    /**
     * 
     * @type {CommandExecutionStatus}
     * @memberof GetPublishModelJobAttributes
     */
    'status'?: CommandExecutionStatus;
    /**
     * 
     * @type {GetPublishModelJobPayloadAttributesExtension}
     * @memberof GetPublishModelJobAttributes
     */
    'extension'?: GetPublishModelJobPayloadAttributesExtension;
}



