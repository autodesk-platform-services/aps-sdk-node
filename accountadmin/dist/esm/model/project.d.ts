import { Classification } from './classification';
import { Platform } from './platform';
import { ProjectProjectValue } from './project-project-value';
import { Status } from './status';
/**
 *
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * The internally generated ID for the project.
     * @type {string}
     * @memberof Project
     */
    'id'?: string;
    /**
     * The name of the project. Max length: 255
     * @type {string}
     * @memberof Project
     */
    'name'?: string;
    /**
     * The estimated start date for the project, in ISO 8601 format.
     * @type {string}
     * @memberof Project
     */
    'startDate'?: string;
    /**
     * The estimated end date for the project, in ISO 8601 format.
     * @type {string}
     * @memberof Project
     */
    'endDate'?: string;
    /**
     * The type of the project.
     * @type {string}
     * @memberof Project
     */
    'type'?: string;
    /**
     *
     * @type {Classification}
     * @memberof Project
     */
    'classification'?: Classification;
    /**
     *
     * @type {ProjectProjectValue}
     * @memberof Project
     */
    'projectValue'?: ProjectProjectValue;
    /**
     *
     * @type {Status}
     * @memberof Project
     */
    'status'?: Status;
    /**
     * A job identifier that’s defined for the project by the user. This ID was defined when the project was created. Max length: 100
     * @type {string}
     * @memberof Project
     */
    'jobNumber'?: string;
    /**
     * Address line 1 for the project. Max length: 255
     * @type {string}
     * @memberof Project
     */
    'addressLine1'?: string;
    /**
     * Address line 2 for the project. Max length: 255
     * @type {string}
     * @memberof Project
     */
    'addressLine2'?: string;
    /**
     * The city in which the project is located.
     * @type {string}
     * @memberof Project
     */
    'city'?: string;
    /**
     * The state or province in which the project is located. Only valid state/province names and ISO 3166-1 alpha-2 codes is accepted. The provided state or province must exist in the country of the project.
     * @type {string}
     * @memberof Project
     */
    'stateOrProvince'?: string;
    /**
     * The zip or postal code in which the project is located.
     * @type {string}
     * @memberof Project
     */
    'postalCode'?: string;
    /**
     * The country in which the project is located. Only valid country names and ISO 3166-1 alpha-2 codes is accepted.
     * @type {string}
     * @memberof Project
     */
    'country'?: string;
    /**
     * The latitude of the location of the project.
     * @type {string}
     * @memberof Project
     */
    'latitude'?: string;
    /**
     * The longitude of the location of the project.
     * @type {string}
     * @memberof Project
     */
    'longitude'?: string;
    /**
     * The time zone in which the project is located. Note that this field can be NULL.
     * @type {string}
     * @memberof Project
     */
    'timezone'?: string;
    /**
     * The construction type of the project. Following is a list of recommended values; however, any value is accepted.
     * @type {string}
     * @memberof Project
     */
    'constructionType'?: string;
    /**
     * The delivery method of the project. Following is a list of recommended values; however, any value is accepted.
     * @type {string}
     * @memberof Project
     */
    'deliveryMethod'?: string;
    /**
     * The contract type of the project. Following is a list of recommended values; however, any value is accepted.
     * @type {string}
     * @memberof Project
     */
    'contractType'?: string;
    /**
     * The current phase of the project. Following is a list of recommended values; however, any value is accepted.
     * @type {string}
     * @memberof Project
     */
    'currentPhase'?: string;
    /**
     * The ID of the business unit that the project is associated with.
     * @type {string}
     * @memberof Project
     */
    'businessUnitId'?: string;
    /**
     * The timestamp of the last time someone signed into the project.
     * @type {string}
     * @memberof Project
     */
    'lastSignIn'?: string;
    /**
     * The URL of the project image.
     * @type {string}
     * @memberof Project
     */
    'imageUrl'?: string;
    /**
     * The URL of the project thumbnail image.
     * @type {string}
     * @memberof Project
     */
    'thumbnailImageUrl'?: string;
    /**
     * The timestamp when the project was created, in ISO 8601 format.
     * @type {string}
     * @memberof Project
     */
    'createdAt'?: string;
    /**
     * The timestamp when the project was last updated, in ISO 8601 format. This reflects only changes to the project fields and not changes to any resources in the project.
     * @type {string}
     * @memberof Project
     */
    'updatedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Project
     */
    'memberGroupId'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Project
     */
    'adminGroupId'?: string;
    /**
     * The ID of the account the project is associated with.
     * @type {string}
     * @memberof Project
     */
    'accountId'?: string;
    /**
     * The total number of sheets associated with the project.
     * @type {number}
     * @memberof Project
     */
    'sheetCount'?: number;
    /**
     * An array of the product objects associated with the project.
     * @type {Array<string>}
     * @memberof Project
     */
    'products'?: Array<string>;
    /**
     *
     * @type {Platform}
     * @memberof Project
     */
    'platform'?: Platform;
    /**
     * The total number of companies associated with the project.
     * @type {number}
     * @memberof Project
     */
    'companyCount'?: number;
    /**
     * The total number of members on the project.
     * @type {number}
     * @memberof Project
     */
    'memberCount'?: number;
}
