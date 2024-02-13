import { ProductAccess } from './product-access';
import { ProductKeys } from './product-keys';
/**
 *
 * @export
 * @interface ProjectUsersImportPayloadUsersProducts
 */
export interface ProjectUsersImportPayloadUsersProducts {
    /**
     *
     * @type {ProductKeys}
     * @memberof ProjectUsersImportPayloadUsersProducts
     */
    'key': ProductKeys;
    /**
     *
     * @type {ProductAccess}
     * @memberof ProjectUsersImportPayloadUsersProducts
     */
    'access': ProductAccess;
}
