/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsLinksFolderParent } from './json-api-relationships-links-folder-parent';
import { JsonApiRelationshipsLinksLinks } from './json-api-relationships-links-links';
import { JsonApiRelationshipsLinksRefs } from './json-api-relationships-links-refs';
import { JsonApiRelationshipsLinksToTipVersion } from './json-api-relationships-links-to-tip-version';
import { JsonApiRelationshipsLinksVersions } from './json-api-relationships-links-versions';

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

