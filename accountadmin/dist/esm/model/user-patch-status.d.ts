/**
 *
 * @export
 * @enum {string}
 */
export declare const UserPatchStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
};
export type UserPatchStatus = typeof UserPatchStatus[keyof typeof UserPatchStatus];
