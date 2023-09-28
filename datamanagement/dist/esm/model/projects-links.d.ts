import { HubsLinksSelf } from './hubs-links-self';
import { ProjectsLinksFirst } from './projects-links-first';
/**
 *
 * @export
 * @interface ProjectsLinks
 */
export interface ProjectsLinks {
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof ProjectsLinks
     */
    'self'?: HubsLinksSelf;
    /**
     *
     * @type {ProjectsLinksFirst}
     * @memberof ProjectsLinks
     */
    'first'?: ProjectsLinksFirst;
    /**
     *
     * @type {ProjectsLinksFirst}
     * @memberof ProjectsLinks
     */
    'prev'?: ProjectsLinksFirst;
    /**
     *
     * @type {ProjectsLinksFirst}
     * @memberof ProjectsLinks
     */
    'next'?: ProjectsLinksFirst;
}
