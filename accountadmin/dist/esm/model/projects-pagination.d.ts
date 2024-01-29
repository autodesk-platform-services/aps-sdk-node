/**
 * The pagination object.
 * @export
 * @interface ProjectsPagination
 */
export interface ProjectsPagination {
    /**
     * The number of items per page.
     * @type {number}
     * @memberof ProjectsPagination
     */
    'limit'?: number;
    /**
     * The page number that the results begin from.
     * @type {number}
     * @memberof ProjectsPagination
     */
    'offset'?: number;
    /**
     * The number of items in the response.
     * @type {number}
     * @memberof ProjectsPagination
     */
    'totalResults'?: number;
    /**
     * The URL for the next page of records. Max length: 2000
     * @type {string}
     * @memberof ProjectsPagination
     */
    'nextUrl'?: string;
    /**
     * The URL for the previous page of records. Max length: 2000
     * @type {string}
     * @memberof ProjectsPagination
     */
    'previousUrl'?: string;
}
