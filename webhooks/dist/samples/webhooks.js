"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autodesk_sdkmanager_1 = require("autodesk-sdkmanager"); // Assuming a default export
const model_1 = require("../model");
const WebhooksClient_1 = require("../custom-code/WebhooksClient");
const utils_1 = require("../custom-code/utils");
// import WebhooksClient from '../custom-code/WebhooksClient";
const sdkManager = autodesk_sdkmanager_1.SdkManagerBuilder.Create().build(); // Initialize the SDKManager as needed
const webhooksClient = new WebhooksClient_1.WebhooksClient(sdkManager);
// Define your access token and other required parameters
const accessToken = 'your-access-token'; // Replace with your actual access token
const system = model_1.Systems.Derivative; // Replace with the desired system from the Systems enum
const event = model_1.Events.ExtractionFinished; // Replace with the desired event from the Events enum
// You can optionally provide xAdsRegion, region, and hookPayload as needed
const xAdsRegion = 'your-xAdsRegion'; // Replace with the desired region
const region = 'your-region'; // Replace with the desired region
function createHookPayload(callbackUrl, scope) {
    return {
        callbackUrl,
        scope
    };
}
const scope = (0, utils_1.setScope)(model_1.Scopes.Workflow, '<my-workflow-id>');
const hookPayload = createHookPayload('https://your-callback-url.com', scope);
// Call the createSystemEventHookAsync method
webhooksClient
    .createSystemEventHookAsync(accessToken, system, event, xAdsRegion, region, hookPayload)
    .then(() => {
    console.log('System event hook created successfully.');
})
    .catch((error) => {
    console.error('Failed to create system event hook:', error);
});
// Get Hooks
webhooksClient
    .getHooksAsync(accessToken)
    .then(() => {
    console.log('System event hook created successfully.');
})
    .catch((error) => {
    console.error('Failed to create system event hook:', error);
});
