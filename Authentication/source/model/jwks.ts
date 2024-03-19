/* tslint:disable */
/* eslint-disable */

import { JwksKey } from './jwks-key';

/**
 * 
 * @export
 * @interface Jwks
 */
export interface Jwks {
    /**
     * 
     * @type {Array<JwksKey>}
     * @memberof Jwks
     */
    'keys'?: Array<JwksKey>;
}

