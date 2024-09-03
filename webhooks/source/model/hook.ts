/* tslint:disable */
/* eslint-disable */

import { HookDetails } from './hook-details';

/**
 * Contains the response to a Create Webhooks for All Events request.
 * @export
 * @interface Hook
 */
export interface Hook {
    /**
     * An array of objects, where each object represents a webhook that was created.
     * @type {Array<HookDetails>}
     * @memberof Hook
     */
    'hooks'?: Array<HookDetails>;
}

