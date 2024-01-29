/**
 *
 * @export
 * @enum {string}
 */
export declare const OrFilters: {
    readonly Id: "id";
    readonly Name: "name";
    readonly Email: "email";
    readonly AutodeskId: "autodeskId";
    readonly Status: "status";
    readonly AccessLevels: "accessLevels";
};
export type OrFilters = typeof OrFilters[keyof typeof OrFilters];
