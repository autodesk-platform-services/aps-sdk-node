import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { Scope } from '../model';

/**
 * Utility class for JWT operations related to Secure Service Account
 */
export class JwtUtils {
    /**
     * Generate a signed JWT assertion for service account authentication
     * @param clientId - The client ID that owns the service account
     * @param serviceAccountId - The service account ID
     * @param privateKey - The private key in PEM format
     * @param keyId - The key ID (kid)
     * @param scopes - Array of scopes to request
     * @param lifetimeSeconds - Token lifetime in seconds (max 300 = 5 minutes)
     * @returns Signed JWT assertion
     */
    public static generateJwtAssertion(
        clientId: string,
        serviceAccountId: string,
        privateKey: string,
        keyId: string,
        scopes: Array<Scope>,
        lifetimeSeconds: number = 300
    ): string {
        if (!clientId) {
            throw new Error('clientId is required');
        }
        if (!serviceAccountId) {
            throw new Error('serviceAccountId is required');
        }
        if (!privateKey) {
            throw new Error('privateKey is required');
        }
        if (!keyId) {
            throw new Error('keyId is required');
        }
        if (lifetimeSeconds < 0 || lifetimeSeconds > 300) {
            throw new Error('lifetimeSeconds must be between 0 and 300 seconds (5 minutes)');
        }

        const currentTime = Math.floor(Date.now() / 1000);
        const expirationTime = currentTime + lifetimeSeconds;

        const jwtId = crypto.randomBytes(16).toString('hex');

        // JWT payload
        const payload = {
            iss: clientId,                    // Issuer: Client ID
            sub: serviceAccountId,            // Subject: Service Account ID
            aud: "https://developer.api.autodesk.com/authentication/v2/token", // Audience
            exp: expirationTime,              // Expiration time
            iat: currentTime,                 // Issued at
            nbf: currentTime,                 // Not before
            jti: jwtId,                       // JWT ID (unique identifier)
            scope: scopes                     // Requested scopes
        };

        // JWT header
        const header = {
            kid: keyId,
            alg: 'RS256' as const,
            typ: 'JWT'
        };

        return jwt.sign(payload, privateKey, {
            algorithm: 'RS256',
            header: header
        });
    }

}