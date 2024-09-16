
import { RelationshipLinksDataMeta } from './relationshipLinksDataMeta';
import { TypeLink } from './typeLink';

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



