/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the details of a webhook to be created. 
 * @export
 * @interface HookPayload
 */
export interface HookPayload {
    /**
     * The URL to send notifications to when the  event is triggered. 
     * @type {string}
     * @memberof HookPayload
     */
    'callbackUrl': string;
    /**
     * ``true`` - Automatically reactivate the webhook if it becomes ``inactive``.  ``false`` - (Default) Do not reactivate the webhook if it becomes ``inactive``.  See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the webhooks service handles reactivation.
     * @type {boolean}
     * @memberof HookPayload
     */
    'autoReactivateHook'?: boolean;
    /**
     * Specifies the extent to which the event is monitored. For example, if the scope is folder, the webhooks service generates a notification for the specified event occurring in any sub folder or item within that folder.
     * @type {object}
     * @memberof HookPayload
     */
    'scope': object;
    /**
     * Specifies the extent to which the event is monitored. For example, if the scope is folder, the webhooks service generates a notification for the specified event occurring in any sub folder or item within that folder.
     * @type {object}
     * @memberof HookPayload
     */
    'hookAttribute'?: object;
    /**
     * The date and time the webhook will expire, formatted as an ISO 8601 date/time string. If you do not specify this attribute or set it to null, the webhook will never expire.
     * @type {string}
     * @memberof HookPayload
     */
    'hookExpiry'?: string;
    /**
     * A Jsonpath expression that you can use to filter the callbacks you receive.  See [Callback Filtering](/en/docs/webhooks/v1/developers_guide/callback-filtering/) for more information.
     * @type {string}
     * @memberof HookPayload
     */
    'filter'?: string;
    /**
     * The ID of the hub that contains the entity that you want to monitor. Specify this attribute if the user calling this operation is a member of a large number of projects.  For BIM 360 Docs and ACC Docs, a hub ID corresponds to an Account ID. To convert a BIM 360 or ACC Account ID to a hub ID, prefix the Account ID with ``b.``. For example, an Account ID of ```c8b0c73d-3ae9``` translates to a hub ID of ``b.c8b0c73d-3ae9``.
     * @type {string}
     * @memberof HookPayload
     */
    'hubId'?: string;
    /**
     * The ID of the project that contains the entity that you want to monitor Specify this attribute if the user calling this operation is a member of a large number of projects.  BIM 360 and ACC project IDs are different to Data Management project IDs. To convert a BIM 360 and ACC project IDs to  Data Management project IDs, prefix the BIM 360 or ACC Project ID with ``b.``. For example, a project ID of ``c8b0c73d-3ae9`` translates to a project ID of ``b.c8b0c73d-3ae9``.
     * @type {string}
     * @memberof HookPayload
     */
    'projectId'?: string;
    /**
     * The tenant associated with the event. If specified on the webhook, the event\'s tenant must match the webhook\'s tenant.
     * @type {string}
     * @memberof HookPayload
     */
    'tenant'?: string;
    /**
     * ``true`` - The callback request payload must only contain information about the event. It must not contain any information about the webhook.  ``false`` - (Default) The callback request payload must contain information about the event as well as the webhook.
     * @type {boolean}
     * @memberof HookPayload
     */
    'callbackWithEventPayloadOnly'?: boolean;
}

