import { EventDefinitionsAuthorizationSchemes } from './event-definitions-authorization-schemes';
import { EventDefinitionsEventTypes } from './event-definitions-event-types';
import { EventDefinitionsRegions } from './event-definitions-regions';
/**
 * Successful Retrieval of Event Definition (200):
 * @export
 * @interface EventDefinitions
 */
export interface EventDefinitions {
    /**
     *
     * @type {string}
     * @memberof EventDefinitions
     */
    'systemId'?: string;
    /**
     *
     * @type {string}
     * @memberof EventDefinitions
     */
    'specVersion'?: string;
    /**
     *
     * @type {number}
     * @memberof EventDefinitions
     */
    'version'?: number;
    /**
     *
     * @type {Set<EventDefinitionsAuthorizationSchemes>}
     * @memberof EventDefinitions
     */
    'authorizationSchemes'?: Set<EventDefinitionsAuthorizationSchemes>;
    /**
     *
     * @type {boolean}
     * @memberof EventDefinitions
     */
    'deleted'?: boolean;
    /**
     *
     * @type {string}
     * @memberof EventDefinitions
     */
    'createdBy'?: string;
    /**
     *
     * @type {string}
     * @memberof EventDefinitions
     */
    'createdDate'?: string;
    /**
     *
     * @type {string}
     * @memberof EventDefinitions
     */
    'lastModifiedBy'?: string;
    /**
     *
     * @type {string}
     * @memberof EventDefinitions
     */
    'lastModifiedDate'?: string;
    /**
     *
     * @type {Set<EventDefinitionsRegions>}
     * @memberof EventDefinitions
     */
    'regions'?: Set<EventDefinitionsRegions>;
    /**
     *
     * @type {Set<EventDefinitionsEventTypes>}
     * @memberof EventDefinitions
     */
    'eventTypes'?: Set<EventDefinitionsEventTypes>;
    /**
     *
     * @type {Array<object>}
     * @memberof EventDefinitions
     */
    'entityEventIds'?: Array<object>;
}
