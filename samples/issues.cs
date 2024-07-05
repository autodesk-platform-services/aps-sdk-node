import { IssueClient } from "./custom-code/IssueClient";
import { SdkManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager";
import { IssuePayload, Region, Status } from "./model";
import { isDataView } from "util/types";

const access_token = "<token>";
const projectid: string = "<projectid>";


var sdkManager: SdkManager = SdkManagerBuilder
    .create()
    .build();
const issuesClient: IssueClient = new IssueClient(sdkManager);

//Returns the current user permissions.
async function getUserProfile()
{
    var response = await issuesClient.getUserProfile(token, projectid)
    console.log(response);
}

//Retrieves a project’s categories and types. 
async function getIssuesTypes()
{
    var response = await await issuesClient.getIssuesTypes(token,projectid);
    console.log(response);
}

//Retrieves information about issue custom attributes (custom fields) for a project, including the custom attribute title, description and type.
async function getAttributeDefinitions()
{
    var response = await issuesClient.getAttributeDefinitions(token, projectid, { xAdsRegion: Region.Us });
    console.log(response);
}

//Retrieves information about the issue custom attributes (custom fields) that are assigned to issue categories and issue types
async function getAttributeMappings()
{
    var response = issuesClient.getAttributeMappings(token,projectid);
    console.log(response);
}

//Retrieves a list of supported root cause categories and root causes that you can allocate to an issue. For example, communication and coordination.
async function getRootCauseCategories()
{
    var response = await issuesClient.getRootCauseCategories(token, projectid, { filterUpdatedAt: "<DATETIME>,<DATETIME>"});
    console.log(response);
}

// Retrieves information about all the issues in a project, including details about their associated comments and attachments.
async function getIssues()
{
    var response = await issuesClient.getIssues(token, projectid);
    console.log(response);
}

// Retrieves information about all the issues in a project, including details about their associated comments and attachments.
async function createIssue()
{

    const issuepayload: IssuePayload = {
        title: "<title>",
        description: "<description>",
        status: Status.Open,
        issueSubtypeId: "<issueSubtypeId>"
    }
    var response = await issuesClient.createIssue(token, projectid, issuepayload, { xAdsRegion: Region.Us });
    console.log(response);
}

//Retrieves detailed information about a single issue. For general information about all the issues in a project, see GET issues.
async function getIssueDetails()
{
    var response = await issuesClient.getIssueDetails(token,projectid,issueid);
    console.log(response);
}

//Updates an issue.
async function patchIssueDetails()
{
    var response = await issuesClient.patchIssueDetails(token,projectid,issueid,issuepayload);
    console.log(response);
}

// Get all the comments for a specific issue.
async function getComments()
{
    var response = await issuesClient.getComments(token,projectid,issueid);
    console.log(response);
}

//Get all the comments for a specific issue.
async function createComments()
{
    var commentsPayload :CommentsPayload={
            body:"<Body of the comment>"

        }
    var response = await  issuesClient.createComments(token,projectid,issueid,commentsPayload);
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
