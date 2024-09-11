
import { CreatedVersionIncludedLinks } from './createdVersionIncludedLinks';
import { CreatedVersionIncludedRelationships } from './createdVersionIncludedRelationships';
import { ItemAttributes } from './itemAttributes';
import { Type } from './type';

/**
 * 
 * @export
 * @interface CreatedVersionIncluded
 */
export interface CreatedVersionIncluded {
    /**
     * 
     * @type {Type}
     * @memberof CreatedVersionIncluded
     */
    'type': Type;
    /**
     * The ID to uniquely identify the resource.
     * @type {string}
     * @memberof CreatedVersionIncluded
     */
    'id': string;
    /**
     * 
     * @type {ItemAttributes}
     * @memberof CreatedVersionIncluded
     */
    'attributes': ItemAttributes;
    /**
     * 
     * @type {CreatedVersionIncludedLinks}
     * @memberof CreatedVersionIncluded
     */
    'links': CreatedVersionIncludedLinks;
    /**
     * 
     * @type {CreatedVersionIncludedRelationships}
     * @memberof CreatedVersionIncluded
     */
    'relationships': CreatedVersionIncludedRelationships;
}



