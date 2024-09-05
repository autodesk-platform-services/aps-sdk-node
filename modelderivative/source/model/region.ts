/* tslint:disable */
/* eslint-disable */


/**
 * Specifies where the referenced files are stored. Possible values are:       - ``US`` - Data center for the US region. - ``EMEA`` - Data center for the European Union, Middle East, and Africa.  - ``APAC`` - (Beta) Data centre for the Australia region.  **Note**: Beta features are subject to change. Please avoid using them in production environments. 
 * @export
 * @enum {string}
 */

export const Region = {
    Us: 'US',
    Emea: 'EMEA',
    Apac: 'APAC'
} as const;

export type Region = typeof Region[keyof typeof Region];



