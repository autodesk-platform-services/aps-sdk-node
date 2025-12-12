

/**
 * The request body for create service account
 * @export
 * @interface CreateServiceAccountPayload
 */
export interface CreateServiceAccountPayload {
    /**
     * The name of the service account. This name must be between 5 and 100 characters, and can contain alphanumeric characters and dashes, and include at least one alphanumeric character.
     * @type {string}
     * @memberof CreateServiceAccountPayload
     */
    'name': string;
    /**
     * The first name of the service account. For display purposes only. Must meet the following conditions: Length between 5 and 100 characters, contain only alphanumeric characters, dashes, and underscores, include at least one alphanumeric character, avoid inappropriate words, exclude invalid characters such as % and /, and avoid the character pattern &#. For more information, see Naming Guidelines.
     * @type {string}
     * @memberof CreateServiceAccountPayload
     */
    'firstName': string;
    /**
     * The last name of the service account. For display purposes only. Must meet the following conditions: Length between 5 and 100 characters, contain only alphanumeric characters and dashes, include at least one alphanumeric character, avoid inappropriate words, exclude invalid characters such as % and /, and avoid the character pattern &#. For more information, see Naming Guidelines.
     * @type {string}
     * @memberof CreateServiceAccountPayload
     */
    'lastName': string;
}

