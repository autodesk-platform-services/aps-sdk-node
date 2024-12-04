/* tslint:disable */
/* eslint-disable */

import { ApplicationProtocol } from './applicationProtocol';

/**
 * An object that contains advanced options for a STEP output.
 * @export
 * @interface JobPayloadFormatAdvancedSTEP
 */
export interface JobPayloadFormatAdvancedSTEP {
    /**
     * 
     * @type {ApplicationProtocol}
     * @memberof JobPayloadFormatAdvancedSTEP
     */
    'applicationProtocol'?: ApplicationProtocol;
    /**
     * Possible values are between `0` and `1`. By default it is set at 0.001.
     * @type {number}
     * @memberof JobPayloadFormatAdvancedSTEP
     */
    'tolerance'?: number;
}



