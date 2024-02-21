/**
 *
 * @export
 * @enum {string}
 */
export declare const ProjectStatus: {
    readonly Active: "active";
    readonly Pending: "pending";
    readonly Inactive: "inactive";
    readonly Archived: "archived";
};
export type ProjectStatus = typeof ProjectStatus[keyof typeof ProjectStatus];
