/* tslint:disable */
/* eslint-disable */

import { ListRefsCommandAttributes } from './list-refs-command-attributes';
import { ListRefsCommandRelationships } from './list-refs-command-relationships';
import { TypeCommands } from './type-commands';

/**
 * An object that contains the input data required to execute the ListRefs command.  The ListRefs command retrieves the custom relationships between specified versions of items and other resources in the data domain service (folders, items, and versions). You can retrieve the relationships of up to 50 versions.
 * @export
 * @interface ListRefsCommand
 */
export interface ListRefsCommand {
    /**
     * 
     * @type {TypeCommands}
     * @memberof ListRefsCommand
     */
    'type'?: TypeCommands;
    /**
     * 
     * @type {ListRefsCommandAttributes}
     * @memberof ListRefsCommand
     */
    'attributes'?: ListRefsCommandAttributes;
    /**
     * 
     * @type {ListRefsCommandRelationships}
     * @memberof ListRefsCommand
     */
    'relationships'?: ListRefsCommandRelationships;
}



