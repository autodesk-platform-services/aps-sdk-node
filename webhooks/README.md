## webhooks-api@1.0.0

The Webhooks API enables applications to listen to APS events and receive notifications when they occur. When an event is triggered, the Webhooks service sends a notification to a callback URL you have defined.  You can customize the types of events and resources for which you receive notifications. For example, you can set up a webhook to send notifications when files are modified or deleted in a specified hub or project.  Below is quick summary of this workflow:  1. Identify the data for which you want to receive notifications. 2. Use the Webhooks API to create one or more hooks. 3. The Webhooks service will notify the webhook when there is a change in the data. 
This is TypeScript client library for webhooks-api

## Building the SDK
1. Install dependencies
```
npm install
```
2. Format code using prettier
```
npm run prettier-format
```
3. Build the sdk
```
npm run build
```
