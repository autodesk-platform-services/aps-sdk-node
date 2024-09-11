
import { JsonApiLink } from './jsonApiLink';

/**
 * Information on links for this resource. ``first``, ``prev``, and ``next`` are available only when the response is paginated.
 * @export
 * @interface FolderContentsLinks
 */
export interface FolderContentsLinks {
    /**
     * 
     * @type {JsonApiLink}
     * @memberof FolderContentsLinks
     */
    'self': JsonApiLink;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof FolderContentsLinks
     */
    'first'?: JsonApiLink;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof FolderContentsLinks
     */
    'prev'?: JsonApiLink;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof FolderContentsLinks
     */
    'next'?: JsonApiLink;
}

