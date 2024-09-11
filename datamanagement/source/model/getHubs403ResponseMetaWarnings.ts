

/**
 * 
 * @export
 * @interface GetHubs403ResponseMetaWarnings
 */
export interface GetHubs403ResponseMetaWarnings {
    /**
     * An ID assigned to the warning.
     * @type {any}
     * @memberof GetHubs403ResponseMetaWarnings
     */
    'Id'?: any | null;
    /**
     * The HTTP status code returned in response to the request.
     * @type {string}
     * @memberof GetHubs403ResponseMetaWarnings
     */
    'HttpStatusCode'?: string;
    /**
     * A code that indicates what went wrong.
     * @type {string}
     * @memberof GetHubs403ResponseMetaWarnings
     */
    'ErrorCode'?: string;
    /**
     * A quick summary of the issue, at a glance.
     * @type {string}
     * @memberof GetHubs403ResponseMetaWarnings
     */
    'Title'?: string;
    /**
     * A more comprehensive explanation of the issue, providing specific information and potential solutions, if any.
     * @type {string}
     * @memberof GetHubs403ResponseMetaWarnings
     */
    'Detail'?: string;
    /**
     * A hyperlink to documentation about the issue.
     * @type {any}
     * @memberof GetHubs403ResponseMetaWarnings
     */
    'AboutLink'?: any | null;
    /**
     * Information about the service that detected the issue.
     * @type {any}
     * @memberof GetHubs403ResponseMetaWarnings
     */
    'Source'?: any | null;
    /**
     * Additional information about the issue.
     * @type {any}
     * @memberof GetHubs403ResponseMetaWarnings
     */
    'meta'?: any | null;
}

