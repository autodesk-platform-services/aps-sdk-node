/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';
import { RelationshipLinksData } from './relationship-links-data';

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
     * @type {Array<RelationshipLinksData>}
     * @memberof RelationshipLinks
     */
    'data'?: Array<RelationshipLinksData>;
}

