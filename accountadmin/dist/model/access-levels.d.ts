/**
 *
 * @export
 * @enum {string}
 */
export declare const AccessLevels: {
    readonly AccountAdmin: "accountAdmin";
    readonly ProjectAdmin: "projectAdmin";
    readonly Executive: "executive";
};
export type AccessLevels = typeof AccessLevels[keyof typeof AccessLevels];
