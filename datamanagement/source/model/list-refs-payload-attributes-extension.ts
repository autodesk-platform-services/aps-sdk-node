/* tslint:disable */
/* eslint-disable */

import { TypeCommandtypeListRefs } from './type-commandtype-list-refs';

/**
 * An object that contains properties  specific to the ListRefs command,   extending the default properties of a command.
 * @export
 * @interface ListRefsPayloadAttributesExtension
 */
export interface ListRefsPayloadAttributesExtension {
    /**
     * 
     * @type {TypeCommandtypeListRefs}
     * @memberof ListRefsPayloadAttributesExtension
     */
    'type'?: TypeCommandtypeListRefs;
    /**
     * The version of the schema. Must be ``1.0.0``  for the ListRefs command. 
     * @type {string}
     * @memberof ListRefsPayloadAttributesExtension
     */
    'version'?: string;
}



