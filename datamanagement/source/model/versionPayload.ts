
import { JsonApiVersion } from './jsonApiVersion';
import { MetaForWebhooks } from './metaForWebhooks';
import { VersionPayloadData } from './versionPayloadData';

/**
 * Describe the version to be created.
 * @export
 * @interface VersionPayload
 */
export interface VersionPayload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof VersionPayload
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {VersionPayloadData}
     * @memberof VersionPayload
     */
    'data': VersionPayloadData;
    /**
     * 
     * @type {MetaForWebhooks}
     * @memberof VersionPayload
     */
    'meta'?: MetaForWebhooks;
}

