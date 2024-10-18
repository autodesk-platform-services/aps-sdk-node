/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsLinksFolderParent } from './json-api-relationships-links-folder-parent';
import { JsonApiRelationshipsLinksInternal } from './json-api-relationships-links-internal';
import { JsonApiRelationshipsLinksLinks } from './json-api-relationships-links-links';
import { JsonApiRelationshipsLinksRefs } from './json-api-relationships-links-refs';

/**
 * Contains links to resources that are directly related to this folder.
 * @export
 * @interface FolderDataRelationships
 */
export interface FolderDataRelationships {
    /**
     * 
     * @type {JsonApiRelationshipsLinksFolderParent}
     * @memberof FolderDataRelationships
     */
    'parent': JsonApiRelationshipsLinksFolderParent;
    /**
     * 
     * @type {JsonApiRelationshipsLinksRefs}
     * @memberof FolderDataRelationships
     */
    'refs': JsonApiRelationshipsLinksRefs;
    /**
     * 
     * @type {JsonApiRelationshipsLinksLinks}
     * @memberof FolderDataRelationships
     */
    'links': JsonApiRelationshipsLinksLinks;
    /**
     * 
     * @type {JsonApiRelationshipsLinksInternal}
     * @memberof FolderDataRelationships
     */
    'contents': JsonApiRelationshipsLinksInternal;
}

