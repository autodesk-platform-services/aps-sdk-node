/* tslint:disable */
/* eslint-disable */

import { RelationshipLinksDataMeta } from './relationship-links-data-meta';
import { TypeLink } from './type-link';

/**
 * 
 * @export
 * @interface RelationshipLinksData
 */
export interface RelationshipLinksData {
    /**
     * 
     * @type {TypeLink}
     * @memberof RelationshipLinksData
     */
    'type'?: TypeLink;
    /**
     * The ID of the resource.
     * @type {string}
     * @memberof RelationshipLinksData
     */
    'id'?: string;
    /**
     * 
     * @type {RelationshipLinksDataMeta}
     * @memberof RelationshipLinksData
     */
    'meta'?: RelationshipLinksDataMeta;
}



