import { HubsLinksSelf } from './hubs-links-self';
import { RelationshipRefsDataMetaExtensionData } from './relationship-refs-data-meta-extension-data';
/**
 *
 * @export
 * @interface RelationshipRefsDataMetaExtension
 */
export interface RelationshipRefsDataMetaExtension {
    /**
     *
     * @type {string}
     * @memberof RelationshipRefsDataMetaExtension
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof RelationshipRefsDataMetaExtension
     */
    'version'?: string;
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof RelationshipRefsDataMetaExtension
     */
    'schema'?: HubsLinksSelf;
    /**
     *
     * @type {RelationshipRefsDataMetaExtensionData}
     * @memberof RelationshipRefsDataMetaExtension
     */
    'data'?: RelationshipRefsDataMetaExtensionData;
}
