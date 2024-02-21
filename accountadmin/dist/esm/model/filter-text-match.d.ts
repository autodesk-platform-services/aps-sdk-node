/**
 *
 * @export
 * @enum {string}
 */
export declare const FilterTextMatch: {
    readonly Contains: "contains";
    readonly StartsWith: "startsWith";
    readonly EndsWith: "endsWith";
    readonly Equals: "equals";
};
export type FilterTextMatch = typeof FilterTextMatch[keyof typeof FilterTextMatch];
