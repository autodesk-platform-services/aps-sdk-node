/* tslint:disable */
/* eslint-disable */

import { HooksData } from './hooks-data';
import { HooksLinks } from './hooks-links';

/**
 * Retrieves a paginated list of all the webhooks. If the pageState query string is not specified, the first page is returned.
 * @export
 * @interface Hooks
 */
export interface Hooks {
    /**
     * 
     * @type {HooksLinks}
     * @memberof Hooks
     */
    'links'?: HooksLinks;
    /**
     * 
     * @type {Set<HooksData>}
     * @memberof Hooks
     */
    'data'?: Set<HooksData>;
}

