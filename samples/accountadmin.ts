import {AdminClient, BusinessUnitsRequestPyload, BusinessUnitsResponse, Classification, Company, CompanyImportResponse, CompanyPatchPayload, CompanyPayload, Currency, FilterTextMatch, Platform, ProductAccess, ProductKeys, Products, Project, ProjectPatchResponse, ProjectPayload, ProjectUser, ProjectUserPayload, ProjectUserResponse, ProjectUsers, ProjectUsersImportPayload, ProjectUsersImportResponse, ProjectUsersUpdatePayload, Projects, Region, SortBy, Status, Timezone, Trade, User, UserImportResponse, UserPatchPayload, UserPayload, UserStatus} from '@aps_sdk/account-admin';
import {SDKManager, SdkManagerBuilder} from "@aps_sdk/autodesk-sdkmanager"
import * as fs from "fs";


const sdkmanager: SDKManager = SdkManagerBuilder
    .Create() 
    .build();

let _adminApi :AdminClient = new AdminClient(sdkmanager);

const token = "<token>";

const accountId = "<accountId>";
const adminUserId = "<adminUserId>";



//--------------------------------- Projects --------------------------------------\\


// list projects
async function getProjects() {
    const projects:Projects = await _adminApi.GetProjectsAsync(token, accountId, Region.Us, ["accountId", "name", "country", "updatedAt", "type", "status"],[Classification.Production, Classification.Sample, Classification.Template],[Platform.Acc], [Products.AccountAdministration, Products.Build, Products.Docs, Products.DesignCollaboration], "S", ["Convention Center", "Airport"], [Status.Active], undefined, undefined, "2011-06-01T00:00:00.000Z..", FilterTextMatch.StartsWith, [SortBy.UpdatedAtAsc], 2, 2);
    console.log(projects);
}

// fetch project details
async function getProject() {
    const projectId = "c2522227-fd2e-4944-913b-3709e2d9f96a";
    const project:Project = await _adminApi.GetProjectAsync(token, projectId, Region.Us);
    console.log(project);
}

// update project image
async function postProjectImage() {
    let buffer = fs.readFileSync("sdkimg.jpg");
    const file:File = new File([buffer],"sdkimg.jpg");
    
    const response:ProjectPatchResponse = await _adminApi.CreateProjectImageAsync(token, "c2522227-fd2e-4944-913b-3709e2d9f96a", "489c5e7a-c6c0-4212-81f3-3529a621210b", file);
    console.log(response)
}

// Create a project
async function createProject() {
    const projectPayload:ProjectPayload = {
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
    const response:Project = await _adminApi.CreateProjectAsync(token, accountId, projectPayload, Region.Us, adminUserId);
    console.log(response)
}


// getProjects()
// getProject()
// postProjectImage()
// createProject()



//--------------------------------- Company --------------------------------------\\


// list companies in an account
async function getCompanies() {
    const response:Array<Company> = await _adminApi.getCompaniesAsync(token, accountId, Region.Us, 20, 0, undefined, "trade");
    console.log(response);
}

// fetch company details 
async function getCompany() {
    const response:Company = await _adminApi.getCompanyAsync(token, "5ffac16f-4109-42b3-8e3f-159ba2638413", accountId, Region.Us);
    console.log(response);
}

// fetch company details 
async function searchCompanies() {
    const response:Array<Company> = await _adminApi.searchCompaniesAsync(token, accountId, Region.Us, "Test Company", "Architecture", "AND", true, 5, 0, "name");
    console.log(response);
}

// Query all the partner companies in a project
async function getProjectCompany() {
    const response:Array<Company> = await _adminApi.getProjectCompaniesAsync(token, accountId, "c2522227-fd2e-4944-913b-3709e2d9f96a");
    console.log(response);
}

// create new company
async function createCompany() {
    const companyPayload:CompanyPayload = {
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
        "description":"This is a test company.",
        "erp_id":"c79bf096-5a3e-41a4-aaf8-a771ed329047",
        "tax_id":"413-07-5767"
    }
    const response:Company = await _adminApi.createCompanyAsync(token, accountId, companyPayload, Region.Us);
    console.log(response);
}

// create new company
async function importCompanies() {
    const companyPayload:Array<CompanyPayload> = [
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
            "description":"This is a test company.",
            "erp_id":"c79bf096-5a3e-41a4-aaf8-a771ed329047",
            "tax_id":"413-07-5767"
        }
    ]
    const response:CompanyImportResponse = await _adminApi.importCompaniesAsync(token, accountId, companyPayload, Region.Us);
    console.log(response);
}

// update company
async function updateCompany(){
    const companyId = "0cc4c32a-6ef9-471a-993e-8776c994d257";
    const companyPatchPayload:CompanyPatchPayload = {
        "trade": Trade.ConcreteCastInPlace,
        "description":"Test company for sdk team",
    }
    const response:Company = await _adminApi.patchCompanyDetailsAsync(token, companyId, accountId, undefined, companyPatchPayload);
    console.log(response);
}

