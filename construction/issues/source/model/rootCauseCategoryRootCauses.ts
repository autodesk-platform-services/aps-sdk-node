

/**
 * 
 * @export
 * @interface RootCauseCategoryRootCauses
 */
export interface RootCauseCategoryRootCauses {
    /**
     * The ID of the issue root cause.
     * @type {string}
     * @memberof RootCauseCategoryRootCauses
     */
    'id'?: string;
    /**
     * The ID of the parent issue root cause category.
     * @type {string}
     * @memberof RootCauseCategoryRootCauses
     */
    'rootCauseCategoryId'?: string;
    /**
     * The title of the issue root cause.
 * Max length: 100
     * @type {string}
     * @memberof RootCauseCategoryRootCauses
     */
    'title'?: string;
    /**
     * The description of the custom attribute.
 * Max length: 500
     * @type {boolean}
     * @memberof RootCauseCategoryRootCauses
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof RootCauseCategoryRootCauses
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof RootCauseCategoryRootCauses
     */
    'permittedAttributes'?: Array<string>;
    /**
     * The date and time the custom attribute was deleted, in the following format: YYYY-MM-DDThh:mm:ss.sz.
     * @type {string}
     * @memberof RootCauseCategoryRootCauses
     */
    'deletedAt'?: string;
    /**
     * The Autodesk ID of the user who deleted the custom attribute.
     * @type {string}
     * @memberof RootCauseCategoryRootCauses
     */
    'deletedBy'?: string;
}

