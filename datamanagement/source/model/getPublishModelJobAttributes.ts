
import { CommandExecutionStatus } from './commandExecutionStatus';
import { GetPublishModelJobAttributesExtension } from './getPublishModelJobAttributesExtension';

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
     * @type {GetPublishModelJobAttributesExtension}
     * @memberof GetPublishModelJobAttributes
     */
    'extension'?: GetPublishModelJobAttributesExtension;
}



