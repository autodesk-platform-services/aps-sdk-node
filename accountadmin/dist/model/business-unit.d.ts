/**
 *
 * @export
 * @interface BusinessUnit
 */
export interface BusinessUnit {
    /**
     * Business unit ID
     * @type {string}
     * @memberof BusinessUnit
     */
    'id'?: string;
    /**
     * Account ID
     * @type {string}
     * @memberof BusinessUnit
     */
    'account_id'?: string;
    /**
     * The ID of the parent business unit; used to configure the tree structure of business units
     * @type {string}
     * @memberof BusinessUnit
     */
    'parent_id'?: string;
    /**
     * The name of the business unit
     * @type {string}
     * @memberof BusinessUnit
     */
    'name'?: string;
    /**
     * The path of the business unit in the tree structure
     * @type {string}
     * @memberof BusinessUnit
     */
    'path'?: string;
    /**
     * The description of the business unit
     * @type {string}
     * @memberof BusinessUnit
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof BusinessUnit
     */
    'created_at'?: string;
    /**
     *
     * @type {string}
     * @memberof BusinessUnit
     */
    'updated_at'?: string;
}
