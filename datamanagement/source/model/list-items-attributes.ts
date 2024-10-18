/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './command-execution-status';
import { ListItemsAttributesExtension } from './list-items-attributes-extension';

/**
 * Contains the properties of the response to the ListItems command.
 * @export
 * @interface ListItemsAttributes
 */
export interface ListItemsAttributes {
    /**
     * 
     * @type {CommandExecutionStatus}
     * @memberof ListItemsAttributes
     */
    'status'?: CommandExecutionStatus;
    /**
     * 
     * @type {ListItemsAttributesExtension}
     * @memberof ListItemsAttributes
     */
    'extension'?: ListItemsAttributesExtension;
}



