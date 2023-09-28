import { FolderContentsIncludedAttributes } from './folder-contents-included-attributes';
import { FolderContentsIncludedRelationships } from './folder-contents-included-relationships';
import { ProjectsDataLinks } from './projects-data-links';
/**
 *
 * @export
 * @interface FolderContentsIncluded
 */
export interface FolderContentsIncluded {
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncluded
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof FolderContentsIncluded
     */
    'id'?: string;
    /**
     *
     * @type {FolderContentsIncludedAttributes}
     * @memberof FolderContentsIncluded
     */
    'attributes'?: FolderContentsIncludedAttributes;
    /**
     *
     * @type {ProjectsDataLinks}
     * @memberof FolderContentsIncluded
     */
    'links'?: ProjectsDataLinks;
    /**
     *
     * @type {FolderContentsIncludedRelationships}
     * @memberof FolderContentsIncluded
     */
    'relationships'?: FolderContentsIncludedRelationships;
}
