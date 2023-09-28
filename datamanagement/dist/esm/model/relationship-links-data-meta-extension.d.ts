import { HubsLinksSelf } from './hubs-links-self';
import { RelationshipLinksDataMetaExtensionData } from './relationship-links-data-meta-extension-data';
/**
 *
 * @export
 * @interface RelationshipLinksDataMetaExtension
 */
export interface RelationshipLinksDataMetaExtension {
    /**
     *
     * @type {string}
     * @memberof RelationshipLinksDataMetaExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof RelationshipLinksDataMetaExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof RelationshipLinksDataMetaExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {RelationshipLinksDataMetaExtensionData}
     * @memberof RelationshipLinksDataMetaExtension
     */
    'data'?: RelationshipLinksDataMetaExtensionData;
}
