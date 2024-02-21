/**
 *
 * @export
 * @enum {string}
 */
export declare const UserRole: {
    readonly AccountAdmin: "account_admin";
    readonly AccountUser: "account_user";
    readonly ProjectAdmin: "project_admin";
};
export type UserRole = typeof UserRole[keyof typeof UserRole];
