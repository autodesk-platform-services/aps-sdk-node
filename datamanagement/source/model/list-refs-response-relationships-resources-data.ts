/* tslint:disable */
/* eslint-disable */

import { MetaRefs } from './meta-refs';
import { TypeVersion } from './type-version';

/**
 * 
 * @export
 * @interface ListRefsResponseRelationshipsResourcesData
 */
export interface ListRefsResponseRelationshipsResourcesData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof ListRefsResponseRelationshipsResourcesData
     */
    'type'?: TypeVersion;
    /**
     * The URN of the version.
     * @type {string}
     * @memberof ListRefsResponseRelationshipsResourcesData
     */
    'id'?: string;
    /**
     * 
     * @type {MetaRefs}
     * @memberof ListRefsResponseRelationshipsResourcesData
     */
    'meta'?: MetaRefs;
}



