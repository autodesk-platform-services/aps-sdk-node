/* tslint:disable */
/* eslint-disable */

import { BaseAttributesExtensionObjectWithSchemaLink } from './baseAttributesExtensionObjectWithSchemaLink';
import { Region } from './region';

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
    /**
     * 
     * @type {Region}
     * @memberof HubDataAttributes
     */
    'region'?: Region;
}



