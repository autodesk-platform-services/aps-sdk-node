/* tslint:disable */
/* eslint-disable */


/**
 * Filters retrieved webhooks by their current state. Possible values are   
 * - ``active`` - Successfully delivered most recent event notifications.  
 * - ``inactive`` - Failed to deliver most recent event notification and has been deactivated. 
 * - ``reactivated`` - Previously inactive but was reactivated. No events have occurred since reactivation.  If this parameter is not specified, the filter is not applied. See [Event Delivery Guarantees](/en/docs/webhooks/v1/developers_guide/event-delivery-guarantees/) for more information on how the state of a webhook changes. **@deprecated Valid options are `active` | `inactive`** 
 * @export
 * @enum {string}
 */

export const StatusFilter = {
    Active: 'active',
    Inactive: 'inactive',
    /** @deprecated Valid options are `active` | `inactive`. */
    Reactivated: 'reactivated'
} as const;

export type StatusFilter = typeof StatusFilter[keyof typeof StatusFilter];



