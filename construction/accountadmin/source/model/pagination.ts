

/**
 * 	Contains pagination details for the records returned by the endpoint.
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    'limit'?: number;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    'offset'?: number;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    'totalResults'?: number;
    /**
     * 
     * @type {string}
     * @memberof Pagination
     */
    'nextUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof Pagination
     */
    'previousUrl'?: string;
}

