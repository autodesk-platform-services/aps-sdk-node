
import { JsonApiRelationshipsLinksFolderParent } from './jsonApiRelationshipsLinksFolderParent';
import { JsonApiRelationshipsLinksInternal } from './jsonApiRelationshipsLinksInternal';
import { JsonApiRelationshipsLinksLinks } from './jsonApiRelationshipsLinksLinks';
import { JsonApiRelationshipsLinksRefs } from './jsonApiRelationshipsLinksRefs';

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

