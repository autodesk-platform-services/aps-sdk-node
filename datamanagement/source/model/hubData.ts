/* tslint:disable */
/* eslint-disable */

import { HubDataAttributes } from './hubDataAttributes';
import { HubDataRelationships } from './hubDataRelationships';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { TypeHub } from './typeHub';

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



