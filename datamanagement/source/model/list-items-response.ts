/* tslint:disable */
/* eslint-disable */

import { ListItemsResponseAttributes } from './list-items-response-attributes';
import { ListItemsResponseRelationships } from './list-items-response-relationships';
import { TypeCommands } from './type-commands';
import { VersionData } from './version-data';

/**
 * The ``data`` object returned by the ListItems command.
 * @export
 * @interface ListItemsResponse
 */
export interface ListItemsResponse {
    /**
     * 
     * @type {TypeCommands}
     * @memberof ListItemsResponse
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof ListItemsResponse
     */
    'id'?: string;
    /**
     * 
     * @type {ListItemsResponseAttributes}
     * @memberof ListItemsResponse
     */
    'attributes'?: ListItemsResponseAttributes;
    /**
     * 
     * @type {ListItemsResponseRelationships}
     * @memberof ListItemsResponse
     */
    'relationships'?: ListItemsResponseRelationships;
    /**
     * An array of objects, which contains a single  object. The object represents the tip version  of the item. 
     * @type {Array<VersionData>}
     * @memberof ListItemsResponse
     */
    'included'?: Array<VersionData>;
}



