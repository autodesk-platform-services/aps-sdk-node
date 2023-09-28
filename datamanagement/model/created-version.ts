/* tslint:disable */
/* eslint-disable */

import { CreatedVersionData } from './created-version-data';
import { CreatedVersionIncluded } from './created-version-included';
import { HubsJsonapi } from './hubs-jsonapi';
import { HubsLinks } from './hubs-links';

/**
 * Successful creation of a version with workflow
 * @export
 * @interface CreatedVersion
 */
export interface CreatedVersion {
    /**
     * 
     * @type {HubsJsonapi}
     * @memberof CreatedVersion
     */
    'jsonapi'?: HubsJsonapi;
    /**
     * 
     * @type {HubsLinks}
     * @memberof CreatedVersion
     */
    'links'?: HubsLinks;
    /**
     * 
     * @type {CreatedVersionData}
     * @memberof CreatedVersion
     */
    'data'?: CreatedVersionData;
    /**
     * 
     * @type {Set<CreatedVersionIncluded>}
     * @memberof CreatedVersion
     */
    'included'?: Set<CreatedVersionIncluded>;
}

