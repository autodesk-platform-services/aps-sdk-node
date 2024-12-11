export interface AuthClient {
  getAccessToken(scopes: string): string;
  getUpdatedAccessToken(): string;
}
