
import { CreatedVersionData } from './createdVersionData';
import { CreatedVersionIncluded } from './createdVersionIncluded';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';

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

