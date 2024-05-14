/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface CreateBucketsPayloadAllow
 */
export interface CreateBucketsPayloadAllow {
    /**
     * The Client ID of the application.
     * @type {string}
     * @memberof CreateBucketsPayloadAllow
     */
    'authId': string;
    /**
     * Specifies the level of permission the application has. Required when ``allow`` is specified. Possible values are:   - ``full`` - Unrestricted access to objects within the bucket. - ``read_only`` - Read only access to the objects within the bucket. Modification or deletion of objects is not allowed. 
     * @type {string}
     * @memberof CreateBucketsPayloadAllow
     */
    'access': CreateBucketsPayloadAllowAccessEnum;
}

export const CreateBucketsPayloadAllowAccessEnum = {
    Full: 'full',
    Read: 'read'
} as const;

export type CreateBucketsPayloadAllowAccessEnum = typeof CreateBucketsPayloadAllowAccessEnum[keyof typeof CreateBucketsPayloadAllowAccessEnum];


