
import { JsonApiLink } from './jsonApiLink';

/**
 * The object containing information on links of related resources that share a custom relationship with this resource.
 * @export
 * @interface JsonApiRelationshipsLinksRefsLinks
 */
export interface JsonApiRelationshipsLinksRefsLinks {
    /**
     * 
     * @type {JsonApiLink}
     * @memberof JsonApiRelationshipsLinksRefsLinks
     */
    'self': JsonApiLink;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof JsonApiRelationshipsLinksRefsLinks
     */
    'related': JsonApiLink;
}

