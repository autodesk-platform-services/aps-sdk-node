/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './command-execution-status';
import { PublishWithoutLinksResponseAttributesExtension } from './publish-without-links-response-attributes-extension';

/**
 * Contains the properties of the response to the PublishWithoutLinks command.
 * @export
 * @interface PublishWithoutLinksResponseAttributes
 */
export interface PublishWithoutLinksResponseAttributes {
    /**
     * 
     * @type {PublishWithoutLinksResponseAttributesExtension}
     * @memberof PublishWithoutLinksResponseAttributes
     */
    'extension'?: PublishWithoutLinksResponseAttributesExtension;
    /**
     * 
     * @type {CommandExecutionStatus}
     * @memberof PublishWithoutLinksResponseAttributes
     */
    'status'?: CommandExecutionStatus;
}



