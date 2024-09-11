
import { JsonApiRelationshipsLinksFolderParent } from './jsonApiRelationshipsLinksFolderParent';
import { JsonApiRelationshipsLinksLinks } from './jsonApiRelationshipsLinksLinks';
import { JsonApiRelationshipsLinksRefs } from './jsonApiRelationshipsLinksRefs';
import { JsonApiRelationshipsLinksToTipVersion } from './jsonApiRelationshipsLinksToTipVersion';
import { JsonApiRelationshipsLinksVersions } from './jsonApiRelationshipsLinksVersions';

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

