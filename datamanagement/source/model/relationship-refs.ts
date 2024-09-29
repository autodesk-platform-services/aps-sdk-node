/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './json-api-version';
import { RelationshipRefsData } from './relationship-refs-data';
import { RelationshipRefsIncluded } from './relationship-refs-included';
import { RelationshipRefsLinks } from './relationship-refs-links';

/**
 * 
 * @export
 * @interface RelationshipRefs
 */
export interface RelationshipRefs {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof RelationshipRefs
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {RelationshipRefsLinks}
     * @memberof RelationshipRefs
     */
    'links'?: RelationshipRefsLinks;
    /**
     * An array of objects where each object represents the data of a folder, item, or resource.
     * @type {Array<RelationshipRefsData>}
     * @memberof RelationshipRefs
     */
    'data'?: Array<RelationshipRefsData>;
    /**
     * An array of objects, where each object represents a folder, item, or version included within this resource.
     * @type {Array<RelationshipRefsIncluded>}
     * @memberof RelationshipRefs
     */
    'included'?: Array<RelationshipRefsIncluded>;
}

