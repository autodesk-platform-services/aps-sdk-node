/* tslint:disable */
/* eslint-disable */

import { ProductAccess } from './productAccess';
import { ProductKeys } from './productKeys';

/**
 * 
 * @export
 * @interface ProjectUserPayloadProducts
 */
export interface ProjectUserPayloadProducts {
    /**
     * 
     * @type {ProductKeys}
     * @memberof ProjectUserPayloadProducts
     */
    'key': ProductKeys;
    /**
     * 
     * @type {ProductAccess}
     * @memberof ProjectUserPayloadProducts
     */
    'access': ProductAccess;
}



