import { HubsDataRelationshipsPimCollectionData } from './hubs-data-relationships-pim-collection-data';
import { HubsLinksSelf } from './hubs-links-self';
import { RelationshipLinksDataMetaExtension } from './relationship-links-data-meta-extension';
/**
 *
 * @export
 * @interface RelationshipLinksDataMeta
 */
export interface RelationshipLinksDataMeta {
    /**
     *
     * @type {HubsLinksSelf}
     * @memberof RelationshipLinksDataMeta
     */
    'link'?: HubsLinksSelf;
    /**
     *
     * @type {HubsDataRelationshipsPimCollectionData}
     * @memberof RelationshipLinksDataMeta
     */
    'data'?: HubsDataRelationshipsPimCollectionData;
    /**
     *
     * @type {string}
     * @memberof RelationshipLinksDataMeta
     */
    'mimeType'?: string;
    /**
     *
     * @type {RelationshipLinksDataMetaExtension}
     * @memberof RelationshipLinksDataMeta
     */
    'extension'?: RelationshipLinksDataMetaExtension;
}
