import { AdminClient, BusinessUnitsPayload, BusinessUnits, Classification, Company, CompanyImport, CompanyPatchPayload, CompanyPayload, Currency, FilterTextMatch, Platform, ProductAccess, ProductKeys, Products, Project, ProjectPatch, ProjectPayload, ProjectUser, ProjectUserPayload, ProjectUserDetails, ProjectUsersPage, ProjectUsersImportPayload, ProjectUsersImport, ProjectUsersUpdatePayload, ProjectsPage, Region, SortBy, Status, Timezone, Trade, User, UserImport, UserPatchPayload, UserPayload, UserProjectsPage, UserProjectFields, UserProjectSortBy, FilterUserProjectsAccessLevels, CompaniesPage, CompanyOrFilters, FilterCompanySort, FilterCompanyFields, ProductsPage, RolesPage, FilterProductKey, FilterProductField, FilterProductSort, FilterRoleStatus, FilterRoleField, FilterRoleSort } from '@aps_sdk/construction-account-admin';
import { Logger, LogLevel, SdkManager, SdkManagerBuilder, StaticAuthenticationProvider } from "@aps_sdk/autodesk-sdkmanager"
import * as fs from "fs";
import 'dotenv/config';

// SdkManager can be optionally initialised to add custom logger etc.
const sdkManager: SdkManager = SdkManagerBuilder.create().addLogger(new Logger(LogLevel.INFO)).build();

const twoLeggedToken = process.env.twoLeggedToken;
const threeLeggedToken = process.env.threeLeggedToken;
const accessToken = threeLeggedToken;

//Initialise Auth Provider. If not provided, access tokens will need to be passed to each method.
const staticAuthenticationProvider = new StaticAuthenticationProvider(accessToken);

let _adminApi: AdminClient = new AdminClient({ sdkManager: sdkManager, authenticationProvider: staticAuthenticationProvider });


const accountId = process.env.accountId;
const adminUserId = process.env.adminUserId;
const projectId = process.env.projectId;
const accountUserId = process.env.accountUserId;
const companyId = process.env.companyId;


// list projects
async function getProjects() {
    try {
        const projects: ProjectsPage = await _adminApi.getProjects(accountId, { region: Region.Us, fields: ["accountId", "name", "country", "updatedAt", "type", "status"], filterClassification: [Classification.Production, Classification.Sample, Classification.Template], filterPlatform: [Platform.Acc], filterProducts: [Products.AccountAdministration, Products.Build, Products.Docs, Products.DesignCollaboration], filterName: "S", filterType: ["Convention Center", "Airport"], filterStatus: [Status.Active], filterUpdatedAt: "2011-06-01T00:00:00.000Z..", filterTextMatch: FilterTextMatch.StartsWith, sort: [SortBy.UpdatedAtAsc], limit: 2, offset: 1 });
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
        const project: Project = await _adminApi.getProject(projectId, { region: Region.Aus, accessToken: accessToken });
        console.log(project);
    }
    catch (err) {
        console.error(err.message);
    }
}

