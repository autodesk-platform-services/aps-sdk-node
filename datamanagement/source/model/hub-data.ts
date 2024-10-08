/* tslint:disable */
/* eslint-disable */

import { HubDataAttributes } from './hub-data-attributes';
import { HubDataRelationships } from './hub-data-relationships';
import { JsonApiLinksSelf } from './json-api-links-self';
import { TypeHub } from './type-hub';

/**
 * The object containing information about the hub.
 * @export
 * @interface HubData
 */
export interface HubData {
    /**
     * 
     * @type {TypeHub}
     * @memberof HubData
     */
    'type'?: TypeHub;
    /**
     * The hub ID, which uniquely identifies the hub.
     * @type {string}
     * @memberof HubData
     */
    'id'?: string;
    /**
     * 
     * @type {HubDataAttributes}
     * @memberof HubData
     */
    'attributes'?: HubDataAttributes;
    /**
     * 
     * @type {HubDataRelationships}
     * @memberof HubData
     */
    'relationships'?: HubDataRelationships;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof HubData
     */
    'links': JsonApiLinksSelf;
}



