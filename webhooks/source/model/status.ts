/* tslint:disable */
/* eslint-disable */


/**
 * Indicates the current state of the webhook. Possible values are   - ``active`` - Successfully delivered most recent event notifications.  - ``inactive`` - Failed to deliver most recent event notification and has been deactivated. - ``reactivated`` - Previously inactive webhook that has been reactivated. No events have occurred since reactivation.  See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the system deactivates webhooks and subsequently reactivates them.     
 * @export
 * @enum {string}
 */

export const Status = {
    Active: 'active',
    Inactive: 'inactive',
    Reactivated: 'reactivated'
} as const;

export type Status = typeof Status[keyof typeof Status];



