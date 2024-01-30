/* tslint:disable */
/* eslint-disable */

import { ProductAccess } from './product-access';
import { ProductKeys } from './product-keys';

/**
 * 
 * @export
 * @interface ProjectUsersImportPayloadUserProducts
 */
export interface ProjectUsersImportPayloadUserProducts {
    /**
     * 
     * @type {ProductKeys}
     * @memberof ProjectUsersImportPayloadUserProducts
     */
    'key': ProductKeys;
    /**
     * 
     * @type {ProductAccess}
     * @memberof ProjectUsersImportPayloadUserProducts
     */
    'access': ProductAccess;
}



