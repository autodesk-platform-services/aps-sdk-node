
import { ListItemsAttributes } from './listItemsAttributes';
import { ListItemsTestRelationships } from './listItemsTestRelationships';
import { Type } from './type';

/**
 * The ``data`` object returned by the ListItems command.
 * @export
 * @interface ListItemsTest
 */
export interface ListItemsTest {
    /**
     * 
     * @type {Type}
     * @memberof ListItemsTest
     */
    'type'?: Type;
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



