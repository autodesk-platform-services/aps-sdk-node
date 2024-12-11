/* tslint:disable */
/* eslint-disable */


/**
 * The execution status of the translation job.  Possible values are: ``inprogress``, ``success``, ``failed``, ``timedout``
 * @export
 * @enum {string}
 */

export const XAdsJobStatus = {
    Inprogress: 'inprogress',
    Success: 'success',
    Failed: 'failed',
    Timedout: 'timedout'
} as const;

export type XAdsJobStatus = typeof XAdsJobStatus[keyof typeof XAdsJobStatus];



