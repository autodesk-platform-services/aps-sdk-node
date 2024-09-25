/* tslint:disable */
/* eslint-disable */

import { ListRefsResponseAttributes } from './list-refs-response-attributes';
import { ListRefsResponseIncluded } from './list-refs-response-included';
import { ListRefsResponseRelationships } from './list-refs-response-relationships';
import { TypeCommands } from './type-commands';

/**
 * The ``data`` object returned by the ListRefs command.
 * @export
 * @interface ListRefsResponse
 */
export interface ListRefsResponse {
    /**
     * 
     * @type {TypeCommands}
     * @memberof ListRefsResponse
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof ListRefsResponse
     */
    'id'?: string;
    /**
     * 
     * @type {ListRefsResponseAttributes}
     * @memberof ListRefsResponse
     */
    'attributes'?: ListRefsResponseAttributes;
    /**
     * 
     * @type {ListRefsResponseRelationships}
     * @memberof ListRefsResponse
     */
    'relationships'?: ListRefsResponseRelationships;
    /**
     * An array of objects, where each object  represents a referenced resource.
     * @type {Array<ListRefsResponseIncluded>}
     * @memberof ListRefsResponse
     */
    'included'?: Array<ListRefsResponseIncluded>;
}



