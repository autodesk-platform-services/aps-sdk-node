/* tslint:disable */
/* eslint-disable */


/**
 * Specifies where to store generated derivatives.
 * @export
 * @interface JobPayloadOutputDestination
 */
export interface JobPayloadOutputDestination {
    /**
     * Specifies where to store generated derivatives. Possible values are:  - ``US``: (Default) Store derivatives at a data center for the United States of America. - ``EMEA``: Store derivatives at a data center for the European Union.  - ``APAC``: (Beta) Store derivatives at a data centre for the Australia region.   **Note**: Beta features are subject to change. Please avoid using them in production environments. 
     * @deprecated This attribute is replaced by the region header.
     * @type {string}
     * @memberof JobPayloadOutputDestination
     */
    'region'?: string;
}

