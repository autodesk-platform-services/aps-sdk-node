/**
 *
 * @export
 * @enum {string}
 */
export declare const ConstructionType: {
    readonly NewConstruction: "New Construction";
    readonly Renovation: "Renovation";
};
export type ConstructionType = typeof ConstructionType[keyof typeof ConstructionType];
