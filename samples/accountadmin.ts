import { AdminClient, BusinessUnitsRequestPayload, BusinessUnitsResponse, Classification, Company, CompanyImportResponse, CompanyPatchPayload, CompanyPayload, Currency, FilterTextMatch, Platform, ProductAccess, ProductKeys, Products, Project, ProjectPatchResponse, ProjectPayload, ProjectUser, ProjectUserPayload, ProjectUserResponse, ProjectUsers, ProjectUsersImportPayload, ProjectUsersImportResponse, ProjectUsersUpdatePayload, Projects, Region, SortBy, Status, Timezone, Trade, User, UserImportResponse, UserPatchPayload, UserPayload } from '@aps_sdk/construction-account-admin';
import { Logger, LogLevel, SdkManager, SdkManagerBuilder, StaticAuthenticationProvider } from "@aps_sdk/autodesk-sdkmanager"
import * as fs from "fs";
import 'dotenv/config';

// SdkManager can be optionally initialised to add custom logger etc.
const sdkManager: SdkManager = SdkManagerBuilder.create().addLogger(new Logger(LogLevel.INFO)).build();

//Initialise Auth Provider. If not provided, access tokens will need to be passed to each method.
const staticAuthenticationProvider = new StaticAuthenticationProvider(process.env.accessToken);

let _adminApi: AdminClient = new AdminClient({sdkManager: sdkManager, authenticationProvider: staticAuthenticationProvider});

const accessToken = process.env.accessToken;
const accountId = process.env.accountId;
const adminUserId = process.env.adminUserId;
const projectId = process.env.projectId;



//--------------------------------- Projects --------------------------------------\\


// list projects
async function getProjects() {
    try {
        const projects: Projects = await _adminApi.getProjects(accountId, { region: Region.Us, fields: ["accountId", "name", "country", "updatedAt", "type", "status"], filterClassification: [Classification.Production, Classification.Sample, Classification.Template], filterPlatform: [Platform.Acc], filterProducts: [Products.AccountAdministration, Products.Build, Products.Docs, Products.DesignCollaboration], filterName: "S", filterType: ["Convention Center", "Airport"], filterStatus: [Status.Active], filterUpdatedAt: "2011-06-01T00:00:00.000Z..", filterTextMatch: FilterTextMatch.StartsWith, sort: [SortBy.UpdatedAtAsc], limit: 2, offset: 1 });
        console.log(projects);
    }
    catch (err) {
        console.error(err.message);
    }
}

// fetch project details
async function getProject() {
    try {
        // access-token can optionaly be passed directly to method
        const project: Project = await _adminApi.getProject(projectId, { region: Region.Apac, accessToken: accessToken });
        console.log(project);
    }
    catch (err) {
        console.error(err.message);
    }
}

// update project image
async function postProjectImage() {
    try {
        let buffer = fs.readFileSync(" /path/to/file/abc.jpg");
        const file: File = new File([buffer], "/path/to/file/abc.jpg");

        const response: ProjectPatchResponse = await _adminApi.createProjectImage(projectId, accountId, file);
        console.log(response)
    }
    catch (err) {
        console.error(err.message);
    }
}

// Create a project
async function createProject() {
    try {
        const projectPayload: ProjectPayload = {
            "name": "SDKtest2",
            "type": "Bridge",
            "projectValue": {
                "currency": Currency.Inr,
                "value": 1000
            },
            "classification": Classification.Sample,
            "addressLine1": "123 Main Street",
            "addressLine2": "Suite 2",
            "city": "San Francisco",
            "stateOrProvince": "California",
            "postalCode": "94001",
            "country": "United States",
            "timezone": Timezone.AmericaChicago,
            "constructionType": "New Construction",
            "deliveryMethod": "Unit Price",
            "currentPhase": "Design",
            "platform": Platform.Acc,
            "companyCount": 3
        }
        const response: Project = await _adminApi.createProject(accountId, projectPayload, { adminUserId: adminUserId, region: Region.Us });
        console.log(response)
    }
    catch (err) {
        console.error(err.message);
    }
}


getProjects()
// getProject()
// postProjectImage()
// createProject()



//--------------------------------- Company --------------------------------------\\


