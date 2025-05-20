
import { UserProjectAccessLevels } from './userProjectAccessLevels';
import { UserProjectProjectValue } from './userProjectProjectValue';

/**
 * 
 * @export
 * @interface UserProject
 */
export interface UserProject {
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'startDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'endDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'classification'?: string;
    /**
     * 
     * @type {UserProjectProjectValue}
     * @memberof UserProject
     */
    'projectValue'?: UserProjectProjectValue;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'jobNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'addressLine1'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'addressLine2'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'stateOrProvince'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'postalCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'country'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'latitude'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'longitude'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'timezone'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'constructionType'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'deliveryMethod'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'contractType'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'currentPhase'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'imageUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'thumbnailImageUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'accountId'?: string;
    /**
     * 
     * @type {number}
     * @memberof UserProject
     */
    'sheetCount'?: number;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    'platform'?: string;
    /**
     * 
     * @type {UserProjectAccessLevels}
     * @memberof UserProject
     */
    'accessLevels'?: UserProjectAccessLevels;
}

