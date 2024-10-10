/* tslint:disable */
/* eslint-disable */


/**
 * A container of additional properties that extends the default properties of the version to be created.
 * @export
 * @interface VersionPayloadDataAttributesExtension
 */
export interface VersionPayloadDataAttributesExtension {
    /**
     * The Type ID of the schema that defines the structure of the ``extension.data`` object.
     * @type {string}
     * @memberof VersionPayloadDataAttributesExtension
     */
    'type': string;
    /**
     * The version of the schema that applies to the ``extension.data`` object.
     * @type {string}
     * @memberof VersionPayloadDataAttributesExtension
     */
    'version': string;
    /**
     * The container of additional properties.  The additional properties must follow the schema specified by ``extensions.type`` and ``extensions.version``. Properties that don\'t follow the schema will be ignored. 
     * @type {object}
     * @memberof VersionPayloadDataAttributesExtension
     */
    'data'?: object;
}

