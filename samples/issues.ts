//process.env['LOG_LEVEL'] = 'info'; /* The default log level is `Error`.*/
import { CommentsPayload, IssueClient ,IssuePayload, Region, Status  } from "@aps_sdk/construction-issues";
import { SdkManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager";

const access_token = "<token>";
const projectid: string = "<projectid>";
const issueid:string="<issueid>";
const issuepayload: IssuePayload = {
    title: "<title>",
    description: "<description>",
    status: Status.Open,
    issueSubtypeId: "<issueSubtypeId>"
}

var sdkManager: SdkManager = SdkManagerBuilder
    .create()
    .build();
const issuesClient: IssueClient = new IssueClient(sdkManager);

//Returns the current user permissions.
async function getUserProfile()
{
    var response = await issuesClient.getUserProfile(access_token, projectid)
    console.log(response);
}

//Retrieves a project’s categories and types. 
async function getIssuesTypes()
{
    var response = await await issuesClient.getIssuesTypes(access_token,projectid);
    console.log(response);
}

//Retrieves information about issue custom attributes (custom fields) for a project, including the custom attribute title, description and type.
async function getAttributeDefinitions()
{
    var response = await issuesClient.getAttributeDefinitions(access_token, projectid, { xAdsRegion: Region.Us });
    console.log(response);
}

//Retrieves information about the issue custom attributes (custom fields) that are assigned to issue categories and issue types
async function getAttributeMappings()
{
    var response = issuesClient.getAttributeMappings(access_token,projectid);
    console.log(response);
}

//Retrieves a list of supported root cause categories and root causes that you can allocate to an issue. For example, communication and coordination.
async function getRootCauseCategories()
{
    var response = await issuesClient.getRootCauseCategories(access_token, projectid, { filterUpdatedAt: "<DATETIME>,<DATETIME>"});
    console.log(response);
}

// Retrieves information about all the issues in a project, including details about their associated comments and attachments.
async function getIssues()
{
    var response = await issuesClient.getIssues(access_token, projectid);
    console.log(response);
}

// Retrieves information about all the issues in a project, including details about their associated comments and attachments.
async function createIssue()
{

    
    var response = await issuesClient.createIssue(access_token, projectid, issuepayload, { xAdsRegion: Region.Us });
    console.log(response);
}

//Retrieves detailed information about a single issue. For general information about all the issues in a project, see GET issues.
async function getIssueDetails()
{
    var response = await issuesClient.getIssueDetails(access_token,projectid,issueid);
    console.log(response);
}

//Updates an issue.
async function patchIssueDetails()
{
    var response = await issuesClient.patchIssueDetails(access_token,projectid,issueid,issuepayload);
    console.log(response);
}

// Get all the comments for a specific issue.
async function getComments()
{
    var response = await issuesClient.getComments(access_token,projectid,issueid);
    console.log(response);
}

//Get all the comments for a specific issue.
async function createComments()
{
    var commentsPayload :CommentsPayload={
            body:"<Body of the comment>"
        }
    var response = await  issuesClient.createComments(access_token,projectid,issueid,commentsPayload);
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
