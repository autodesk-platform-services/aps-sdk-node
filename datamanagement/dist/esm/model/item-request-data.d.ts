import { ItemRequestDataAttributes } from './item-request-data-attributes';
/**
 *
 * @export
 * @interface ItemRequestData
 */
export interface ItemRequestData {
    /**
     *
     * @type {string}
     * @memberof ItemRequestData
     */
    'type': string;
    /**
     *
     * @type {string}
     * @memberof ItemRequestData
     */
    'id': string;
    /**
     *
     * @type {ItemRequestDataAttributes}
     * @memberof ItemRequestData
     */
    'attributes'?: ItemRequestDataAttributes;
}
