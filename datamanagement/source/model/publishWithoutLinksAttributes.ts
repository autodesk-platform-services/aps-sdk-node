/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './commandExecutionStatus';
import { PublishWithoutLinksAttributesExtension } from './publishWithoutLinksAttributesExtension';

/**
 * Contains the properties of the response to the PublishWithoutLinks command.
 * @export
 * @interface PublishWithoutLinksAttributes
 */
export interface PublishWithoutLinksAttributes {
    /**
     * 
     * @type {PublishWithoutLinksAttributesExtension}
     * @memberof PublishWithoutLinksAttributes
     */
    'extension'?: PublishWithoutLinksAttributesExtension;
    /**
     * 
     * @type {CommandExecutionStatus}
     * @memberof PublishWithoutLinksAttributes
     */
    'status'?: CommandExecutionStatus;
}



