import { Type } from './type';
import { VersionNumber } from './version-number';
/**
 *
 * @export
 * @interface ItemPayloadDataAttributesExtension
 */
export interface ItemPayloadDataAttributesExtension {
    /**
     *
     * @type {Type}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'type'?: Type;
    /**
     *
     * @type {VersionNumber}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'version'?: VersionNumber;
    /**
     *
     * @type {object}
     * @memberof ItemPayloadDataAttributesExtension
     */
    'data'?: object;
}
