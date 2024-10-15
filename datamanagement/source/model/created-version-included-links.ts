/* tslint:disable */
/* eslint-disable */

import { JsonApiLinksRelated } from './json-api-links-related';
import { JsonApiLinksSelf } from './json-api-links-self';

/**
 * Contains the links to use to access references of this resource.
 * @export
 * @interface CreatedVersionIncludedLinks
 */
export interface CreatedVersionIncludedLinks {
    /**
     * 
     * @type {JsonApiLinksSelf}
     * @memberof CreatedVersionIncludedLinks
     */
    'self'?: JsonApiLinksSelf;
    /**
     * 
     * @type {JsonApiLinksRelated}
     * @memberof CreatedVersionIncludedLinks
     */
    'related'?: JsonApiLinksRelated;
}
