import { HubsLinksSelf } from './hubs-links-self';
/**
 *
 * @export
 * @interface FolderContentsLinks
 */
export interface FolderContentsLinks {
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof FolderContentsLinks
     */
    'self'?: HubsLinksSelf;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof FolderContentsLinks
     */
    'first'?: HubsLinksSelf;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof FolderContentsLinks
     */
    'prev'?: HubsLinksSelf;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof FolderContentsLinks
     */
    'next'?: HubsLinksSelf;
}
