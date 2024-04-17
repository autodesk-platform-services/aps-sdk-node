import { Systems, Events, Scopes, HookPayload, Hooks, HookDetails, ModifyHookPayload, TokenPayload, Token, XAdsRegion, Region } from "@aps_sdk/webhooks";
import { SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager"; // Assuming a default export
import { WebhooksClient } from "@aps_sdk/webhooks";
import { setScope } from "@aps_sdk/webhooks";


const sdkManager = SdkManagerBuilder.create().build(); // Initialize the SDKManager as needed
const webhooksClient = new WebhooksClient(sdkManager);

// Define your access token and other required parameters
const accessToken = "<token>"; // Replace with your actual access token
const system = Systems.Data; // Replace with the desired system from the Systems enum
const event = Events.DmVersionAdded; // Replace with the desired event from the Events enum
const hookId = "<token>";

// create system event hooks
async function createSystemEventhook(): Promise<any> {
  const hookPayload: HookPayload = {
    callbackUrl: "https://example.com/callback_four_new",
    // @ts-ignore
    scope: setScope({}, Scopes.Folder, "urn:adsk.wipprod:fs.folder:co.k4WX5oe6QDuWg0yxRS6-HQ"),
    "autoReactivateHook": false,
    "hookAttribute": {
      /* Custom metadata */
      "myfoo": 76,
      "projectId": "someURN",
      "myobject": {
        "abc": true
      }
    },
    "hookExpiry": "2024-02-10T17:04:10.444Z"
  };

  try {
    const response = await webhooksClient.createSystemEventHook(accessToken, system, event, hookPayload);
    console.log(response);
  } catch (error) {
    console.error(`Failed to create system event hook:`, error);
  }
}

// get a list of paginated hooks
async function getHooks(): Promise<any> {
  try {
    const response: Hooks = await webhooksClient.getHooks(accessToken);
    console.log(response);
    console.log(response.links.next);
  } catch (error) {
    console.error(`Failed to get hooks:`, error);
  }
}

// get a list of system event hooks
async function getSystemEventHooks(): Promise<any> {
  try {
    const response: Hooks = await webhooksClient.getSystemEventHooks(accessToken, system, event, {scopeName: "folder", status: "active"});
    console.log(response);
    console.log(response.links.next);
  } catch (error) {
    console.error(`Failed to get hooks:`, error);
  }
}

// get a list of system hooks
async function getSystemHooks(): Promise<any> {
  try {
    const response: Hooks = await webhooksClient.getSystemHooks(accessToken, system, {status: "active", region: Region.Us});
    console.log(response);
    console.log(response.links.next);
  } catch (error) {
    console.error(`Failed to get hooks:`, error);
  }
}

// get details of a webhook based on its webhook Id
async function getHookDetails(): Promise<any> {
  try {
    const response: HookDetails = await webhooksClient.getHookDetails(accessToken, system, event, hookId, {xAdsRegion: XAdsRegion.Us});
    console.log(response);
  } catch (error) {
    console.error(`Failed to get hook details:`, error);
  }
}

// get a paginated list of webhooks created in the context of a Client or Application. This API accepts 2-legged token of the application only. If the pageState query string is not specified, the first page is returned.
async function getAppHooks(): Promise<any> {
  try {
    const response: Hooks = await webhooksClient.getAppHooks(accessToken, {xAdsRegion: XAdsRegion.Apac, status: "active", sort:"asc"});
    console.log(response);
  } catch (error) {
    console.error(`Failed to get app hooks:`, error);
  }
}

// update a webhook details based on its webhook ID
async function patchSystemEventHook(): Promise<any> {
  const modifyHookPayload: ModifyHookPayload = {
    "autoReactivateHook": false,
    "hookAttribute": {
      /* Custom metadata */
      "val": 76,
      "projectId": "someURN",
    },
    "hookExpiry": "2024-03-12T17:04:10.444Z",
    "status": "active"
  };

  try {
    const response = await webhooksClient.patchSystemEventHook(
      accessToken,
      system,
      event,
      hookId,
      modifyHookPayload
    );
    console.log(response);
  } catch (error) {
    console.error(`Failed to update system event hook:`, error);
  }
}

// add new webhooks to receive the notification on all the events.
async function createSystemHook(): Promise<any> {
  const hookPayload: HookPayload = {
    callbackUrl: "https://example.com/callback_four_new",
    // @ts-ignore
    scope: setScope({}, Scopes.Folder, "urn:adsk.wipprod:fs.folder:co.k4WX5oe6QDuWg0yxRS6-HQ"),
    "autoReactivateHook": false,
    "hookAttribute": {
      /* Custom metadata */
      "myfoo": 76,
      "projectId": "someURN",
      "myobject": {
        "abc": true
      }
    },
    "hookExpiry": "2024-02-10T17:04:10.444Z"
  };

  try {
    const response = await webhooksClient.createSystemHook(
      accessToken,
      system,
      hookPayload
    );
    console.log(response);
  } catch (error) {
    console.error(`Failed to create system hook:`, error);
  }
}

// deletes a webhook based on webhook ID
async function deleteSystemEventHook(): Promise<any> {
  try {
    const response = await webhooksClient.deleteSystemEventHook(accessToken, system, event, hookId);
    console.log(response);
  } catch (error) {
    console.error(`Failed to delete hook:`, error);
  }
}

// add a new Webhook secret token
async function createToken(): Promise<any> {
  const tokenPayload: TokenPayload = {
    "token": "awffbvdb3trf4fvdfbUyt39suHnbe5Mnrks3"
  };

  try {
    const response:Token = await webhooksClient.createToken(accessToken, tokenPayload);
    console.log(response);
  } catch (error) {
    console.error(`Failed to create token:`, error);
  }
}

// delete a Webhook secret token. Please note that the secret token can still be available for up to 10 mins depending on the latest event delivery attempt.
async function deleteToken(): Promise<any> {
  try {
    const response = await webhooksClient.deleteToken(accessToken);
    console.log(response);
  } catch (error) {
    console.error(`Failed to delete token:`, error);
  }
}

// update an existing Webhook secret token. Please note that the update can take up to 10 mins before being applied depending on the latest event delivery attempt which may still utilize the previous secret token. We recommend your callback accept both secret token values for a period of time to allow all requests to go through.
async function putToken(): Promise<any> {
  const tokenPayload: TokenPayload = {
    "token": "bwffbvdb3trf4fvdfbUyt39suHnbe5Mnrks4"
  };

  try {
    const response = await webhooksClient.putToken(accessToken, tokenPayload);
    console.log(response);
  } catch (error) {
    console.error(`Failed to update token:`, error);
  }
}


// createSystemEventhook();
getHooks();
// getSystemEventHooks()
// getSystemHooks()
// getHookDetails()
// getAppHooks()
// patchSystemEventHook()
// createSystemHook()
// deleteSystemEventHook()
// createToken()
// deleteToken()
// putToken()