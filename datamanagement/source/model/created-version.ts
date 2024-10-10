/* tslint:disable */
/* eslint-disable */

import { CreatedVersionData } from './created-version-data';
import { CreatedVersionIncluded } from './created-version-included';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';

/**
 * The payload returned upon successful creation of a new version.
 * @export
 * @interface CreatedVersion
 */
export interface CreatedVersion {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof CreatedVersion
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof CreatedVersion
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {CreatedVersionData}
     * @memberof CreatedVersion
     */
    'data'?: CreatedVersionData;
    /**
     * An array of objects, where each object represents a resource included with the object. For example, the item corresponding to the new version.
     * @type {Array<CreatedVersionIncluded>}
     * @memberof CreatedVersion
     */
    'included'?: Array<CreatedVersionIncluded>;
}

