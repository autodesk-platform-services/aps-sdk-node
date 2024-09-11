
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';
import { RefsData } from './refsData';

/**
 * Successful retrieval of a resource collection.
 * @export
 * @interface Refs
 */
export interface Refs {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Refs
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Refs
     */
    'links': JsonApiLinksSelf;
    /**
     * An array of objects, where each object represents a referenced resource (folder, item, or version).
     * @type {Array<RefsData>}
     * @memberof Refs
     */
    'data': Array<RefsData>;
}

