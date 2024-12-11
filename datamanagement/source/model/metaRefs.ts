/* tslint:disable */
/* eslint-disable */

import { BaseAttributesExtensionObjectWithSchemaLink } from './baseAttributesExtensionObjectWithSchemaLink';
import { MetarefsDirection } from './metarefsDirection';
import { TypeEntity } from './typeEntity';
import { TypeRef } from './typeRef';

/**
 * Metadata on the resources referenced by this resource.
 * @export
 * @interface MetaRefs
 */
export interface MetaRefs {
    /**
     * 
     * @type {TypeRef}
     * @memberof MetaRefs
     */
    'refType'?: TypeRef;
    /**
     * 
     * @type {MetarefsDirection}
     * @memberof MetaRefs
     */
    'direction'?: MetarefsDirection;
    /**
     * The ID of the resource from where data flows.
     * @type {string}
     * @memberof MetaRefs
     */
    'fromId'?: string;
    /**
     * 
     * @type {TypeEntity}
     * @memberof MetaRefs
     */
    'fromType'?: TypeEntity;
    /**
     * The ID of the resource to where the data flows.
     * @type {string}
     * @memberof MetaRefs
     */
    'toId'?: string;
    /**
     * 
     * @type {TypeEntity}
     * @memberof MetaRefs
     */
    'toType'?: TypeEntity;
    /**
     * 
     * @type {BaseAttributesExtensionObjectWithSchemaLink}
     * @memberof MetaRefs
     */
    'extension'?: BaseAttributesExtensionObjectWithSchemaLink;
}



