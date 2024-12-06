/* tslint:disable */
/* eslint-disable */


/**
 * A JSON object containing information of the postal address of the user.
 * @export
 * @interface UserInfoAddress
 */
export interface UserInfoAddress {
    /**
     * The street address part of the address. Can contain the house number, street name, postal code, and so on.  New lines are represented as ``\\n``.
     * @type {string}
     * @memberof UserInfoAddress
     */
    'street_address'?: string;
    /**
     * The city or locality part of the address.
     * @type {string}
     * @memberof UserInfoAddress
     */
    'locality'?: string;
    /**
     * The state, province, prefecture, or region part of the address.
     * @type {string}
     * @memberof UserInfoAddress
     */
    'region'?: string;
    /**
     * The zip code or postal code part of the address.
     * @type {string}
     * @memberof UserInfoAddress
     */
    'postal_code'?: string;
    /**
     * The country name part of the address.
     * @type {string}
     * @memberof UserInfoAddress
     */
    'country'?: string;
}

