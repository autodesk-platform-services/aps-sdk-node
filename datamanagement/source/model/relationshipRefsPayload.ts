
import { JsonApiVersion } from './jsonApiVersion';
import { RelationshipRefsPayloadData } from './relationshipRefsPayloadData';

/**
 * An object that describes the custom relationship to be created.
 * @export
 * @interface RelationshipRefsPayload
 */
export interface RelationshipRefsPayload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof RelationshipRefsPayload
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {RelationshipRefsPayloadData}
     * @memberof RelationshipRefsPayload
     */
    'data': RelationshipRefsPayloadData;
}

