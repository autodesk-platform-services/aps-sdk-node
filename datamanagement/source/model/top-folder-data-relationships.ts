/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsLinksFolderParent } from './json-api-relationships-links-folder-parent';
import { JsonApiRelationshipsLinksInternal } from './json-api-relationships-links-internal';
import { JsonApiRelationshipsLinksLinks } from './json-api-relationships-links-links';
import { JsonApiRelationshipsLinksRefs } from './json-api-relationships-links-refs';

/**
 * 
 * @export
 * @interface TopFolderDataRelationships
 */
export interface TopFolderDataRelationships {
    /**
     * 
     * @type {JsonApiRelationshipsLinksFolderParent}
     * @memberof TopFolderDataRelationships
     */
    'parent': JsonApiRelationshipsLinksFolderParent;
    /**
     * 
     * @type {JsonApiRelationshipsLinksRefs}
     * @memberof TopFolderDataRelationships
     */
    'refs': JsonApiRelationshipsLinksRefs;
    /**
     * 
     * @type {JsonApiRelationshipsLinksLinks}
     * @memberof TopFolderDataRelationships
     */
    'links': JsonApiRelationshipsLinksLinks;
    /**
     * 
     * @type {JsonApiRelationshipsLinksInternal}
     * @memberof TopFolderDataRelationships
     */
    'contents': JsonApiRelationshipsLinksInternal;
}

