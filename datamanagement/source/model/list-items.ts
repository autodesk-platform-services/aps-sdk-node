/* tslint:disable */
/* eslint-disable */

import { ListItemsAttributes } from './list-items-attributes';
import { ListItemsRelationships } from './list-items-relationships';
import { TypeCommands } from './type-commands';
import { VersionData } from './version-data';

/**
 * The ``data`` object returned by the ListItems command.
 * @export
 * @interface ListItems
 */
export interface ListItems {
    /**
     * 
     * @type {TypeCommands}
     * @memberof ListItems
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof ListItems
     */
    'id'?: string;
    /**
     * 
     * @type {ListItemsAttributes}
     * @memberof ListItems
     */
    'attributes'?: ListItemsAttributes;
    /**
     * 
     * @type {ListItemsRelationships}
     * @memberof ListItems
     */
    'relationships'?: ListItemsRelationships;
    /**
     * An array of objects, which contains a single  object. The object represents the tip version  of the item. 
     * @type {Array<VersionData>}
     * @memberof ListItems
     */
    'included'?: Array<VersionData>;
}



