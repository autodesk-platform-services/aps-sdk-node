

/**
 * 
 * @export
 * @interface ServiceAccountKeyDetails
 */
export interface ServiceAccountKeyDetails {
    /**
     * The ID of the private key
     * @type {string}
     * @memberof ServiceAccountKeyDetails
     */
    'kid'?: string;
    /**
     * The status of the key
     * @type {string}
     * @memberof ServiceAccountKeyDetails
     */
    'status'?: ServiceAccountKeyDetailsStatusEnum;
    /**
     * The creation time of the key, in UTC format
     * @type {string}
     * @memberof ServiceAccountKeyDetails
     */
    'createdAt'?: string;
    /**
     * This is the most recent time an access token was generated for this service account key, in UTC format
     * @type {string}
     * @memberof ServiceAccountKeyDetails
     */
    'accessedAt'?: string;
}

export const ServiceAccountKeyDetailsStatusEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED'
} as const;

export type ServiceAccountKeyDetailsStatusEnum = typeof ServiceAccountKeyDetailsStatusEnum[keyof typeof ServiceAccountKeyDetailsStatusEnum];


