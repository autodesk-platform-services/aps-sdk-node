/* tslint:disable */
/* eslint-disable */

import { HubData } from './hubData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';

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

