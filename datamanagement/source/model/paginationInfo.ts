
import { PaginationInfoFirst } from './paginationInfoFirst';
import { PaginationInfoNext } from './paginationInfoNext';
import { PaginationInfoPrev } from './paginationInfoPrev';
import { PaginationInfoSelf } from './paginationInfoSelf';

/**
 * An object that is returned with responses that can be split across multiple pages. \"Next,\" \"Previous,\" and \"First\" are available only if the response is split across multiple pages.
 * @export
 * @interface PaginationInfo
 */
export interface PaginationInfo {
    /**
     * 
     * @type {PaginationInfoSelf}
     * @memberof PaginationInfo
     */
    'self': PaginationInfoSelf;
    /**
     * 
     * @type {PaginationInfoFirst}
     * @memberof PaginationInfo
     */
    'first'?: PaginationInfoFirst;
    /**
     * 
     * @type {PaginationInfoNext}
     * @memberof PaginationInfo
     */
    'next'?: PaginationInfoNext;
    /**
     * 
     * @type {PaginationInfoPrev}
     * @memberof PaginationInfo
     */
    'prev'?: PaginationInfoPrev;
}

