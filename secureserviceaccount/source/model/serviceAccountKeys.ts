
import { ServiceAccountKeyDetails } from './serviceAccountKeyDetails';

/**
 * Contains details of a list of service account keys
 * @export
 * @interface ServiceAccountKeys
 */
export interface ServiceAccountKeys {
    /**
     * List of service account keys
     * @type {Array<ServiceAccountKeyDetails>}
     * @memberof ServiceAccountKeys
     */
    'keys'?: Array<ServiceAccountKeyDetails>;
}

