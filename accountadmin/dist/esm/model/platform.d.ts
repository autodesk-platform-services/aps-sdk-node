/**
 *
 * @export
 * @enum {string}
 */
export declare const Platform: {
    readonly Acc: "acc";
    readonly Bim360: "bim360";
};
export type Platform = typeof Platform[keyof typeof Platform];
