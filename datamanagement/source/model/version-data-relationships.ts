/* tslint:disable */
/* eslint-disable */

import { JsonApiRelationshipsLinksLinks } from './json-api-relationships-links-links';
import { JsonApiRelationshipsLinksRefs } from './json-api-relationships-links-refs';
import { VersionDataRelationshipsDerivatives } from './version-data-relationships-derivatives';
import { VersionDataRelationshipsDownloadFormats } from './version-data-relationships-download-formats';
import { VersionDataRelationshipsItem } from './version-data-relationships-item';
import { VersionDataRelationshipsStorage } from './version-data-relationships-storage';
import { VersionDataRelationshipsThumbnails } from './version-data-relationships-thumbnails';

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

