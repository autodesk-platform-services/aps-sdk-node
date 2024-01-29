import { Project } from './project';
import { ProjectsPagination } from './projects-pagination';
/**
 *
 * @export
 * @interface Projects
 */
export interface Projects {
    /**
     *
     * @type {ProjectsPagination}
     * @memberof Projects
     */
    'pagination'?: ProjectsPagination;
    /**
     * The requested page of projects.
     * @type {Array<Project>}
     * @memberof Projects
     */
    'results'?: Array<Project>;
}
