import { Systems, Events, HookPayload, Hooks, HookDetails, ModifyHookPayload, TokenPayload, Token, Region, StatusFilter, Sort } from "@aps_sdk/webhooks";
import { Logger, LogLevel, SdkManager, SdkManagerBuilder, StaticAuthenticationProvider } from "@aps_sdk/autodesk-sdkmanager"; // Assuming a default export
import { WebhooksClient } from "@aps_sdk/webhooks";
import 'dotenv/config';

// SdkManager can be optionally initialised to add custom logger etc.
// const sdkManager: SdkManager = SdkManagerBuilder.create().addLogger(new Logger(LogLevel.DEBUG)).build();

//Initialise Auth Provider. If not provided, access tokens will need to be passed to each method.
const staticAuthenticationProvider = new StaticAuthenticationProvider(process.env.accessToken);
const webhooksClient = new WebhooksClient({authenticationProvider: staticAuthenticationProvider});

// Define your access token and other required parameters
const accessToken = process.env.accessToken; // Replace with your actual access token
const system = Systems.Data; // Replace with the desired system from the Systems enum
const event = Events.DmVersionAdded; // Replace with the desired event from the Events enum
const hookId = process.env.hookId;
const folderId = process.env.folderId;
const projectId = process.env.projectId;

// create system event hooks
async function createSystemEventhook(): Promise<any> {
  const hookPayload: HookPayload = {
    callbackUrl: "https://example.com/callback_fifth_new",
    scope: { "folder": "urn:adsk.wipprod:fs.folder:co.dn8tJ7ZIQDiPLsoV0_kn_Q"},
    "autoReactivateHook": false,
    "hookAttribute": {
      /* Custom metadata */
      "myfoo": 76,
      "projectId": projectId,
      "myobject": {
        "abc": true
      }
    },
    "hookExpiry": "2025-12-12T17:04:10.444Z"
  };

  try {
    const response = await webhooksClient.createSystemEventHook(system, event, hookPayload, 
      {
        region: Region.Emea
      });
    console.log(response);
  } catch (error) {
    console.error(`Failed to create system event hook:`, error.message);
  }
}

// get a list of paginated hooks
async function getHooks(): Promise<any> {
  try {
    const response: Hooks = await webhooksClient.getHooks();
    console.log(response);
    console.log(response.links.next);
  } catch (error) {
    console.error(`Failed to get hooks:`, error.message);
  }
}

// get a list of system event hooks
async function getSystemEventHooks(): Promise<any> {
  try {
    const response: Hooks = await webhooksClient.getSystemEventHooks(system, Events.DmFolderCopied, {scopeName: "folder", status: "active"});
    console.log(response);
    console.log(response.links.next);
  } catch (error) {
    console.error(`Failed to get hooks:`, error.message);
  }
}

// get a list of system hooks
async function getSystemHooks(): Promise<any> {
  try {
    const response: Hooks = await webhooksClient.getSystemHooks(system, {status: "active", region: Region.Us});
    console.log(response);
    console.log(response.links.next);
  } catch (error) {
    console.error(`Failed to get hooks:`, error.message);
  }
}

// get details of a webhook based on its webhook Id
async function getHookDetails(): Promise<any> {
  try {
    const response: HookDetails = await webhooksClient.getHookDetails(system, event, hookId, {region: Region.Us});
    console.log(response);
  } catch (error) {
    console.error(`Failed to get hook details:`, error.message);
  }
}

// get a paginated list of webhooks created in the context of a Client or Application. This API accepts 2-legged token of the application only. If the pageState query string is not specified, the first page is returned.
async function getAppHooks(): Promise<any> {
  try {
    const response: Hooks = await webhooksClient.getAppHooks({region: Region.Apac, status: StatusFilter.Active, sort: Sort.Asc, accessToken: "test-token"});
    console.log(response);
  } catch (error) {
    console.error(`Failed to get app hooks:`, error.message);
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
    "hookExpiry": "2024-09-05T17:04:10Z",
    "status": "active"
  };

  try {
    const response = await webhooksClient.patchSystemEventHook(
      system,
      event,
      hookId,
      modifyHookPayload
    );
    console.log(response);
  } catch (error) {
    console.error(`Failed to update system event hook:`, error.message);
  }
}

// add new webhooks to receive the notification on all the events.
async function createSystemHook(): Promise<any> {
  const hookPayload: HookPayload = {
    callbackUrl: "https://example.com/callback_four_new",
    "scope": { "folder": "urn:adsk.wipprod:fs.folder:co.k4WX5oe6QDuWg0yxRS6-HQ"},
    "autoReactivateHook": false,
    "hookAttribute": {
      /* Custom metadata */
      "myfoo": 76,
      "projectId": "someURN",
      "myobject": {
        "abc": true
      }
    },
    "hookExpiry": "2024-09-06T17:04:10.444Z"
  };

  try {
    const response = await webhooksClient.createSystemHook(
      system,
      hookPayload
    );
    console.log(response);
  } catch (error) {
    console.error(`Failed to create system hook:`, error.message);
  }
}

// deletes a webhook based on webhook ID
async function deleteSystemEventHook(): Promise<any> {
  try {
    const response = await webhooksClient.deleteSystemEventHook(system, event, hookId);
    console.log(response);
  } catch (error) {
    console.error(`Failed to delete hook:`, error.message);
  }
}

// add a new Webhook secret token
async function createToken(): Promise<any> {
  const tokenPayload: TokenPayload = {
    "token": "awffbvdb3trf4fvdfbUyt39suHnbe5Mnrks3"
  };

  try {
    const response:Token = await webhooksClient.createToken(tokenPayload);
    console.log(response);
  } catch (error) {
    console.error(`Failed to create token:`, error.message);
  }
}

// delete a Webhook secret token. Please note that the secret token can still be available for up to 10 mins depending on the latest event delivery attempt.
async function deleteToken(): Promise<any> {
  try {
    const response = await webhooksClient.deleteToken();
    console.log(response);
  } catch (error) {
    console.error(`Failed to delete token:`, error.message);
  }
}

// update an existing Webhook secret token. Please note that the update can take up to 10 mins before being applied depending on the latest event delivery attempt which may still utilize the previous secret token. We recommend your callback accept both secret token values for a period of time to allow all requests to go through.
async function putToken(): Promise<any> {
  const tokenPayload: TokenPayload = {
    "token": "bwffbvdb3trf4fvdfbUyt39suHnbe5Mnrks4"
  };

  try {
    const response = await webhooksClient.putToken(tokenPayload);
    console.log(response);
  } catch (error) {
    console.error(`Failed to update token:`, error.message);
  }
}


createSystemEventhook();
// getHooks();
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