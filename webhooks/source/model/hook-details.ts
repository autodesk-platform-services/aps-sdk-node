/* tslint:disable */
/* eslint-disable */

import { HookDetailsScope } from './hook-details-scope';
import { Status } from './status';

/**
 * Contains the details of a webhook.
 * @export
 * @interface HookDetails
 */
export interface HookDetails {
    /**
     * The ID that uniquely identifies the webhook.
     * @type {string}
     * @memberof HookDetails
     */
    'hookId'?: string;
    /**
     * The ID of the tenant from which the event  originates.
     * @type {string}
     * @memberof HookDetails
     */
    'tenant'?: string;
    /**
     * The URL to send notifications to when the  event is triggered. 
     * @type {string}
     * @memberof HookDetails
     */
    'callbackUrl'?: string;
    /**
     * The ID of the entity that created the webhook. It can be one of the following:  - Client ID of an app: If created using a Client Credentials flow (two-legged OAuth).  - User ID of a user: If created using an Authorization Code flow (three-legged OAuth).
     * @type {string}
     * @memberof HookDetails
     */
    'createdBy'?: string;
    /**
     * The ID of the event the webhook monitors.  See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of events and wildcard patterns.
     * @type {string}
     * @memberof HookDetails
     */
    'event'?: string;
    /**
     * The date and time when the webhook was created, formatted as an ISO 8601 date/time string.
     * @type {string}
     * @memberof HookDetails
     */
    'createdDate'?: string;
    /**
     * The date and time when the webhook was last modified, formatted as an ISO 8601 date/time string.
     * @type {string}
     * @memberof HookDetails
     */
    'lastUpdatedDate'?: string;
    /**
     * The ID of the system the webhook applies to. For example ``data`` for Data Management. See [Supported Events](/en/docs/webhooks/v1/reference/events/) for a full list of systems.
     * @type {string}
     * @memberof HookDetails
     */
    'system'?: string;
    /**
     * Indicates what type of an entity created the webhooks. Possible values:  - ``O2User`` - Created by a user through an Authorization Code flow (three-legged OAuth). - ``Application`` - Created by an application using a Client Credentials flow (two-legged OAuth).
     * @type {string}
     * @memberof HookDetails
     */
    'creatorType'?: string;
    /**
     * 
     * @type {Status}
     * @memberof HookDetails
     */
    'status'?: Status;
    /**
     * ``true`` - Automatically reactivate the webhook if it becomes ``inactive``.  ``false`` - (Default) Do not reactivate the webhook if it becomes ``inactive``.  See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the webhooks service handles reactivation.
     * @type {boolean}
     * @memberof HookDetails
     */
    'autoReactivateHook'?: boolean;
    /**
     * The date and time when the webhook will expire, formatted as an ISO 8601 date/time string. A missing or null value indicates that the webhook will never expire.  ``hookExpiry`` is returned only if it was specified when the webhook was created.
     * @type {string}
     * @memberof HookDetails
     */
    'hookExpiry'?: string;
    /**
     * 
     * @type {HookDetailsScope}
     * @memberof HookDetails
     */
    'scope'?: HookDetailsScope;
    /**
     * The URN of the webhook.
     * @type {string}
     * @memberof HookDetails
     */
    'urn'?: string;
    /**
     * ``true`` - The callback request payload will only contain information about the event. It will not contain any information about the webhook.  ``false`` - The callback request payload will contain information about the event as well as the webhook.
     * @type {string}
     * @memberof HookDetails
     */
    'callbackWithEventPayloadOnly'?: string;
    /**
     * A link to itself.
     * @type {string}
     * @memberof HookDetails
     */
    '__self__'?: string;
}

