
import { ListRefsPayloadAttributes } from './listRefsPayloadAttributes';
import { ListRefsPayloadRelationships } from './listRefsPayloadRelationships';
import { TypeCommands } from './typeCommands';

/**
 * An object that contains the input data required to execute the ListRefs command.  The ListRefs command retrieves the custom relationships between specified versions of items and other resources in the data domain service (folders, items, and versions). You can retrieve the relationships of up to 50 versions.
 * @export
 * @interface ListRefsPayload
 */
export interface ListRefsPayload {
    /**
     * 
     * @type {TypeCommands}
     * @memberof ListRefsPayload
     */
    'type'?: TypeCommands;
    /**
     * 
     * @type {ListRefsPayloadAttributes}
     * @memberof ListRefsPayload
     */
    'attributes'?: ListRefsPayloadAttributes;
    /**
     * 
     * @type {ListRefsPayloadRelationships}
     * @memberof ListRefsPayload
     */
    'relationships'?: ListRefsPayloadRelationships;
}



