
import { ListItemsAttributes } from './listItemsAttributes';
import { ListItemsRelationships } from './listItemsRelationships';
import { Type } from './type';
import { VersionData } from './versionData';

/**
 * The ``data`` object returned by the ListItems command.
 * @export
 * @interface ListItems
 */
export interface ListItems {
    /**
     * 
     * @type {Type}
     * @memberof ListItems
     */
    'type'?: Type;
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



