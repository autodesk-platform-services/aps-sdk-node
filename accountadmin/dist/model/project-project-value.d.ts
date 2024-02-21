/**
 * The value of the project. When updating the project value, both the value and currency parameters are required.
 * @export
 * @interface ProjectProjectValue
 */
export interface ProjectProjectValue {
    /**
     * The estimated value or cost of the project based on the currency specified in the currency field. The default value is 0.
     * @type {number}
     * @memberof ProjectProjectValue
     */
    'value'?: number;
    /**
     * The currency of the project value for the project. Default value: USD.
     * @type {string}
     * @memberof ProjectProjectValue
     */
    'currency'?: string;
}
