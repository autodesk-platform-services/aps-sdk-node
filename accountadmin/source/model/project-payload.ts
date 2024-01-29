/* tslint:disable */
/* eslint-disable */

import { Classification } from './classification';
import { Platform } from './platform';
import { ProjectPayloadProjectValue } from './project-payload-project-value';
import { ProjectPayloadTemplate } from './project-payload-template';
import { Status } from './status';
import { Timezone } from './timezone';
import { Type } from './type';

/**
 * 
 * @export
 * @interface ProjectPayload
 */
export interface ProjectPayload {
    /**
     * The name of the project. Max length: 255
     * @type {string}
     * @memberof ProjectPayload
     */
    'name': string;
    /**
     * The estimated start date for the project, in ISO 8601 format.
     * @type {string}
     * @memberof ProjectPayload
     */
    'startDate'?: string;
    /**
     * The estimated end date for the project, in ISO 8601 format.
     * @type {string}
     * @memberof ProjectPayload
     */
    'endDate'?: string;
    /**
     * 
     * @type {Type}
     * @memberof ProjectPayload
     */
    'type': Type;
    /**
     * 
     * @type {Classification}
     * @memberof ProjectPayload
     */
    'classification'?: Classification;
    /**
     * 
     * @type {ProjectPayloadProjectValue}
     * @memberof ProjectPayload
     */
    'projectValue'?: ProjectPayloadProjectValue;
    /**
     * 
     * @type {Status}
     * @memberof ProjectPayload
     */
    'status'?: Status;
    /**
     * A job identifier that’s defined for the project by the user. This ID was defined when the project was created. Max length: 100
     * @type {string}
     * @memberof ProjectPayload
     */
    'jobNumber'?: string;
    /**
     * Address line 1 for the project. Max length: 255
     * @type {string}
     * @memberof ProjectPayload
     */
    'addressLine1'?: string;
    /**
     * Address line 2 for the project. Max length: 255
     * @type {string}
     * @memberof ProjectPayload
     */
    'addressLine2'?: string;
    /**
     * The city in which the project is located.
     * @type {string}
     * @memberof ProjectPayload
     */
    'city'?: string;
    /**
     * The state or province in which the project is located. Only valid state/province names and ISO 3166-1 alpha-2 codes is accepted. The provided state or province must exist in the country of the project.
     * @type {string}
     * @memberof ProjectPayload
     */
    'stateOrProvince'?: string;
    /**
     * The zip or postal code in which the project is located.
     * @type {string}
     * @memberof ProjectPayload
     */
    'postalCode'?: string;
    /**
     * The country in which the project is located. Only valid country names and ISO 3166-1 alpha-2 codes is accepted.
     * @type {string}
     * @memberof ProjectPayload
     */
    'country'?: string;
    /**
     * The latitude of the location of the project.
     * @type {string}
     * @memberof ProjectPayload
     */
    'latitude'?: string;
    /**
     * The longitude of the location of the project.
     * @type {string}
     * @memberof ProjectPayload
     */
    'longitude'?: string;
    /**
     * 
     * @type {Timezone}
     * @memberof ProjectPayload
     */
    'timezone'?: Timezone;
    /**
     * The construction type of the project. Following is a list of recommended values; however, any value is accepted.
     * @type {string}
     * @memberof ProjectPayload
     */
    'constructionType'?: string;
    /**
     * The delivery method of the project. Following is a list of recommended values; however, any value is accepted.
     * @type {string}
     * @memberof ProjectPayload
     */
    'deliveryMethod'?: string;
    /**
     * The contract type of the project. Following is a list of recommended values; however, any value is accepted.
     * @type {string}
     * @memberof ProjectPayload
     */
    'contractType'?: string;
    /**
     * The current phase of the project. Following is a list of recommended values; however, any value is accepted.
     * @type {string}
     * @memberof ProjectPayload
     */
    'currentPhase'?: string;
    /**
     * The ID of the business unit that the project is associated with.
     * @type {string}
     * @memberof ProjectPayload
     */
    'businessUnitId'?: string;
    /**
     * The timestamp of the last time someone signed into the project.
     * @type {string}
     * @memberof ProjectPayload
     */
    'lastSignIn'?: string;
    /**
     * The URL of the project image.
     * @type {string}
     * @memberof ProjectPayload
     */
    'imageUrl'?: string;
    /**
     * The URL of the project thumbnail image.
     * @type {string}
     * @memberof ProjectPayload
     */
    'thumbnailImageUrl'?: string;
    /**
     * The timestamp when the project was created, in ISO 8601 format.
     * @type {string}
     * @memberof ProjectPayload
     */
    'createdAt'?: string;
    /**
     * The timestamp when the project was last updated, in ISO 8601 format. This reflects only changes to the project fields and not changes to any resources in the project.
     * @type {string}
     * @memberof ProjectPayload
     */
    'updatedAt'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof ProjectPayload
     */
    'memberGroupId'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof ProjectPayload
     */
    'adminGroupId'?: string;
    /**
     * The ID of the account the project is associated with.
     * @type {string}
     * @memberof ProjectPayload
     */
    'accountId'?: string;
    /**
     * The total number of sheets associated with the project.
     * @type {number}
     * @memberof ProjectPayload
     */
    'sheetCount'?: number;
    /**
     * An array of the product objects associated with the project.
     * @type {Array<string>}
     * @memberof ProjectPayload
     */
    'products'?: Array<string>;
    /**
     * 
     * @type {Platform}
     * @memberof ProjectPayload
     */
    'platform'?: Platform;
    /**
     * The total number of companies associated with the project.
     * @type {number}
     * @memberof ProjectPayload
     */
    'companyCount'?: number;
    /**
     * The total number of members on the project.
     * @type {number}
     * @memberof ProjectPayload
     */
    'memberCount'?: number;
    /**
     * 
     * @type {ProjectPayloadTemplate}
     * @memberof ProjectPayload
     */
    'template'?: ProjectPayloadTemplate;
}



