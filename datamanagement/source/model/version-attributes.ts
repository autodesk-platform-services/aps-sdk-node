/* tslint:disable */
/* eslint-disable */

import { VersionExtensionWithSchemaLink } from './version-extension-with-schema-link';

/**
 * The properties of a version.
 * @export
 * @interface VersionAttributes
 */
export interface VersionAttributes {
    /**
     * The file name to be used when synced to local disk.
     * @type {string}
     * @memberof VersionAttributes
     */
    'name': string;
    /**
     * A human friendly name to identify the version. Note that for BIM 360 projects, this field is reserved for future releases and should not be used. Use a version\'s ``attributes.name`` for the file name.
     * @type {string}
     * @memberof VersionAttributes
     */
    'displayName': string;
    /**
     * The MIME type of the content of the version.
     * @type {string}
     * @memberof VersionAttributes
     */
    'mimeType'?: string;
    /**
     * Version number of this versioned file.
     * @type {number}
     * @memberof VersionAttributes
     */
    'versionNumber': number;
    /**
     * File type, only present if this version represents a file.
     * @type {string}
     * @memberof VersionAttributes
     */
    'fileType'?: string;
    /**
     * File size in bytes, only present if this version represents a file.
     * @type {number}
     * @memberof VersionAttributes
     */
    'storageSize'?: number;
    /**
     * The time that the resource was created at.
     * @type {string}
     * @memberof VersionAttributes
     */
    'createTime': string;
    /**
     * The ID of the user that created the version.
     * @type {string}
     * @memberof VersionAttributes
     */
    'createUserId': string;
    /**
     * The user name of the user that created the version.
     * @type {string}
     * @memberof VersionAttributes
     */
    'createUserName': string;
    /**
     * The time that the version was last modified.
     * @type {string}
     * @memberof VersionAttributes
     */
    'lastModifiedTime': string;
    /**
     * The ID of the user that last modified the version.
     * @type {string}
     * @memberof VersionAttributes
     */
    'lastModifiedUserId': string;
    /**
     * The user name of the user that last modified the version.
     * @type {string}
     * @memberof VersionAttributes
     */
    'lastModifiedUserName': string;
    /**
     * 
     * @type {VersionExtensionWithSchemaLink}
     * @memberof VersionAttributes
     */
    'extension': VersionExtensionWithSchemaLink;
}

