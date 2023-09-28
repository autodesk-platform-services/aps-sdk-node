/* tslint:disable */
/* eslint-disable */

import { EventDefinitionsEventTypesEventIds } from './event-definitions-event-types-event-ids';

/**
 * 
 * @export
 * @interface EventDefinitionsEventTypes
 */
export interface EventDefinitionsEventTypes {
    /**
     * 
     * @type {string}
     * @memberof EventDefinitionsEventTypes
     */
    'entityType'?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof EventDefinitionsEventTypes
     */
    'scopeTypes'?: Array<object>;
    /**
     * 
     * @type {Set<EventDefinitionsEventTypesEventIds>}
     * @memberof EventDefinitionsEventTypes
     */
    'eventIds'?: Set<EventDefinitionsEventTypesEventIds>;
    /**
     * 
     * @type {string}
     * @memberof EventDefinitionsEventTypes
     */
    'authorizationType'?: string;
}

