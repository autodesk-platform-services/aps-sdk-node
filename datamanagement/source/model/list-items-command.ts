/* tslint:disable */
/* eslint-disable */

import { ListItemsCommandAttributes } from './list-items-command-attributes';
import { ListItemsCommandRelationships } from './list-items-command-relationships';
import { TypeCommands } from './type-commands';

/**
 * An object that contains the input data required to execute the ListItems command.  The ListItems command retrieves metadata for up to 50 specified items. For example, an item name, or the date it was created. It also returns the tip (latest) version of the items.
 * @export
 * @interface ListItemsCommand
 */
export interface ListItemsCommand {
    /**
     * 
     * @type {TypeCommands}
     * @memberof ListItemsCommand
     */
    'type'?: TypeCommands;
    /**
     * 
     * @type {ListItemsCommandAttributes}
     * @memberof ListItemsCommand
     */
    'attributes'?: ListItemsCommandAttributes;
    /**
     * 
     * @type {ListItemsCommandRelationships}
     * @memberof ListItemsCommand
     */
    'relationships'?: ListItemsCommandRelationships;
}



