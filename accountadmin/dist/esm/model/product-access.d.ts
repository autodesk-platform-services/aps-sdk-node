/**
 *
 * @export
 * @enum {string}
 */
export declare const ProductAccess: {
    readonly Administrator: "administrator";
    readonly Member: "member";
    readonly None: "none";
};
export type ProductAccess = typeof ProductAccess[keyof typeof ProductAccess];
