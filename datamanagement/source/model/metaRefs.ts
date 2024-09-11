
import { BaseAttributesExtensionObjectWithSchemaLink } from './baseAttributesExtensionObjectWithSchemaLink';
import { MetarefsDirection } from './metarefsDirection';
import { Type } from './type';
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
     * @type {Type}
     * @memberof MetaRefs
     */
    'fromType'?: Type;
    /**
     * The ID of the resource to where the data flows.
     * @type {string}
     * @memberof MetaRefs
     */
    'toId'?: string;
    /**
     * 
     * @type {Type}
     * @memberof MetaRefs
     */
    'toType'?: Type;
    /**
     * 
     * @type {BaseAttributesExtensionObjectWithSchemaLink}
     * @memberof MetaRefs
     */
    'extension'?: BaseAttributesExtensionObjectWithSchemaLink;
}



