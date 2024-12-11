/* tslint:disable */
/* eslint-disable */

import { ExtensionTypeCoreXref } from './extensionTypeCoreXref';
import { JsonApiRelationshipsRefsDataMetaExtensionData } from './jsonApiRelationshipsRefsDataMetaExtensionData';

/**
 * A container of additional properties that extends the default properties of this resource.
 * @export
 * @interface JsonApiRelationshipsRefsDataMetaExtension
 */
export interface JsonApiRelationshipsRefsDataMetaExtension {
    /**
     * 
     * @type {ExtensionTypeCoreXref}
     * @memberof JsonApiRelationshipsRefsDataMetaExtension
     */
    'type': ExtensionTypeCoreXref;
    /**
     * The version of the type. The current version is ``1.1.0``. 
     * @type {string}
     * @memberof JsonApiRelationshipsRefsDataMetaExtension
     */
    'version': string;
    /**
     * 
     * @type {JsonApiRelationshipsRefsDataMetaExtensionData}
     * @memberof JsonApiRelationshipsRefsDataMetaExtension
     */
    'data'?: JsonApiRelationshipsRefsDataMetaExtensionData;
}



