export interface IAuthenticationProvider {
 getAccessToken(scopes?: string[]): Promise<string>;
}

