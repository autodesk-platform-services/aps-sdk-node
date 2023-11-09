/**
 * The type of the resource. Possible values: **attachment**, **overlay**
 * @export
 * @enum {string}
 */
export declare const NestedType: {
    readonly Attachment: "attachment";
    readonly Overlay: "overlay";
};
export type NestedType = typeof NestedType[keyof typeof NestedType];
