/* tslint:disable */
/* eslint-disable */

import { ExtensionTypeCoreXref } from './extensionTypeCoreXref';
import { VersionPayloadDataRelationshipsRefsDataMetaExtensionData } from './versionPayloadDataRelationshipsRefsDataMetaExtensionData';

/**
 * Contains additional properties that extend the default properties of the relationship.
 * @export
 * @interface VersionPayloadDataRelationshipsRefsDataMetaExtension
 */
export interface VersionPayloadDataRelationshipsRefsDataMetaExtension {
    /**
     * 
     * @type {ExtensionTypeCoreXref}
     * @memberof VersionPayloadDataRelationshipsRefsDataMetaExtension
     */
    'type'?: ExtensionTypeCoreXref;
    /**
     * The version of the xref type. Currently must be ``1.1.0``.
     * @type {string}
     * @memberof VersionPayloadDataRelationshipsRefsDataMetaExtension
     */
    'version'?: string;
    /**
     * 
     * @type {VersionPayloadDataRelationshipsRefsDataMetaExtensionData}
     * @memberof VersionPayloadDataRelationshipsRefsDataMetaExtension
     */
    'data'?: VersionPayloadDataRelationshipsRefsDataMetaExtensionData;
}