// update company profile image
async function updateCompanyImage() {
    let buffer = fs.readFileSync("sdkimg.jpg");
    const file:File = new File([buffer],"sdkimg.jpg");
    
    const response:Company = await _adminApi.patchCompanyImageAsync(token, "0cc4c32a-6ef9-471a-993e-8776c994d257", accountId, file, Region.Emea);
    console.log(response)
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
    const response:Array<User> = await _adminApi.getUsersAsync(token, accountId, Region.Us);
    // const response:Array<User> = await _adminApi.searchUsersAsync(token, accountId, Region.Us, undefined, "nishchhal@autodesk.com");
    console.log(response);
}

// fetch user details
async function getUser() {
    const response:User = await _adminApi.getUserAsync(token, accountId, "50cd3099-80d7-4aa4-a7be-c5ea13c25734", Region.Us);
    console.log(response);
}

// create new user
async function createUser() {
    const userPayload:UserPayload = {
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
    const response:User = await _adminApi.createUserAsync(token, accountId, userPayload, Region.Us);
    console.log(response);
}

// bulk import users to account
async function importUser() {
    const userPayload:Array<UserPayload> = [
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
    const response:UserImportResponse = await _adminApi.importUsersAsync(token, accountId, userPayload, Region.Us);
    console.log(response);
}

// update user details
async function updateUser() {
    const userPatchPayload:UserPatchPayload = {
        "status": "active"
    }
    const response:User = await _adminApi.patchUserDetailsAsync(token, accountId, "50cd3099-80d7-4aa4-a7be-c5ea13c25734", userPatchPayload, Region.Us);
    console.log(response);
}


// listUsers()
// getUser()
// createUser()
// importUser()
// updateUser()


//---------------------------------- Project User -------------------------------------\\


// fetch users in the specified project
async function getProjectUsers() {
    const response:ProjectUsers = await _adminApi.getProjectUsersAsync(token, "c2522227-fd2e-4944-913b-3709e2d9f96a", Region.Us);
    console.log(response);
}

// fetch specified user in the project
async function getProjectUser() {
    const response:ProjectUser = await _adminApi.getProjectUserAsync(token, "c2522227-fd2e-4944-913b-3709e2d9f96a", "7e7c31fd-9e9d-4c92-8e73-aadecfd6a39b", Region.Us);
    console.log(response);
}

// Assign user to the specified project
async function assignProjectUser() {
    let projectUserPayload:ProjectUserPayload = {
        "email": "harry.potter@hmail.com",
        "products": [
            {
                "key": ProductKeys.ProjectAdministration,
                "access": ProductAccess.Administrator
            }
        ]
    }
    const response:ProjectUserResponse = await _adminApi.assignProjectUserAsync(token, "c2522227-fd2e-4944-913b-3709e2d9f96a", projectUserPayload, Region.Us, adminUserId);
    console.log(response)
}

// import users to the specified project
async function importProjectUsers() {
    let projectUsersImportPayload:ProjectUsersImportPayload = {
        "users":[
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
    const response:ProjectUsersImportResponse = await _adminApi.importProjectUsersAsync(token, "c2522227-fd2e-4944-913b-3709e2d9f96a", projectUsersImportPayload, Region.Us, adminUserId);
    console.log(response)
}

// Update specified user's details in a project
async function updateProjectUser() {
    let projectUsersUpdatePayload:ProjectUsersUpdatePayload = {
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
    const response:ProjectUserResponse = await _adminApi.updateProjectUserAsync(token, "c2522227-fd2e-4944-913b-3709e2d9f96a", "4ca99e9a-cce9-40a1-abb7-d69a1fd79173", projectUsersUpdatePayload, Region.Us, adminUserId);
    console.log(response);
}

// Remove the specified user from a project
async function deleteProjectUser() {
    const response:void = await _adminApi.removeProjectUserAsync(token, "c2522227-fd2e-4944-913b-3709e2d9f96a", "4ca99e9a-cce9-40a1-abb7-d69a1fd79173", Region.Us, adminUserId);
    console.log(response);
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
    const response:BusinessUnitsResponse = await _adminApi.getBusinessUnitsAsync(token, accountId, Region.Us);
    console.log(response);
}

// Create business units of a specific account
async function putBusinessUnits() {
    let businessUnitsRequestPyload:BusinessUnitsRequestPyload = {
        "business_units": [
            {
                "name": "test unit",
                "description": "testing business_units API"
            }
        ]
    }
    const response:BusinessUnitsResponse = await _adminApi.createBusinessUnitsAsync(token, accountId, businessUnitsRequestPyload, Region.Us);
    console.log(response);
}

// getBusinessUnits()
// putBusinessUnits()