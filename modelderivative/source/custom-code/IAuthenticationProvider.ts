export interface IAuthenticationProvider {
    getAccessToken(): Promise<string>;
}

