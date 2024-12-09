/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsLinksLinks } from './jsonApiRelationshipsLinksLinks';
import { JsonApiRelationshipsLinksRefs } from './jsonApiRelationshipsLinksRefs';
import { VersionDataRelationshipsDerivatives } from './versionDataRelationshipsDerivatives';
import { VersionDataRelationshipsDownloadFormats } from './versionDataRelationshipsDownloadFormats';
import { VersionDataRelationshipsItem } from './versionDataRelationshipsItem';
import { VersionDataRelationshipsStorage } from './versionDataRelationshipsStorage';
import { VersionDataRelationshipsThumbnails } from './versionDataRelationshipsThumbnails';

/**
 * Contains information on other resources related to this resource.
 * @export
 * @interface VersionDataRelationships
 */
export interface VersionDataRelationships {
    /**
     * 
     * @type {VersionDataRelationshipsItem}
     * @memberof VersionDataRelationships
     */
    'item': VersionDataRelationshipsItem;
    /**
     * 
     * @type {JsonApiRelationshipsLinksRefs}
     * @memberof VersionDataRelationships
     */
    'refs': JsonApiRelationshipsLinksRefs;
    /**
     * 
     * @type {JsonApiRelationshipsLinksLinks}
     * @memberof VersionDataRelationships
     */
    'links': JsonApiRelationshipsLinksLinks;
    /**
     * 
     * @type {VersionDataRelationshipsStorage}
     * @memberof VersionDataRelationships
     */
    'storage'?: VersionDataRelationshipsStorage;
    /**
     * 
     * @type {VersionDataRelationshipsDerivatives}
     * @memberof VersionDataRelationships
     */
    'derivatives'?: VersionDataRelationshipsDerivatives;
    /**
     * 
     * @type {VersionDataRelationshipsThumbnails}
     * @memberof VersionDataRelationships
     */
    'thumbnails'?: VersionDataRelationshipsThumbnails;
    /**
     * 
     * @type {VersionDataRelationshipsDownloadFormats}
     * @memberof VersionDataRelationships
     */
    'downloadFormats'?: VersionDataRelationshipsDownloadFormats;
}

