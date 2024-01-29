/**
 *
 * @export
 * @interface ProjectUserProducts
 */
export interface ProjectUserProducts {
    /**
     * A keyword that identifies the product.
     * @type {string}
     * @memberof ProjectUserProducts
     */
    'key'?: string;
    /**
     * The user’s type of access to the product identified by key.
     * @type {string}
     * @memberof ProjectUserProducts
     */
    'access'?: string;
}
