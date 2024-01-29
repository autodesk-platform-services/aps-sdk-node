/**
 *
 * @export
 * @enum {string}
 */
export declare const Status: {
    readonly Active: "active";
    readonly Pending: "pending";
    readonly Archived: "archived";
    readonly Suspended: "suspended";
};
export type Status = typeof Status[keyof typeof Status];
