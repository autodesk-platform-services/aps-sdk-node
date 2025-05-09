/* tslint:disable */
/* eslint-disable */

import { HookDetails } from './hookDetails';
import { HooksLinks } from './hooksLinks';

/**
 * A paginated list of webhooks. 
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
     * An array of objects, where each object represents a webhook.
     * @type {Array<HookDetails>}
     * @memberof Hooks
     */
    'data'?: Array<HookDetails>;
}

