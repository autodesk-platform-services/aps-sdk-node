import { HubsLinksSelf } from './hubs-links-self';
/**
 *
 * @export
 * @interface HubsDataAttributesExtension
 */
export interface HubsDataAttributesExtension {
    /**
     *
     * @type {string}
     * @memberof HubsDataAttributesExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof HubsDataAttributesExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof HubsDataAttributesExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {object}
     * @memberof HubsDataAttributesExtension
     */
    'data'?: object;
}
