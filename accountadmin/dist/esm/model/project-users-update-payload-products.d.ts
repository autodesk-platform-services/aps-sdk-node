import { ProductAccess } from './product-access';
import { ProductKeys } from './product-keys';
/**
 *
 * @export
 * @interface ProjectUsersUpdatePayloadProducts
 */
export interface ProjectUsersUpdatePayloadProducts {
    /**
     *
     * @type {ProductKeys}
     * @memberof ProjectUsersUpdatePayloadProducts
     */
    'key'?: ProductKeys;
    /**
     *
     * @type {ProductAccess}
     * @memberof ProjectUsersUpdatePayloadProducts
     */
    'access'?: ProductAccess;
}
