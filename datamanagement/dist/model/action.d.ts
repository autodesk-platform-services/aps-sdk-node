/**
 *  Possible values: **read, view, download, collaborate, write, create, upload, updateMetaData, delete, admin, share**
 * @export
 * @enum {string}
 */
export declare const Action: {
    readonly Read: "read";
    readonly View: "view";
    readonly Download: "download";
    readonly Collaborate: "collaborate";
    readonly Write: "write";
    readonly Create: "create";
    readonly Upload: "upload";
    readonly UpdateMetaData: "updateMetaData";
    readonly Delete: "delete";
    readonly Admin: "admin";
    readonly Share: "share";
};
export type Action = typeof Action[keyof typeof Action];
