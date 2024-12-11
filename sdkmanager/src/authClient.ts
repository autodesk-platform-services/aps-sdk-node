import { AuthClient as IAuthClient } from './iAuthClient';

export default class AuthClient implements IAuthClient {
  getUpdatedAccessToken(): string {
    throw new Error('Method not implemented.');
  }
  getAccessToken(scopes: string): string {
    throw new Error('Method not implemented.');
  }
}
