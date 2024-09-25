/* tslint:disable */
/* eslint-disable */

import { ItemPayloadData } from './item-payload-data';
import { ItemPayloadIncluded } from './item-payload-included';
import { JsonApiVersion } from './json-api-version';
import { MetaForWebhooks } from './meta-for-webhooks';

/**
 * Describe the item to be created.
 * @export
 * @interface ItemPayload
 */
export interface ItemPayload {
    /**
     * 
     * @type {JsonApiVersion}
     * @memberof ItemPayload
     */
    'jsonapi': JsonApiVersion;
    /**
     * 
     * @type {ItemPayloadData}
     * @memberof ItemPayload
     */
    'data': ItemPayloadData;
    /**
     * An array of objects, where each object represents a version of the item to be created. In this case there will only be one element in the array.
     * @type {Set<ItemPayloadIncluded>}
     * @memberof ItemPayload
     */
    'included': Set<ItemPayloadIncluded>;
    /**
     * 
     * @type {MetaForWebhooks}
     * @memberof ItemPayload
     */
    'meta'?: MetaForWebhooks;
}

