## secure-service-account@1.0.0

Operations to manage Service accounts and keys.   A service account is an identity that an application can use to make requests to other services without a user authorizing the requests. A service account is identified by a unique email address and has an Autodesk ID.  A service account has one or more private keys. A private key is generated through an asymmetric cryptography algorithm; the paired public key is stored by Autodesk Identity.  An application can use a service account\'s private key to generate a JWT token. The JWT token provides proof of implicit authentication and authorization for this service account; an application can exchange it for a three-legged access token for the service service.
This is TypeScript client library for secure-service-account

## Building the SDK
1. Install dependencies
```
npm install
```
2. Format code using prettier
```
npm run prettier-format
```
3. Build the sdk
```
npm run build
```
