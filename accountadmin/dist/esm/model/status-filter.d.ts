/**
 *
 * @export
 * @enum {string}
 */
export declare const StatusFilter: {
    readonly Active: "active";
    readonly Pending: "pending";
    readonly Deleted: "deleted";
};
export type StatusFilter = typeof StatusFilter[keyof typeof StatusFilter];
