/**
 *
 * @export
 * @enum {string}
 */
export declare const Scopes: {
    readonly Workflow: "workflow";
    readonly Folder: "folder";
    readonly Project: "project";
};
export type Scopes = typeof Scopes[keyof typeof Scopes];
