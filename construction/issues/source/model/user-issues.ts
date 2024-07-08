/* tslint:disable */
/* eslint-disable */

import { UserIssuesFilter } from './user-issues-filter';
import { UserIssuesNew } from './user-issues-new';

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

