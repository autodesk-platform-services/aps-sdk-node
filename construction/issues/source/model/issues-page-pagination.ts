/* tslint:disable */
/* eslint-disable */


/**
 * The pagination object defining the limit, offset, total number of issues, next and previous URL
 * @export
 * @interface IssuesPagePagination
 */
export interface IssuesPagePagination {
    /**
     * The maximum number of issues to be returned in each page.
     * @type {number}
     * @memberof IssuesPagePagination
     */
    'limit'?: number;
    /**
     * The offset defining the start position from where the issues are returned
     * @type {number}
     * @memberof IssuesPagePagination
     */
    'offset'?: number;
    /**
     * The total number of issues including the ones of the current page
     * @type {number}
     * @memberof IssuesPagePagination
     */
    'totalResults'?: number;
}

