/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsLinksInternalResource } from './jsonApiRelationshipsLinksInternalResource';
import { JsonApiRelationshipsLinksOnlyBim } from './jsonApiRelationshipsLinksOnlyBim';
import { JsonApiRelationshipsLinksRootFolder } from './jsonApiRelationshipsLinksRootFolder';
import { ProjectDataRelationshipsTopFolders } from './projectDataRelationshipsTopFolders';

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

