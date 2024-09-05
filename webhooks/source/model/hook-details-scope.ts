/* tslint:disable */
/* eslint-disable */


/**
 * Represents the extent to which the event is monitored. For example, if the scope is folder, the webhooks service generates a notification for the specified event occurring in any sub folder or item within that folder.
 * @export
 * @interface HookDetailsScope
 */
export interface HookDetailsScope {
    /**
     * The URN of the folder the scope is set to. Present only for Data Management events.   See [Creating a Webhook and Listening to Data Management Events](/en/docs/webhooks/v1/tutorials/create-a-hook-data-management/) for more information.
     * @type {string}
     * @memberof HookDetailsScope
     */
    'folder'?: string;
    /**
     * The ID of a Model Derivative workflow the scope is set to. Present only for Model Derivative events.  See [Creating a Webhook and Listening to Model Derivative Events](/en/docs/webhooks/v1/tutorials/create-a-hook-model-derivative/) for more information. 
     * @type {string}
     * @memberof HookDetailsScope
     */
    'workflow'?: string;
}

