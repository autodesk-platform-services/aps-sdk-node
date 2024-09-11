
import { JobDataAttributes } from './jobDataAttributes';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { Type } from './type';

/**
 * Contains information about the download creation job.
 * @export
 * @interface JobData
 */
export interface JobData {
    /**
     * 
     * @type {Type}
     * @memberof JobData
     */
    'type'?: Type;
    /**
     * The Job ID of the job creating the download.
     * @type {string}
     * @memberof JobData
     */
    'id'?: string;
    /**
     * 
     * @type {JobDataAttributes}
     * @memberof JobData
     */
    'attributes'?: JobDataAttributes;
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof JobData
     */
    'links'?: JsonApiLinksSelf;
}



