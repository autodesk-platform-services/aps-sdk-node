
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';
import { RelationshipLinksData } from './relationshipLinksData';

/**
 * An object containing relationship links of a resource.
 * @export
 * @interface RelationshipLinks
 */
export interface RelationshipLinks {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof RelationshipLinks
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof RelationshipLinks
     */
    'links'?: JsonApiLinksSelf;
    /**
     * An array of objects where each object represents link.
     * @type {Set<RelationshipLinksData>}
     * @memberof RelationshipLinks
     */
    'data'?: Set<RelationshipLinksData>;
}

