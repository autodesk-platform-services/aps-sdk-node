
import { RootCauseCategoryRootCauses } from './rootCauseCategoryRootCauses';

/**
 * 
 * @export
 * @interface RootCauseCategory
 */
export interface RootCauseCategory {
    /**
     * The ID of the issue root cause category.
     * @type {string}
     * @memberof RootCauseCategory
     */
    'id'?: string;
    /**
     * The title of the custom attribute.
 * Max length: 100
     * @type {string}
     * @memberof RootCauseCategory
     */
    'title'?: string;
    /**
     * The description of the custom attribute.
 * Max length: 500
     * @type {boolean}
     * @memberof RootCauseCategory
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof RootCauseCategory
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof RootCauseCategory
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The metadata object; only relevant for list custom attributes.
     * @type {Array<RootCauseCategoryRootCauses>}
     * @memberof RootCauseCategory
     */
    'rootCauses'?: Array<RootCauseCategoryRootCauses>;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof RootCauseCategory
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the custom attribute.
     * @type {string}
     * @memberof RootCauseCategory
     */
    'createdBy'?: string;
    /**
     * The last date and time the custom attribute was updated, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof RootCauseCategory
     */
    'updatedAt'?: string;
    /**
     * The Autodesk ID of the user who last updated the custom attribute.
     * @type {string}
     * @memberof RootCauseCategory
     */
    'updatedBy'?: string;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof RootCauseCategory
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof RootCauseCategory
     */
    'deletedBy'?: string;
}

