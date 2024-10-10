/* tslint:disable */
/* eslint-disable */

import { CreatedVersionIncludedLinks } from './created-version-included-links';
import { CreatedVersionIncludedRelationships } from './created-version-included-relationships';
import { ItemAttributes } from './item-attributes';
import { TypeItem } from './type-item';

/**
 * 
 * @export
 * @interface CreatedVersionIncluded
 */
export interface CreatedVersionIncluded {
    /**
     * 
     * @type {TypeItem}
     * @memberof CreatedVersionIncluded
     */
    'type': TypeItem;
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



