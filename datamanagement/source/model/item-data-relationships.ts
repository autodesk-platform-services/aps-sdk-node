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
 * @interface ItemDataRelationships
 */
export interface ItemDataRelationships {
    /**
     * 
     * @type {JsonApiRelationshipsLinksFolderParent}
     * @memberof ItemDataRelationships
     */
    'parent': JsonApiRelationshipsLinksFolderParent;
    /**
     * 
     * @type {JsonApiRelationshipsLinksToTipVersion}
     * @memberof ItemDataRelationships
     */
    'tip': JsonApiRelationshipsLinksToTipVersion;
    /**
     * 
     * @type {JsonApiRelationshipsLinksVersions}
     * @memberof ItemDataRelationships
     */
    'versions': JsonApiRelationshipsLinksVersions;
    /**
     * 
     * @type {JsonApiRelationshipsLinksRefs}
     * @memberof ItemDataRelationships
     */
    'refs': JsonApiRelationshipsLinksRefs;
    /**
     * 
     * @type {JsonApiRelationshipsLinksLinks}
     * @memberof ItemDataRelationships
     */
    'links': JsonApiRelationshipsLinksLinks;
}

