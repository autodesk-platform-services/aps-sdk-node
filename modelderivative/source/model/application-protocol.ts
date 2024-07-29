/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the application protocol to use when the output type is STEP. Possible values are:   - ``203`` - Configuration controlled design. - ``214`` - (Default) Core data for automotive mechanical design processes.  - ``242`` - Managed model based 3D engineering.  
 * @export
 * @enum {string}
 */

export const ApplicationProtocol = {
    _203: '203',
    _214: '214',
    _242: '242'
} as const;

export type ApplicationProtocol = typeof ApplicationProtocol[keyof typeof ApplicationProtocol];



