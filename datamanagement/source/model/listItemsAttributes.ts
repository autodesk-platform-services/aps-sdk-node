
import { CommandExecutionStatus } from './commandExecutionStatus';
import { ListItemsAttributesExtension } from './listItemsAttributesExtension';

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



