import { IAuthenticationProvider } from './IAuthenticationProvider';

export class StaticAuthenticationProvider implements IAuthenticationProvider {
    private _accessToken: string;

    constructor(accessToken: string) {
        this._accessToken = accessToken;
    }

    public async getAccessToken(scopes?: string[]): Promise<string> {
            return this._accessToken;
    }

}