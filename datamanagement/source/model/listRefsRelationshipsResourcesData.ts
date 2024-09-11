
import { MetaRefs } from './metaRefs';
import { Type } from './type';

/**
 * 
 * @export
 * @interface ListRefsRelationshipsResourcesData
 */
export interface ListRefsRelationshipsResourcesData {
    /**
     * 
     * @type {Type}
     * @memberof ListRefsRelationshipsResourcesData
     */
    'type'?: Type;
    /**
     * The URN of the version.
     * @type {string}
     * @memberof ListRefsRelationshipsResourcesData
     */
    'id'?: string;
    /**
     * 
     * @type {MetaRefs}
     * @memberof ListRefsRelationshipsResourcesData
     */
    'meta'?: MetaRefs;
}



