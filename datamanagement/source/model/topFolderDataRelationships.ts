/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsLinksFolderParent } from './jsonApiRelationshipsLinksFolderParent';
import { JsonApiRelationshipsLinksInternal } from './jsonApiRelationshipsLinksInternal';
import { JsonApiRelationshipsLinksLinks } from './jsonApiRelationshipsLinksLinks';
import { JsonApiRelationshipsLinksRefs } from './jsonApiRelationshipsLinksRefs';

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

