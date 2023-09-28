/**
 * An array of flat JSON objects representing metadata.
 * @export
 * @interface ModelViewsDataMetadata
 */
export interface ModelViewsDataMetadata {
    /**
     * Name of the Model View.
     * @type {string}
     * @memberof ModelViewsDataMetadata
     */
    'name': string;
    /**
     * Unique ID for the Model View.
     * @type {string}
     * @memberof ModelViewsDataMetadata
     */
    'guid': string;
    /**
     * Type of Model View Possible values: ``2d``, ``3d``
     * @type {string}
     * @memberof ModelViewsDataMetadata
     */
    'role': ModelViewsDataMetadataRoleEnum;
    /**
     * ``true``: Model View is a Master View derived from a Revit file.  ``false``: Model View is not a Master View.
     * @type {boolean}
     * @memberof ModelViewsDataMetadata
     */
    'isMasterView': boolean;
}
export declare const ModelViewsDataMetadataRoleEnum: {
    readonly _2d: "2d";
    readonly _3d: "3d";
};
export type ModelViewsDataMetadataRoleEnum = typeof ModelViewsDataMetadataRoleEnum[keyof typeof ModelViewsDataMetadataRoleEnum];
