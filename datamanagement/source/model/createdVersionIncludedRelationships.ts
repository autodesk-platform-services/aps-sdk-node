/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsLinksFolderParent } from './jsonApiRelationshipsLinksFolderParent';
import { JsonApiRelationshipsLinksLinks } from './jsonApiRelationshipsLinksLinks';
import { JsonApiRelationshipsLinksRefs } from './jsonApiRelationshipsLinksRefs';
import { JsonApiRelationshipsLinksToTipVersion } from './jsonApiRelationshipsLinksToTipVersion';
import { JsonApiRelationshipsLinksVersions } from './jsonApiRelationshipsLinksVersions';

/**
 * Contains links to resources that are directly related to this item.
 * @export
 * @interface CreatedVersionIncludedRelationships
 */
export interface CreatedVersionIncludedRelationships {
    /**
     * 
     * @type {JsonApiRelationshipsLinksToTipVersion}
     * @memberof CreatedVersionIncludedRelationships
     */
    'tip': JsonApiRelationshipsLinksToTipVersion;
    /**
     * 
     * @type {JsonApiRelationshipsLinksVersions}
     * @memberof CreatedVersionIncludedRelationships
     */
    'versions': JsonApiRelationshipsLinksVersions;
    /**
     * 
     * @type {JsonApiRelationshipsLinksFolderParent}
     * @memberof CreatedVersionIncludedRelationships
     */
    'parent': JsonApiRelationshipsLinksFolderParent;
    /**
     * 
     * @type {JsonApiRelationshipsLinksRefs}
     * @memberof CreatedVersionIncludedRelationships
     */
    'refs': JsonApiRelationshipsLinksRefs;
    /**
     * 
     * @type {JsonApiRelationshipsLinksLinks}
     * @memberof CreatedVersionIncludedRelationships
     */
    'links': JsonApiRelationshipsLinksLinks;
}

