/**
 *
 * @export
 * @enum {string}
 */
export declare const Classification: {
    readonly Production: "production";
    readonly Template: "template";
    readonly Component: "component";
    readonly Sample: "sample";
};
export type Classification = typeof Classification[keyof typeof Classification];
