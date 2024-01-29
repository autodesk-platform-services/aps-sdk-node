import { Currency } from './currency';
/**
 * The value of the project. When updating the project value, both the value and currency parameters are required.
 * @export
 * @interface ProjectPayloadProjectValue
 */
export interface ProjectPayloadProjectValue {
    /**
     * The estimated value or cost of the project based on the currency specified in the currency field. The default value is 0.
     * @type {number}
     * @memberof ProjectPayloadProjectValue
     */
    'value'?: number;
    /**
     *
     * @type {Currency}
     * @memberof ProjectPayloadProjectValue
     */
    'currency'?: Currency;
}
