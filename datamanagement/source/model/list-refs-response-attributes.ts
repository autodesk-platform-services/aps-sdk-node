/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './command-execution-status';
import { ListRefsCommandAttributesExtension } from './list-refs-command-attributes-extension';

/**
 * Contains the properties of the response to the ListRefs command.
 * @export
 * @interface ListRefsResponseAttributes
 */
export interface ListRefsResponseAttributes {
    /**
     * 
     * @type {CommandExecutionStatus}
     * @memberof ListRefsResponseAttributes
     */
    'status'?: CommandExecutionStatus;
    /**
     * 
     * @type {ListRefsCommandAttributesExtension}
     * @memberof ListRefsResponseAttributes
     */
    'extension'?: ListRefsCommandAttributesExtension;
}



