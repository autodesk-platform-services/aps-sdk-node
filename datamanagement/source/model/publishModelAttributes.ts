/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './commandExecutionStatus';
import { PublishModelAttributesExtension } from './publishModelAttributesExtension';

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



