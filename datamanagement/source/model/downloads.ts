
import { DownloadData } from './downloadData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';

/**
 * Successful retrieval of the available downloads collection associated with a specific version.
 * @export
 * @interface Downloads
 */
export interface Downloads {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Downloads
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Downloads
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {Set<DownloadData>}
     * @memberof Downloads
     */
    'data'?: Set<DownloadData>;
}

