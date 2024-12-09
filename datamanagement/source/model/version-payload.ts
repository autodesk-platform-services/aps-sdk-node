/* tslint:disable */
/* eslint-disable */

import { JsonApiVersion } from './json-api-version';
import { MetaForWebhooks } from './meta-for-webhooks';
import { VersionPayloadData } from './version-payload-data';

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

