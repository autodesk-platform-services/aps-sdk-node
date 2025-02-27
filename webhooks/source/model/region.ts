/* tslint:disable */
/* eslint-disable */


/**
 * Optional parameter to specify the region the request will be run in. Supported values are the following, but the default value is US:  
 * - ``US`` - (Default) Data center dedicated to serve the United States region. 
 * - ``EMEA`` - Data center dedicated to serve the European Union, Middle East, and Africa regions. 
 * - ``APAC`` - (Beta) Data center dedicated to serve the Australia region.  **Note:** Beta features are subject to change. Please avoid using them in production environments. **@deprecated Use `AUS` instead.**
 * - ``AUS`` - (Beta) Australia (Beta)
 * @export
 * @enum {string}
 */

export const Region = {
    Us: 'US',
    Emea: 'EMEA',
    /** @deprecated Use `AUS` instead. */
    Apac: 'APAC',
    Aus: 'AUS'
} as const;

export type Region = typeof Region[keyof typeof Region];



