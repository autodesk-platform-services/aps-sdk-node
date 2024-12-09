/* tslint:disable */
/* eslint-disable */

import { TypeItem } from './typeItem';

/**
 * 
 * @export
 * @interface PublishWithoutLinksPayloadRelationshipsResourcesData
 */
export interface PublishWithoutLinksPayloadRelationshipsResourcesData {
    /**
     * The type of resource. Will always be: items
     * @type {TypeItem}
     * @memberof PublishWithoutLinksPayloadRelationshipsResourcesData
     */
    'type'?: TypeItem;
    /**
     * The URN of the resource. For information about  finding the URN, see the initial steps  of the  [Publish a C4R Model to BIM 360 Docs](/en/docs/data/v2/tutorials/publish-model/)  tutorial.
     * @type {string}
     * @memberof PublishWithoutLinksPayloadRelationshipsResourcesData
     */
    'id'?: string;
}



