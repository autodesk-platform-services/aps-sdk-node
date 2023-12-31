/**
 * Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are: - latest - (Default) Return SVF2 Object IDs. - fallback - Return SVF Object IDs.
 * @export
 * @enum {string}
 */
export declare const XAdsDerivativeFormat: {
    readonly Latest: "latest";
    readonly Fallback: "fallback";
};
export type XAdsDerivativeFormat = typeof XAdsDerivativeFormat[keyof typeof XAdsDerivativeFormat];
