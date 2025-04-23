

/**
 * The pagination object.
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * The number of items per page.
     * @type {number}
     * @memberof Pagination
     */
    'limit'?: number;
    /**
     * The page number that the results begin from.
     * @type {number}
     * @memberof Pagination
     */
    'offset'?: number;
    /**
     * The number of items in the response.
     * @type {number}
     * @memberof Pagination
     */
    'totalResults'?: number;
}

