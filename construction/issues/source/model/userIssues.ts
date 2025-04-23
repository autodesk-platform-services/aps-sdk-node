
import { UserIssuesFilter } from './userIssuesFilter';
import { UserIssuesNew } from './userIssuesNew';

/**
 * 
 * @export
 * @interface UserIssues
 */
export interface UserIssues {
    /**
     * 
     * @type {UserIssuesNew}
     * @memberof UserIssues
     */
    'new'?: UserIssuesNew;
    /**
     * 
     * @type {UserIssuesFilter}
     * @memberof UserIssues
     */
    'filter'?: UserIssuesFilter;
}

