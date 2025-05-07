
import { RootCauseCategoriesPageResultsRootCauses } from './rootCauseCategoriesPageResultsRootCauses';

/**
 * 
 * @export
 * @interface RootCauseCategoriesPageResults
 */
export interface RootCauseCategoriesPageResults {
    /**
     * The ID of the issue root cause category.
     * @type {string}
     * @memberof RootCauseCategoriesPageResults
     */
    'id'?: string;
    /**
     * The title of the custom attribute.* Max length: 100
     * @type {string}
     * @memberof RootCauseCategoriesPageResults
     */
    'title'?: string;
    /**
     * The description of the custom attribute.* Max length: 500
     * @type {boolean}
     * @memberof RootCauseCategoriesPageResults
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof RootCauseCategoriesPageResults
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof RootCauseCategoriesPageResults
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The metadata object; only relevant for list custom attributes.
     * @type {Array<RootCauseCategoriesPageResultsRootCauses>}
     * @memberof RootCauseCategoriesPageResults
     */
    'rootCauses'?: Array<RootCauseCategoriesPageResultsRootCauses>;
    /**
     * The date and time the custom attribute was created, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof RootCauseCategoriesPageResults
     */
    'createdAt'?: string;
    /**
     * The Autodesk ID of the user who created the custom attribute.
     * @type {string}
     * @memberof RootCauseCategoriesPageResults
     */
    'createdBy'?: string;
    /**
     * The last date and time the custom attribute was updated, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof RootCauseCategoriesPageResults
     */
    'updatedAt'?: string;
    /**
     * The Autodesk ID of the user who last updated the custom attribute.
     * @type {string}
     * @memberof RootCauseCategoriesPageResults
     */
    'updatedBy'?: string;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof RootCauseCategoriesPageResults
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof RootCauseCategoriesPageResults
     */
    'deletedBy'?: string;
}

