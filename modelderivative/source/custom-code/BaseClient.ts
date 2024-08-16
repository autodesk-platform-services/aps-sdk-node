import { IAuthenticationProvider } from './IAuthenticationProvider';

export class BaseClient {
    private _authenticationProvider: IAuthenticationProvider;

    public get authenticationProvider(): IAuthenticationProvider {
        return this._authenticationProvider;
    }

    public set authenticationProvider(value: IAuthenticationProvider) {
        this._authenticationProvider = value;
    }

    constructor(authenticationProvider?: IAuthenticationProvider) {
        if (authenticationProvider) {
            this._authenticationProvider = authenticationProvider;
         } 
    }
}

