

/**
 * Contains the details of a newly created service account
 * @export
 * @interface ServiceAccount
 */
export interface ServiceAccount {
    /**
     * The Autodesk ID of the service account
     * @type {string}
     * @memberof ServiceAccount
     */
    'serviceAccountId'?: string;
    /**
     * The email address of the service account. It is of the form <serviceAccountName>@<clientID>.adskserviceaccount.autodesk.com.
     * @type {string}
     * @memberof ServiceAccount
     */
    'email'?: string;
}

