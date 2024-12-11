/* tslint:disable */
/* eslint-disable */

import { StatusRequest } from './statusRequest';

/**
 * Specifies the details of a webhook to be updated. 
 * @export
 * @interface ModifyHookPayload
 */
export interface ModifyHookPayload {
    /**
     * 
     * @type {StatusRequest}
     * @memberof ModifyHookPayload
     */
    'status'?: StatusRequest;
    /**
     * ``true`` - Automatically reactivate the webhook if it becomes ``inactive``.  ``false`` - (Default) Do not reactivate the webhook if it becomes ``inactive``.  See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the webhooks service handles reactivation.
     * @type {boolean}
     * @memberof ModifyHookPayload
     */
    'autoReactivateHook'?: boolean;
    /**
     * A Jsonpath expression that you can use to filter the callbacks you receive.  See [Callback Filtering](/en/docs/webhooks/v1/developers_guide/callback-filtering/) for more information.
     * @type {string}
     * @memberof ModifyHookPayload
     */
    'filter'?: string;
    /**
     * Specifies the extent to which the event is monitored. For example, if the scope is folder, the webhooks service generates a notification for the specified event occurring in any sub folder or item within that folder.
     * @type {object}
     * @memberof ModifyHookPayload
     */
    'hookAttribute'?: object;
    /**
     * A secret token that is used to generate a hash signature, which is passed along with notification requests to the callback URL.  See the [Secret Token](/en/docs/webhooks/v1/developers_guide/basics/#secret-token) section in API Basics for more information.
     * @type {string}
     * @memberof ModifyHookPayload
     */
    'token'?: string;
    /**
     * The date and time the webhook will expire, formatted as an ISO 8601 date/time string. If you set this to null, the webhook will never expire.
     * @type {string}
     * @memberof ModifyHookPayload
     */
    'hookExpiry'?: string;
}



