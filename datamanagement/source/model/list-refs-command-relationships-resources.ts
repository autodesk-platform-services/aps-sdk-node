/* tslint:disable */
/* eslint-disable */

import { ListRefsCommandRelationshipsResourcesData } from './list-refs-command-relationships-resources-data';

/**
 * Contains the list of versions  to check. The list can contain up to 50 versions.
 * @export
 * @interface ListRefsCommandRelationshipsResources
 */
export interface ListRefsCommandRelationshipsResources {
    /**
     * An array of objects, where each object  represents a version to check. 
     * @type {Array<ListRefsCommandRelationshipsResourcesData>}
     * @memberof ListRefsCommandRelationshipsResources
     */
    'data'?: Array<ListRefsCommandRelationshipsResourcesData>;
}

