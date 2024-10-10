/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './command-execution-status';
import { PublishWithoutLinksAttributesExtension } from './publish-without-links-attributes-extension';

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



