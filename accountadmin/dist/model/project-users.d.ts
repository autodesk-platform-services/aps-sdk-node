import { ProjectUser } from './project-user';
import { ProjectsPagination } from './projects-pagination';
/**
 *
 * @export
 * @interface ProjectUsers
 */
export interface ProjectUsers {
    /**
     *
     * @type {ProjectsPagination}
     * @memberof ProjectUsers
     */
    'pagination'?: ProjectsPagination;
    /**
     * The requested page of project users.
     * @type {Array<ProjectUser>}
     * @memberof ProjectUsers
     */
    'results'?: Array<ProjectUser>;
}
