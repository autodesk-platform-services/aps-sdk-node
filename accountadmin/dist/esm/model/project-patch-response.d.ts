import { ConstructionType } from './construction-type';
import { ContractType } from './contract-type';
import { Language } from './language';
import { ProjectStatus } from './project-status';
/**
 *
 * @export
 * @interface ProjectPatchResponse
 */
export interface ProjectPatchResponse {
    /**
     * Project ID
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'id'?: string;
    /**
     * Account ID
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'account_id'?: string;
    /**
     * Name of the project
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'name'?: string;
    /**
     * The starting date of a project; must be earlier than end_date Format: YYYY-MM-DD
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'start_date'?: string;
    /**
     * The ending date of a project; must be later than start_date Format: YYYY-MM-DD
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'end_date'?: string;
    /**
     * The type of project; accepts preconfigured and customized project types
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'project_type'?: string;
    /**
     * Monetary value of the project
     * @type {number}
     * @memberof ProjectPatchResponse
     */
    'value'?: number;
    /**
     * Currency for project value
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'currency'?: string;
    /**
     *
     * @type {ProjectStatus}
     * @memberof ProjectPatchResponse
     */
    'status'?: ProjectStatus;
    /**
     * Project job number to connect a BIM 360 project to project or job in a financial or ERP system.
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'job_number'?: string;
    /**
     * Project address line 1
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'address_line_1'?: string;
    /**
     * Project address line 2
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'address_line_2'?: string;
    /**
     * City in which project is located
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'city'?: string;
    /**
     * State or province in which project is located
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'state_or_province'?: string;
    /**
     * Postal code for the project location
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'postal_code'?: string;
    /**
     * Country for this project
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'country'?: string;
    /**
     * The business unit ID of this project
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'business_unit_id'?: string;
    /**
     * Time zone for this project
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'timezone'?: string;
    /**
     *
     * @type {Language}
     * @memberof ProjectPatchResponse
     */
    'language'?: Language;
    /**
     *
     * @type {ConstructionType}
     * @memberof ProjectPatchResponse
     */
    'construction_type'?: ConstructionType;
    /**
     *
     * @type {ContractType}
     * @memberof ProjectPatchResponse
     */
    'contract_type'?: ContractType;
    /**
     * Timestamp of the last sign in, YYYY-MM-DDThh:mm:ss.sssZ format
     * @type {string}
     * @memberof ProjectPatchResponse
     */
    'last_sign_in'?: string;
}
