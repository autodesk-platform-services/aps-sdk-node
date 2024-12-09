/* tslint:disable */
/* eslint-disable */


/**
 * Contains the properties that indicate the current status of the job.
 * @export
 * @interface JobDataAttributes
 */
export interface JobDataAttributes {
    /**
     * Indicates the current status of the job, while the job is ``queued``, ``processing``, or ``failed``. If the job is finished, the server returns a HTTP 303 status with the ``location`` header set to the URI to use to fetch the details of the download.
     * @type {string}
     * @memberof JobDataAttributes
     */
    'status'?: string;
}

