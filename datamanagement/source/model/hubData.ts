
import { HubDataAttributes } from './hubDataAttributes';
import { HubDataRelationships } from './hubDataRelationships';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { Region } from './region';
import { Type } from './type';

/**
 * The object containing information about the hub.
 * @export
 * @interface HubData
 */
export interface HubData {
    /**
     * 
     * @type {Type}
     * @memberof HubData
     */
    'type'?: Type;
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
     * @type {Region}
     * @memberof HubData
     */
    'region'?: Region;
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



