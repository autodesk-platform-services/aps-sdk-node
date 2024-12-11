/* tslint:disable */
/* eslint-disable */

import { ItemPayloadData } from './itemPayloadData';
import { ItemPayloadIncluded } from './itemPayloadIncluded';
import { JsonApiVersion } from './jsonApiVersion';
import { MetaForWebhooks } from './metaForWebhooks';

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
     * @type {Array<ItemPayloadIncluded>}
     * @memberof ItemPayload
     */
    'included': Array<ItemPayloadIncluded>;
    /**
     * 
     * @type {MetaForWebhooks}
     * @memberof ItemPayload
     */
    'meta'?: MetaForWebhooks;
}

