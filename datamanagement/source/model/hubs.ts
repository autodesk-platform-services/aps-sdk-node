/* tslint:disable */
/* eslint-disable */

import { HubData } from './hub-data';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';

/**
 * Successful retrieval of the hubs collection.
 * @export
 * @interface Hubs
 */
export interface Hubs {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Hubs
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Hubs
     */
    'links'?: JsonApiLinksSelf;
    /**
     * An array of objects where each object represents a hub.
     * @type {Array<HubData>}
     * @memberof Hubs
     */
    'data'?: Array<HubData>;
}

