/* tslint:disable */
/* eslint-disable */


/**
 * A collection of miscellaneous parameters.
 * @export
 * @interface JobPayloadMisc
 */
export interface JobPayloadMisc {
    /**
     * The workflow ID of the webhook that listens to Model Derivative events. It must be 36 characters or less and can only contain alphanumeric characters (A-Z, 0-9) and hyphens (-).
     * @type {string}
     * @memberof JobPayloadMisc
     */
    'workflow'?: string;
    /**
     * A user-defined JSON object, which you can use to set some custom workflow information. It must be less than 1KB and is ignored if ``misc.workflow`` is not specified.
     * @type {object}
     * @memberof JobPayloadMisc
     */
    'workflowAttribute'?: object;
}

