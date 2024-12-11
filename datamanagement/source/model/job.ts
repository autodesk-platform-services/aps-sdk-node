/* tslint:disable */
/* eslint-disable */

import { JobData } from './jobData';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiVersion } from './jsonApiVersion';

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

