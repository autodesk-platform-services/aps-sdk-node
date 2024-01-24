/**
 * Enum for Response type
 * @export
 * @enum {string}
 */
export declare const ResponseType: {
    readonly Code: "code";
    readonly Id_token: "id_token";
};
export type ResponseType = typeof ResponseType[keyof typeof ResponseType];
