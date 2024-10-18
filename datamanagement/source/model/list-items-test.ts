/* tslint:disable */
/* eslint-disable */

import { ListItemsAttributes } from './list-items-attributes';
import { ListItemsTestRelationships } from './list-items-test-relationships';
import { TypeCommands } from './type-commands';

/**
 * The ``data`` object returned by the ListItems command.
 * @export
 * @interface ListItemsTest
 */
export interface ListItemsTest {
    /**
     * 
     * @type {TypeCommands}
     * @memberof ListItemsTest
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof ListItemsTest
     */
    'id'?: string;
    /**
     * 
     * @type {ListItemsAttributes}
     * @memberof ListItemsTest
     */
    'attributes'?: ListItemsAttributes;
    /**
     * 
     * @type {ListItemsTestRelationships}
     * @memberof ListItemsTest
     */
    'relationships'?: ListItemsTestRelationships;
}



