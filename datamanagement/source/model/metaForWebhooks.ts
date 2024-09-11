

/**
 * Meta information required for webhooks.
 * @export
 * @interface MetaForWebhooks
 */
export interface MetaForWebhooks {
    /**
     * The Workflow ID of a webhook that listens to Model Derivative events. Must be less than 36 characters.  Only ASCII characters (a-z, A-Z, 0-9), periods (.), and hyphens (-) are accepted. See the [Creating a Webhook and Listening to Events](/en/docs/webhooks/v1/tutorials/create-a-hook-model-derivative) tutorial for more information.  **Note**: This attribute applies to BIM 360 Docs only. 
     * @type {string}
     * @memberof MetaForWebhooks
     */
    'workflow': string;
    /**
     * A user defined JSON object containing custom workflow information for the specified webhook event. Must be less than 1KB.  **Note**: Applicable only if a valid value has been specified for ``meta.workflow``.  
     * @type {string}
     * @memberof MetaForWebhooks
     */
    'workflowAttribute'?: string;
}

