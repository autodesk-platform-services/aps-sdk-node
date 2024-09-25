/* tslint:disable */
/* eslint-disable */

import { BaseAttributesExtensionObjectWithSchemaLink } from './base-attributes-extension-object-with-schema-link';

/**
 * The properties of the hub.
 * @export
 * @interface HubDataAttributes
 */
export interface HubDataAttributes {
    /**
     * A human friendly name to identify the hub.
     * @type {string}
     * @memberof HubDataAttributes
     */
    'name'?: string;
    /**
     * 
     * @type {BaseAttributesExtensionObjectWithSchemaLink}
     * @memberof HubDataAttributes
     */
    'extension'?: BaseAttributesExtensionObjectWithSchemaLink;
}

