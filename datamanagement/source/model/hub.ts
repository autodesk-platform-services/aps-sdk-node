/* tslint:disable */
/* eslint-disable */

import { HubData } from './hub-data';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';

/**
 * An object representing a hub.
 * @export
 * @interface Hub
 */
export interface Hub {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Hub
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Hub
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {HubData}
     * @memberof Hub
     */
    'data'?: HubData;
}

