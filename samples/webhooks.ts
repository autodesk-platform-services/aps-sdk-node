
import { SdkManagerBuilder } from "autodesk-sdkmanager"; // Assuming a default export
import { Systems, Events, Scopes, HookPayload } from "../model";
import { WebhooksClient } from "../custom-code/WebhooksClient";
import { setScope } from "../../custom-code/utils";

const sdkManager = SdkManagerBuilder.Create().build(); // Initialize the SDKManager as needed
const webhooksClient = new WebhooksClient(sdkManager);

// Define your access token and other required parameters
const accessToken = ""; // Replace with your actual access token
const system = Systems.Derivative; // Replace with the desired system from the Systems enum
const event = Events.ExtractionFinished; // Replace with the desired event from the Events enum

// create system event hooks
async function createSystemEventhook(): Promise<any> {
  const hookPayload: HookPayload = {
    callbackUrl: "https://example.com/callback_four_new",
    // @ts-ignore
    scope: setScope({}, Scopes.Workflow, "some-value-five-new"),
  };

  try {
    const response = await webhooksClient.createSystemEventHookAsync(
      accessToken,
      system,
      event,
      hookPayload
    );
    console.log(response);
  } catch (error) {
    console.error(`Failed to create system event hook:`, error);
  }
}

// get a list of paginated hooks
async function getHooks(): Promise<any> {
  try {
    const response = await webhooksClient.getHooksAsync(accessToken);
    console.log(response);
    console.log(response.links.next);
  } catch (error) {
    console.error(`Failed to get hooks:`, error);
  }
}

createSystemEventhook();
getHooks();
