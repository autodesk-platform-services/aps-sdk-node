/* tslint:disable */
/* eslint-disable */

import { HubsDataAttributesExtension } from './hubs-data-attributes-extension';

/**
 * 
 * @export
 * @interface RelationshipRefsDataMeta
 */
export interface RelationshipRefsDataMeta {
    /**
     * 
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'refType'?: string;
    /**
     * 
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'fromId'?: string;
    /**
     * 
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'fromType'?: string;
    /**
     * 
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'toId'?: string;
    /**
     * 
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'toType'?: string;
    /**
     * 
     * @type {string}
     * @memberof RelationshipRefsDataMeta
     */
    'direction'?: string;
    /**
     * 
     * @type {HubsDataAttributesExtension}
     * @memberof RelationshipRefsDataMeta
     */
    'extension'?: HubsDataAttributesExtension;
}

