/**
 *
 * @export
 * @enum {string}
 */
export declare const UserStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Pending: "pending";
    readonly NotInvited: "not_invited";
};
export type UserStatus = typeof UserStatus[keyof typeof UserStatus];
