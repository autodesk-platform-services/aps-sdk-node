/* tslint:disable */
/* eslint-disable */

import { BaseAttributesExtensionObjectWithSchemaLink } from './base-attributes-extension-object-with-schema-link';
import { JsonApiLink } from './json-api-link';
import { RelationshipLinksDataMetaData } from './relationship-links-data-meta-data';

/**
 * The meta-information of the links of this resource.
 * @export
 * @interface RelationshipLinksDataMeta
 */
export interface RelationshipLinksDataMeta {
    /**
     * 
     * @type {JsonApiLink}
     * @memberof RelationshipLinksDataMeta
     */
    'link'?: JsonApiLink;
    /**
     * 
     * @type {RelationshipLinksDataMetaData}
     * @memberof RelationshipLinksDataMeta
     */
    'data'?: RelationshipLinksDataMetaData;
    /**
     * The MIME type of the content of the resource.
     * @type {string}
     * @memberof RelationshipLinksDataMeta
     */
    'mimeType'?: string;
    /**
     * 
     * @type {BaseAttributesExtensionObjectWithSchemaLink}
     * @memberof RelationshipLinksDataMeta
     */
    'extension'?: BaseAttributesExtensionObjectWithSchemaLink;
}

