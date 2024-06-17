/* tslint:disable */
/* eslint-disable */


/**
 * Specifies where the bucket containing the object is stored. Possible values are:             - ``US`` - (Default) Data center for the US region.             - ``EMEA`` - Data center for the European Union, Middle East, and Africa.             - ``APAC`` -  (Beta) Data center for Australia. **Note:** Beta features are subject to change. Please do not use in production environments.
 * @export
 * @enum {string}
 */

export const Region = {
    Us: 'US',
    Emea: 'EMEA',
    Apac: 'APAC'
} as const;

export type Region = typeof Region[keyof typeof Region];



