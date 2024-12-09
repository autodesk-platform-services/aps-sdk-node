/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './json-api-version';
import { RelationshipRefsPayloadData } from './relationship-refs-payload-data';

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

