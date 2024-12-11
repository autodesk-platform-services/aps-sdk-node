import { CommentsPayload, IssuesClient, IssuePayload, Region, Status } from "@aps_sdk/construction-issues";
import {Logger, LogLevel, SdkManager, SdkManagerBuilder, StaticAuthenticationProvider } from "@aps_sdk/autodesk-sdkmanager";
import 'dotenv/config';

const accessToken: string = process.env.accessToken;
const projectId: string = process.env.projectId;
const issueId: string = process.env.issueId;
const issuePayload: IssuePayload = {
    title: process.env.title,
    description: process.env.description,
    status: Status.Open,
    issueSubtypeId: process.env.issueSubtypeId
}

// SdkManager can be optionally initialised to add custom logger etc.
// const sdkmanager: SdkManager = SdkManagerBuilder.create().addLogger(new Logger(LogLevel.DEBUG)).build();

//Initialise Auth Provider. If not provided, access tokens will need to be passed to each method.

const staticAuthenticationProvider = new StaticAuthenticationProvider(accessToken);
const issuesClient = new IssuesClient({ authenticationProvider: staticAuthenticationProvider });

//Returns the current user permissions.
async function getUserProfile() {
    var response = await issuesClient.getUserProfile(projectId)
    console.log(response);
}

//Retrieves a project’s categories and types. 
async function getIssuesTypes() {
    var response = await await issuesClient.getIssuesTypes(projectId);
    console.log(response);
}

//Retrieves information about issue custom attributes (custom fields) for a project, including the custom attribute title, description and type.
async function getAttributeDefinitions() {
    var response = await issuesClient.getAttributeDefinitions(projectId, { xAdsRegion: Region.Us });
    console.log(response);
}

//Retrieves information about the issue custom attributes (custom fields) that are assigned to issue categories and issue types
async function getAttributeMappings() {
    var response = issuesClient.getAttributeMappings(projectId);
    console.log(response);
}

//Retrieves a list of supported root cause categories and root causes that you can allocate to an issue. For example, communication and coordination.
async function getRootCauseCategories() {
    var response = await issuesClient.getRootCauseCategories(projectId, { filterUpdatedAt: "<DATETIME>,<DATETIME>" });
    console.log(response);
}

// Retrieves information about all the issues in a project, including details about their associated comments and attachments.
async function getIssues() {
    var response = await issuesClient.getIssues(projectId);
    console.log(response);
}

// Retrieves information about all the issues in a project, including details about their associated comments and attachments.
async function createIssue() {


    var response = await issuesClient.createIssue(projectId, issuePayload, { xAdsRegion: Region.Us });
    console.log(response);
}

//Retrieves detailed information about a single issue. For general information about all the issues in a project, see GET issues.
async function getIssueDetails() {
    var response = await issuesClient.getIssueDetails(projectId, issueId);
    console.log(response);
}

//Updates an issue.
async function patchIssueDetails() {
    var response = await issuesClient.patchIssueDetails(projectId, issueId, issuePayload);
    console.log(response);
}

// Get all the comments for a specific issue.
async function getComments() {
    var response = await issuesClient.getComments(projectId, issueId);
    console.log(response);
}

//Get all the comments for a specific issue.
async function createComments() {
    var commentsPayload: CommentsPayload = {
        body: "<Body of the comment>"
    }
    var response = await issuesClient.createComments(projectId, issueId, commentsPayload);
    console.log(response);
}

getUserProfile();
getIssuesTypes();
getAttributeDefinitions();
getAttributeMappings();
getRootCauseCategories();
getIssues();
createIssue();
getIssueDetails();
patchIssueDetails();
getComments();
createComments();
