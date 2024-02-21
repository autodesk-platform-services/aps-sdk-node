import { ProductAccess } from './product-access';
import { ProductKeys } from './product-keys';
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
