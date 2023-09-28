/* tslint:disable */
/* eslint-disable */

import { ProjectsDataLinks } from './projects-data-links';
import { RefsDataAttributes } from './refs-data-attributes';
import { RefsDataRelationships } from './refs-data-relationships';

/**
 * 
 * @export
 * @interface RelationshipRefsIncluded
 */
export interface RelationshipRefsIncluded {
    /**
     * 
     * @type {string}
     * @memberof RelationshipRefsIncluded
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof RelationshipRefsIncluded
     */
    'id'?: string;
    /**
     * 
     * @type {RefsDataAttributes}
     * @memberof RelationshipRefsIncluded
     */
    'attributes'?: RefsDataAttributes;
    /**
     * 
     * @type {ProjectsDataLinks}
     * @memberof RelationshipRefsIncluded
     */
    'links'?: ProjectsDataLinks;
    /**
     * 
     * @type {RefsDataRelationships}
     * @memberof RelationshipRefsIncluded
     */
    'relationships'?: RefsDataRelationships;
}

