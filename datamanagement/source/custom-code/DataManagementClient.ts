import { ApsServiceRequestConfig, BaseClient, IAuthenticationProvider, SdkManager, SdkManagerBuilder } from "@aps_sdk/autodesk-sdkmanager";
import { CommandsApi, HubsApi, ItemsApi, ProjectsApi, FoldersApi, VersionsApi } from "../api";
import { Hub, Hubs } from "../model";


export class DataManagementClient extends BaseClient {
    public commandsApi: CommandsApi;
    public foldersApi: FoldersApi;
    public hubsApi: HubsApi;
    public itemsApi: ItemsApi;
    public projectsApi: ProjectsApi;
    public versionsApi: VersionsApi;

    constructor(optionalArgs?: {
        sdkManager?: SdkManager;
        authenticationProvider?: IAuthenticationProvider;
    }) {
        super(optionalArgs?.authenticationProvider);
        if (!optionalArgs?.sdkManager) {
            (optionalArgs ??= {}).sdkManager = SdkManagerBuilder.create().build();
        }
        this.commandsApi = new CommandsApi(optionalArgs.sdkManager);
        this.foldersApi = new FoldersApi(optionalArgs.sdkManager);
        this.hubsApi = new HubsApi(optionalArgs.sdkManager);
        this.itemsApi = new ItemsApi(optionalArgs.sdkManager);
        this.projectsApi = new ProjectsApi(optionalArgs.sdkManager);
        this.versionsApi = new VersionsApi(optionalArgs.sdkManager);
    }


    public async getHub(hubId: string, optionalArgs?: { xUserId?: string, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Hub> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hubsApi.getHub(optionalArgs?.accessToken, hubId, optionalArgs?.xUserId, optionalArgs?.options);
        return response.content;
    }
    public async getHubs(optionalArgs?: { xUserId?: string, filterId?: Array<string>, filterName?: Array<string>, filterExtensionType?: Array<string>, accessToken?: string, options?: ApsServiceRequestConfig }): Promise<Hubs> {
        if (!optionalArgs?.accessToken && !this.authenticationProvider) {
            throw new Error("Please provide a valid access token or an authentication provider");
        }
        else if (!optionalArgs?.accessToken) {
            (optionalArgs ??= {}).accessToken = await this.authenticationProvider.getAccessToken();
        }
        const response = await this.hubsApi.getHubs(optionalArgs?.accessToken, optionalArgs?.xUserId, optionalArgs?.filterId, optionalArgs?.filterName, optionalArgs?.filterExtensionType, optionalArgs?.options);
        return response.content;
    }

}