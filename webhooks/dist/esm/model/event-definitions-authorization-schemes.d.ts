import { EventDefinitionsAuthorizationSchemesThreeLegged } from './event-definitions-authorization-schemes-three-legged';
/**
 *
 * @export
 * @interface EventDefinitionsAuthorizationSchemes
 */
export interface EventDefinitionsAuthorizationSchemes {
    /**
     *
     * @type {string}
     * @memberof EventDefinitionsAuthorizationSchemes
     */
    'name'?: string;
    /**
     *
     * @type {EventDefinitionsAuthorizationSchemesThreeLegged}
     * @memberof EventDefinitionsAuthorizationSchemes
     */
    'threeLegged'?: EventDefinitionsAuthorizationSchemesThreeLegged;
    /**
     *
     * @type {EventDefinitionsAuthorizationSchemesThreeLegged}
     * @memberof EventDefinitionsAuthorizationSchemes
     */
    'twoLegged'?: EventDefinitionsAuthorizationSchemesThreeLegged;
}
