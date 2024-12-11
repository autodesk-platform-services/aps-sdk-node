/* tslint:disable */
/* eslint-disable */

import { JwksKey } from './jwksKey';

/**
 * Represents a successful response to a Get JWKS operation.
 * @export
 * @interface Jwks
 */
export interface Jwks {
    /**
     * An array of objects where each object represents a JSON Web Key Set (JWKS).
     * @type {Array<JwksKey>}
     * @memberof Jwks
     */
    'keys'?: Array<JwksKey>;
}