// list companies in an account
async function getCompanies() {
    try {
        const response: Array<Company> = await _adminApi.getCompanies(accountId, { region: Region.Us, limit: 20, offset: 0 });
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// fetch company details 
async function getCompany() {
    try {
        const response: Company = await _adminApi.getCompany("<companyId>", accountId);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// fetch company details 
async function searchCompanies() {
    try {
        const response: Array<Company> = await _adminApi.searchCompanies(accountId, { name: "Test Company", trade: "Architecture", operator: "AND", partial: true, sort: "name" });
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// Query all the partner companies in a project
async function getProjectCompany() {
    try {
        const response: Array<Company> = await _adminApi.getProjectCompanies(accountId, projectId);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// create new company
async function createCompany() {
    try {
        const companyPayload: CompanyPayload = {
            "name": "Test Company",
            "trade": Trade.Architecture,
            "address_line_1": "The Fifth Avenue",
            "address_line_2": "#303",
            "city": "New York",
            "postal_code": "10011",
            "state_or_province": "New York",
            "country": "United States",
            "phone": "(634)329-2353",
            "website_url": "http://www.autodesk.com",
            "description": "This is a test company.",
            "erp_id": "c79bf096-5a3e-41a4-aaf8-a771ed329047",
            "tax_id": "413-07-5767"
        }
        const response: Company = await _adminApi.createCompany(accountId, companyPayload, { region: Region.Emea });
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// create new company
async function importCompanies() {
    try {
        const companyPayload: Array<CompanyPayload> = [
            {
                "name": "Test Company",
                "trade": Trade.Architecture,
                "address_line_1": "The Fifth Avenue",
                "address_line_2": "#303",
                "city": "New York",
                "postal_code": "10011",
                "state_or_province": "New York",
                "country": "United States",
                "phone": "(634)329-2353",
                "website_url": "http://www.autodesk.com",
                "description": "This is a test company.",
                "erp_id": "c79bf096-5a3e-41a4-aaf8-a771ed329047",
                "tax_id": "413-07-5767"
            }
        ]
        const response: CompanyImportResponse = await _adminApi.importCompanies(accountId, companyPayload);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// update company
async function updateCompany() {
    try {
        const companyId = "0cc4c32a-6ef9-471a-993e-8776c994d257";
        const companyPatchPayload: CompanyPatchPayload = {
            "trade": Trade.ConcreteCastInPlace,
            "description": "Test company for sdk team",
        }
        const response: Company = await _adminApi.patchCompanyDetails(companyId, accountId, companyPatchPayload);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// update company profile image
async function updateCompanyImage() {
    try {
        let buffer = fs.readFileSync("sdkimg.jpg");
        const file: File = new File([buffer], "sdkimg.jpg");

        const response: Company = await _adminApi.patchCompanyImage("0cc4c32a-6ef9-471a-993e-8776c994d257", accountId, file);
        console.log(response)
    }
    catch (err) {
        console.error(err.message);
    }
}

// getCompanies()
// getCompany()
// searchCompanies()
// getProjectCompany()
// createCompany()
// importCompanies()
// updateCompany()
// updateCompanyImage()



//------------------------------------ User -------------------------------------\\


// fetch account users
async function listUsers() {
    try {
        const response: Array<User> = await _adminApi.getUsers(accountId);
        // const response:Array<User> = await _adminApi.searchUsers(accountId, {region: Region.Us, email: "abc@autodesk.com"});
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// fetch user details
async function getUser() {
    try {
        const response: User = await _adminApi.getUser(accountId, "50cd3099-80d7-4aa4-a7be-c5ea13c25734");
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// create new user
async function createUser() {
    try {
        const userPayload: UserPayload = {
            "email": "john.smith@hmail.com",
            "company_id": "0cc4c32a-6ef9-471a-993e-8776c994d257",
            "nickname": "Johnny",
            "first_name": "John",
            "last_name": "Smith",
            "image_url": "https://images.profile.autodesk.com/default/user_X50.png",
            "address_line_1": "The Fifth Avenue",
            "address_line_2": "#301",
            "city": "shanghai",
            "postal_code": "20000",
            "state_or_province": "Shanghai",
            "country": "China",
            "phone": "1234567",
            "job_title": "software developer 2",
            "industry": "IT",
            "about_me": "Nothing here",
            "company": "Test Company"
        }
        const response: User = await _adminApi.createUser(accountId, userPayload);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// bulk import users to account
async function importUser() {
    try {
        const userPayload: Array<UserPayload> = [
            {
                "email": "john.smith@hmail.com",
                "company_id": "0cc4c32a-6ef9-471a-993e-8776c994d257",
                "nickname": "Johnny",
                "first_name": "John",
                "last_name": "Smith",
                "image_url": "https://images.profile.autodesk.com/default/user_X50.png",
                "company": "Test Company"
            },
            {
                "email": "harry.potter@hmail.com",
            }
        ]
        const response: UserImportResponse = await _adminApi.importUsers(accountId, userPayload);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// update user details
async function updateUser() {
    try {
        const userPatchPayload: UserPatchPayload = {
            "status": "active"
        }
        const response: User = await _adminApi.patchUserDetails(accountId, "50cd3099-80d7-4aa4-a7be-c5ea13c25734", userPatchPayload);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}


// listUsers()
// getUser()
// createUser()
// importUser()
// updateUser()


//---------------------------------- Project User -------------------------------------\\


// fetch users in the specified project
async function getProjectUsers() {
    try {
        const response: ProjectUsers = await _adminApi.getProjectUsers(projectId);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// fetch specified user in the project
async function getProjectUser() {
    try {
        const response: ProjectUser = await _adminApi.getProjectUser(projectId, "7e7c31fd-9e9d-4c92-8e73-aadecfd6a39b", { region: Region.Us });
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// Assign user to the specified project
async function assignProjectUser() {
    try {
        let projectUserPayload: ProjectUserPayload = {
            "email": "harry.potter@hmail.com",
            "products": [
                {
                    "key": ProductKeys.ProjectAdministration,
                    "access": ProductAccess.Administrator
                }
            ]
        }
        const response: ProjectUserResponse = await _adminApi.assignProjectUser(projectId, projectUserPayload, { region: Region.Us, adminUserId: adminUserId });
        console.log(response)
    }
    catch (err) {
        console.error(err.message);
    }
}

// import users to the specified project
async function importProjectUsers() {
    try {
        let projectUsersImportPayload: ProjectUsersImportPayload = {
            "users": [
                {
                    "email": "harry.potter@hmail.com",
                    "products": [
                        {
                            "key": ProductKeys.ProjectAdministration,
                            "access": ProductAccess.Administrator
                        }
                    ]
                }
            ]
        }
        const response: ProjectUsersImportResponse = await _adminApi.importProjectUsers(projectId, projectUsersImportPayload, { region: Region.Us, adminUserId: adminUserId });
        console.log(response)
    }
    catch (err) {
        console.error(err.message);
    }
}

// Update specified user's details in a project
async function updateProjectUser() {
    try {
        let projectUsersUpdatePayload: ProjectUsersUpdatePayload = {
            "companyId": "0cc4c32a-6ef9-471a-993e-8776c994d257",
            "roleIds": [
                "8da864e0-8a8c-424f-8a90-338cc6ea09d7",
                "d52d31ee-00f2-43cd-ae11-32aba34490df"
            ],
            "products": [
                {
                    "key": ProductKeys.DesignCollaboration,
                    "access": ProductAccess.Administrator
                },
                {
                    "key": ProductKeys.ModelCoordination,
                    "access": ProductAccess.Administrator
                },
                {
                    "key": ProductKeys.AutoSpecs,
                    "access": ProductAccess.Administrator
                },
                {
                    "key": ProductKeys.CapitalPlanning,
                    "access": ProductAccess.None
                },
                {
                    "key": ProductKeys.Insight,
                    "access": ProductAccess.Administrator
                }
            ]
        }
        const response: ProjectUserResponse = await _adminApi.updateProjectUser(projectId, "4ca99e9a-cce9-40a1-abb7-d69a1fd79173", projectUsersUpdatePayload, { region: Region.Us, adminUserId: adminUserId });
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// Remove the specified user from a project
async function deleteProjectUser() {
    try {
        const response: void = await _adminApi.removeProjectUser(projectId, "4ca99e9a-cce9-40a1-abb7-d69a1fd79173", { region: Region.Us, adminUserId: adminUserId });
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}


// getProjectUsers()
// getProjectUser()
// assignProjectUser()
// importProjectUsers()
// updateProjectUser()
// deleteProjectUser()


//---------------------------------- Business Units -------------------------------------\\


// fetch all the business units in a specific account
async function getBusinessUnits() {
    try {
        const response: BusinessUnitsResponse = await _adminApi.getBusinessUnits(accountId);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// Create business units of a specific account
async function putBusinessUnits() {
    try {
        let businessUnitsRequestPyload: BusinessUnitsRequestPayload = {
            "business_units": [
                {
                    "name": "test unit",
                    "description": "testing business_units API"
                }
            ]
        }
        const response: BusinessUnitsResponse = await _adminApi.createBusinessUnits(accountId, businessUnitsRequestPyload, { region: Region.Us });
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// getBusinessUnits()
// putBusinessUnits()