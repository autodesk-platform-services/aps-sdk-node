/* tslint:disable */
/* eslint-disable */

import { HubData } from './hubData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';

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

