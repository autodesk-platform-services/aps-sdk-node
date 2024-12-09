/* tslint:disable */
/* eslint-disable */

import { JobData } from './job-data';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';

/**
 * Details of the specified job was returned successfully.
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof Job
     */
    'jsonapi'?: JsonApiVersion;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof Job
     */
    'links'?: JsonApiLinksSelf;
    /**
     * 
     * @type {JobData}
     * @memberof Job
     */
    'data'?: JobData;
}

