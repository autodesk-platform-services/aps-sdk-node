/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './command-execution-status';
import { ListItemsResponseAttributesExtension } from './list-items-response-attributes-extension';

/**
 * Contains the properties of the response to the ListItems command.
 * @export
 * @interface ListItemsResponseAttributes
 */
export interface ListItemsResponseAttributes {
    /**
     * 
     * @type {CommandExecutionStatus}
     * @memberof ListItemsResponseAttributes
     */
    'status'?: CommandExecutionStatus;
    /**
     * 
     * @type {ListItemsResponseAttributesExtension}
     * @memberof ListItemsResponseAttributes
     */
    'extension'?: ListItemsResponseAttributesExtension;
}



