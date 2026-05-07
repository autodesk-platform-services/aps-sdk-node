

/**
 * Contains details of a service account
 * @export
 * @interface ServiceAccountDetails
 */
export interface ServiceAccountDetails {
    /**
     * The Autodesk ID of the service account
     * @type {string}
     * @memberof ServiceAccountDetails
     */
    'serviceAccountId'?: string;
    /**
     * The email address of the service account
     * @type {string}
     * @memberof ServiceAccountDetails
     */
    'email'?: string;
    /**
     * The client ID used to create the service account
     * @type {string}
     * @memberof ServiceAccountDetails
     */
    'createdBy'?: string;
    /**
     * The status of the service account
     * @type {string}
     * @memberof ServiceAccountDetails
     */
    'status'?: ServiceAccountDetailsStatusEnum;
    /**
     * The creation time of the service account
     * @type {string}
     * @memberof ServiceAccountDetails
     */
    'createdAt'?: string;
    /**
     * This is the most recent time an access token was generated for this service account
     * @type {string}
     * @memberof ServiceAccountDetails
     */
    'accessedAt'?: string;
    /**
     * The expiration time of the service account
     * @type {string}
     * @memberof ServiceAccountDetails
     */
    'expiresAt'?: string;
}

export const ServiceAccountDetailsStatusEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED',
    Deactivated: 'DEACTIVATED'
} as const;

export type ServiceAccountDetailsStatusEnum = typeof ServiceAccountDetailsStatusEnum[keyof typeof ServiceAccountDetailsStatusEnum];