// update project image
async function postProjectImage() {
    try {
        let buffer = fs.readFileSync("/path/to/file/abc.jpg");
        const file: File = new File([buffer], "/path/to/file/abc.jpg");

        const response: ProjectPatch = await _adminApi.createProjectImage(projectId, accountId, file);
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
            "name": "SDKtestThree",
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


// getProjects()
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

async function getCompaniesWithPagination() {
    try{
        const response: CompaniesPage = await _adminApi.getCompaniesWithPagination(accountId, 
            { 
                region: Region.Us,
                filterName: "New Test Company",
                filterTrade: "Architecture",
                filterErpId: "c79bf096-5a3e-41a4-aaf8-a771ed329047",
                filterTaxId: "413-07-5767",
                filterUpdatedAt: "2025-05-19T00:00:00.000Z..",
                orFilters: [
                    CompanyOrFilters.Name,
                    CompanyOrFilters.TaxId,
                ],
                filterTextMatch: FilterTextMatch.EndsWith,
                sort: [
                    FilterCompanySort.UpdatedAtAsc
                ],
                fields: [
                    FilterCompanyFields.Name,
                    FilterCompanyFields.Trade,
                    FilterCompanyFields.UpdatedAt,
                ],
                limit: 10, 
                offset: 2 
            }
        );
        console.log(response);
    }catch (err){
        console.error(err.message);
    }
}

// fetch company details 
async function getCompany() {
    try {
        const response: Company = await _adminApi.getCompany(companyId, accountId);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// fetch company details 
async function searchCompanies() {
    try {
        const response: Array<Company> = await _adminApi.searchCompanies(accountId, { name: "Sample Company - 1", trade: "Concrete", operator: "AND", partial: true, sort: "name" });
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
            "name": "New Test Company",
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
        const response: Company = await _adminApi.createCompany(accountId, companyPayload, { region: Region.Us });
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
                "name": "New Test Company Two",
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
        const response: CompanyImport = await _adminApi.importCompanies(accountId, companyPayload);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// update company
async function updateCompany() {
    try {
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
        let buffer = fs.readFileSync("/path/to/file/abc.jpg");
        const file: File = new File([buffer], "/path/to/file/abc.jpg");

        const response: Company = await _adminApi.patchCompanyImage(companyId, accountId, file);
        console.log(response)
    }
    catch (err) {
        console.error(err.message);
    }
}

// getCompanies()
// getCompaniesWithPagination()
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
        const response: User = await _adminApi.getUser(accountId, accountUserId);
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
            "email": "johndoe.smith@hmail.com",
            "company_id": companyId,
            "nickname": "Johnnyg",
            "first_name": "Johnte",
            "last_name": "Smitho",
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
            "company": "New Test Company Two"
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
                "email": "johndoetwo.smith@hmail.com",
                "company_id": companyId,
                "nickname": "Johnnyg",
                "first_name": "Johnte",
                "last_name": "Smitho",
                "image_url": "https://images.profile.autodesk.com/default/user_X50.png",
                "company": "New Test Company Two"
            },
            {
                "email": "harrydoe.potter@hmail.com",
            }
        ]
        const response: UserImport = await _adminApi.importUsers(accountId, userPayload);
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
        const response: User = await _adminApi.patchUserDetails(accountId, accountUserId, userPatchPayload);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}


// Get user products
async function getUserProducts() {
    try {
        const response: ProductsPage = await _adminApi.getUserProducts(accountId, accountUserId, {
            region: Region.Us,
            filterProjectId: ["1574261a-4095-400c-8a88-d4aeab1a1fa4"],
            filterKey: [FilterProductKey.Docs, FilterProductKey.Build],
            fields: [FilterProductField.Name, FilterProductField.Icon],
            sort: [FilterProductSort.NameDesc],
            limit: 2,
            offset: 2
        });
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// Get user roles
async function getUserRoles() {
    try {
        const response: RolesPage = await _adminApi.getUserRoles(accountId, accountUserId, {
            region: Region.Us,
            filterProjectId: ["6cbd9e21-e4b5-425c-a448-c29fea20ca5e"],
            filterStatus: [FilterRoleStatus.Active],
            filterName: "Document Manager",
            filterTextMatch: FilterTextMatch.Equals,
            fields: [FilterRoleField.Name, FilterRoleField.Status],
            sort: [FilterRoleSort.NameDesc],
            limit: 2,
            offset: 2
        });
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
getUserProducts()
// getUserRoles()


//---------------------------------- Project User -------------------------------------\\


// fetch users in the specified project
async function getProjectUsers() {
    try {
        const response: ProjectUsersPage = await _adminApi.getProjectUsers(projectId);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// fetch specified user in the project
async function getProjectUser() {
    try {
        const response: ProjectUser = await _adminApi.getProjectUser(projectId, adminUserId, { region: Region.Us });
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
            "email": "johndoetwo.smith@hmail.com",
            "products": [
                {
                    "key": ProductKeys.ProjectAdministration,
                    "access": ProductAccess.Administrator
                }
            ]
        }
        const response: ProjectUserDetails = await _adminApi.assignProjectUser(projectId, projectUserPayload, { region: Region.Us, adminUserId: adminUserId });
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
                    "email": "harryptp.potter@hmail.com",
                    "products": [
                        {
                            "key": ProductKeys.ProjectAdministration,
                            "access": ProductAccess.Administrator
                        }
                    ]
                }
            ]
        }
        const response: ProjectUsersImport = await _adminApi.importProjectUsers(projectId, projectUsersImportPayload, { region: Region.Us, adminUserId: adminUserId });
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
            "companyId": companyId,
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
        const response: ProjectUserDetails = await _adminApi.updateProjectUser(projectId, accountUserId, projectUsersUpdatePayload, { region: Region.Us, adminUserId: adminUserId });
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// Remove the specified user from a project
async function deleteProjectUser() {
    try {
        const response: void = await _adminApi.removeProjectUser(projectId, accountUserId, { region: Region.Us, adminUserId: adminUserId });
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
        const response: BusinessUnits = await _adminApi.getBusinessUnits(accountId);
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// Create business units of a specific account
async function putBusinessUnits() {
    try {
        let businessUnitsRequestPyload: BusinessUnitsPayload = {
            "business_units": [
                {
                    "name": "test unit",
                    "description": "testing business_units API"
                }
            ]
        }
        const response: BusinessUnits = await _adminApi.createBusinessUnits(accountId, businessUnitsRequestPyload, { region: Region.Us });
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
}

// getBusinessUnits()
// putBusinessUnits()

async function getUserProjects() {
    try {
        // Define filters
        const filterId = ["828e49fe-8a96-4eed-bec1-4a617bda6b09", "5e84db8f-b469-41a8-ba41-090d37454be2"];
        const fields = [
            UserProjectFields.AccessLevels,
            UserProjectFields.AccountId,
            UserProjectFields.AddressLine1,
            UserProjectFields.AddressLine2,
            UserProjectFields.City,
            UserProjectFields.ConstructionType,
            UserProjectFields.Country,
            UserProjectFields.CreatedAt,
            UserProjectFields.Classification,
            UserProjectFields.DeliveryMethod,
            UserProjectFields.EndDate,
            UserProjectFields.ImageUrl,
            UserProjectFields.JobNumber,
            UserProjectFields.Latitude,
            UserProjectFields.Longitude,
            UserProjectFields.Name,
            UserProjectFields.Platform,
            UserProjectFields.PostalCode,
            UserProjectFields.ProjectValue,
            UserProjectFields.SheetCount,
            UserProjectFields.StartDate,
            UserProjectFields.StateOrProvince,
            UserProjectFields.Status,
            UserProjectFields.ThumbnailImageUrl,
            UserProjectFields.Timezone,
            UserProjectFields.Type,
            UserProjectFields.UpdatedAt,
            UserProjectFields.ContractType,
            UserProjectFields.CurrentPhase
        ];
        const filterClassification = [Classification.Production];
        const filterName = "SDKTest";
        const filterPlatform = [Platform.Acc];
        // Status.Pending, Status.Archived, Status.Suspended
        const filterStatus = [Status.Active];
        const filterType = ["Airport", "Bridge", "Office"];
        const filterJobNumber = "JOB-001";
        const filterUpdatedAt = "2023-03-02T00:00:00.000Z..2023-03-03T23:59:59.999Z";
        const filterAccessLevels = [FilterUserProjectsAccessLevels.ProjectAdmin];
        const filterTextMatch = FilterTextMatch.Contains;

        // Define sort parameters
        const sort = [UserProjectSortBy.NameDesc];

        // Define pagination
        const limit = 20;
        const offset = 20;

        const response: ProjectsPage = await _adminApi.getUserProjects(accountId, adminUserId, 
            {
                filterId: filterId,
                fields: fields,
                filterClassification: filterClassification,
                filterName: filterName,
                filterPlatform: filterPlatform,
                filterStatus: filterStatus,
                filterType: filterType,
                filterJobNumber: filterJobNumber,
                filterUpdatedAt: filterUpdatedAt,
                filterAccessLevels: filterAccessLevels,
                filterTextMatch: filterTextMatch,
                sort: sort,
                limit: limit,
                offset: offset,
            }
        );

        for (const project of response.results) {
            console.log("Project ID:", project.id);
            console.log("Project Name:", project.name);
            console.log("Project Status:", project.status);
            console.log("Project Type:", project.type);
            console.log("Project Platform:", project.platform);
            console.log("Project Classification:", project.classification);
            console.log("Project Start Date:", project.startDate);
            console.log("Project End Date:", project.endDate);
            console.log("Project Job Number:", project.jobNumber);
            console.log("Project Construction Type:", project.constructionType);
            console.log("Project Delivery Method:", project.deliveryMethod);
            console.log("Project Contract Type:", project.contractType);
            console.log("Project Current Phase:", project.currentPhase);
            console.log("Project Created At:", project.createdAt);
            console.log("Project Updated At:", project.updatedAt);
            console.log("-----------------------------------");
        }
    }
    catch (err) {
        console.error(err.message);
    }
}

// getUserProjects()