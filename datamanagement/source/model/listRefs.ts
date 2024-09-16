
import { ListRefsAttributes } from './listRefsAttributes';
import { ListRefsIncluded } from './listRefsIncluded';
import { ListRefsRelationships } from './listRefsRelationships';
import { TypeCommands } from './typeCommands';

/**
 * The ``data`` object returned by the ListRefs command.
 * @export
 * @interface ListRefs
 */
export interface ListRefs {
    /**
     * 
     * @type {TypeCommands}
     * @memberof ListRefs
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof ListRefs
     */
    'id'?: string;
    /**
     * 
     * @type {ListRefsAttributes}
     * @memberof ListRefs
     */
    'attributes'?: ListRefsAttributes;
    /**
     * 
     * @type {ListRefsRelationships}
     * @memberof ListRefs
     */
    'relationships'?: ListRefsRelationships;
    /**
     * An array of objects, where each object  represents a referenced resource.
     * @type {Array<ListRefsIncluded>}
     * @memberof ListRefs
     */
    'included'?: Array<ListRefsIncluded>;
}



