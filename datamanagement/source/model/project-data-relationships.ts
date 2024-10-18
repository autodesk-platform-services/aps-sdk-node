/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsLinksInternalResource } from './json-api-relationships-links-internal-resource';
import { JsonApiRelationshipsLinksOnlyBim } from './json-api-relationships-links-only-bim';
import { JsonApiRelationshipsLinksRootFolder } from './json-api-relationships-links-root-folder';
import { ProjectDataRelationshipsTopFolders } from './project-data-relationships-top-folders';

/**
 * Contains links to resources related to this project.
 * @export
 * @interface ProjectDataRelationships
 */
export interface ProjectDataRelationships {
    /**
     * 
     * @type {JsonApiRelationshipsLinksInternalResource}
     * @memberof ProjectDataRelationships
     */
    'hub'?: JsonApiRelationshipsLinksInternalResource;
    /**
     * 
     * @type {JsonApiRelationshipsLinksRootFolder}
     * @memberof ProjectDataRelationships
     */
    'rootFolder'?: JsonApiRelationshipsLinksRootFolder;
    /**
     * 
     * @type {ProjectDataRelationshipsTopFolders}
     * @memberof ProjectDataRelationships
     */
    'topFolders'?: ProjectDataRelationshipsTopFolders;
    /**
     * 
     * @type {JsonApiRelationshipsLinksOnlyBim}
     * @memberof ProjectDataRelationships
     */
    'issues'?: JsonApiRelationshipsLinksOnlyBim;
    /**
     * 
     * @type {JsonApiRelationshipsLinksOnlyBim}
     * @memberof ProjectDataRelationships
     */
    'submittals'?: JsonApiRelationshipsLinksOnlyBim;
    /**
     * 
     * @type {JsonApiRelationshipsLinksOnlyBim}
     * @memberof ProjectDataRelationships
     */
    'rfis'?: JsonApiRelationshipsLinksOnlyBim;
    /**
     * 
     * @type {JsonApiRelationshipsLinksOnlyBim}
     * @memberof ProjectDataRelationships
     */
    'markups'?: JsonApiRelationshipsLinksOnlyBim;
    /**
     * 
     * @type {JsonApiRelationshipsLinksOnlyBim}
     * @memberof ProjectDataRelationships
     */
    'checklists'?: JsonApiRelationshipsLinksOnlyBim;
    /**
     * 
     * @type {JsonApiRelationshipsLinksOnlyBim}
     * @memberof ProjectDataRelationships
     */
    'cost'?: JsonApiRelationshipsLinksOnlyBim;
    /**
     * 
     * @type {JsonApiRelationshipsLinksOnlyBim}
     * @memberof ProjectDataRelationships
     */
    'locations'?: JsonApiRelationshipsLinksOnlyBim;
}

