import { ProjectsDataLinks } from './projects-data-links';
import { RefsDataRelationships } from './refs-data-relationships';
import { RelationshipRefsIncludedAttributes } from './relationship-refs-included-attributes';
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
     * @type {RelationshipRefsIncludedAttributes}
     * @memberof RelationshipRefsIncluded
     */
    'attributes'?: RelationshipRefsIncludedAttributes;
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
