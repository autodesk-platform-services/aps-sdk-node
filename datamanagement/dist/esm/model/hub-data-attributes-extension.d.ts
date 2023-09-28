import { HubsLinksSelf } from './hubs-links-self';
/**
 *
 * @export
 * @interface HubDataAttributesExtension
 */
export interface HubDataAttributesExtension {
    /**
     *
     * @type {object}
     * @memberof HubDataAttributesExtension
     */
    'data'?: object;
    /**
     *
     * @type {string}
     * @memberof HubDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {string}
     * @memberof HubDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof HubDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
}
