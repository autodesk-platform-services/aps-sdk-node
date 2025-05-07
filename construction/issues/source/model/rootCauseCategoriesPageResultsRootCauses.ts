

/**
 * 
 * @export
 * @interface RootCauseCategoriesPageResultsRootCauses
 */
export interface RootCauseCategoriesPageResultsRootCauses {
    /**
     * The ID of the issue root cause.
     * @type {string}
     * @memberof RootCauseCategoriesPageResultsRootCauses
     */
    'id'?: string;
    /**
     * The ID of the parent issue root cause category.
     * @type {string}
     * @memberof RootCauseCategoriesPageResultsRootCauses
     */
    'rootCauseCategoryId'?: string;
    /**
     * The title of the issue root cause.
 * Max length: 100
     * @type {string}
     * @memberof RootCauseCategoriesPageResultsRootCauses
     */
    'title'?: string;
    /**
     * The description of the custom attribute.
 * Max length: 500
     * @type {boolean}
     * @memberof RootCauseCategoriesPageResultsRootCauses
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof RootCauseCategoriesPageResultsRootCauses
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof RootCauseCategoriesPageResultsRootCauses
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof RootCauseCategoriesPageResultsRootCauses
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof RootCauseCategoriesPageResultsRootCauses
     */
    'deletedBy'?: string;
}

