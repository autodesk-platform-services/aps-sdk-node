/**
 * Possible values: **from, to**
 * @export
 * @enum {string}
 */
export declare const Direction: {
    readonly From: "from";
    readonly To: "to";
};
export type Direction = typeof Direction[keyof typeof Direction];
