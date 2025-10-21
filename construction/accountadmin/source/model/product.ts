

/**
 * A list of ACC products the user is associated with.
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * A machine-readable identifier for the product (e.g., docs, build).
 * Each product has a unique key used throughout the API for identification, filtering, and integration logic (e.g., in query parameters like filter[key]).
 * 
 * Possible values: ACC - autoSpecs, build, cost, designCollaboration, docs, insight, modelCoordination, projectAdministration, and takeoff.
 * 
 * BIM 360 - assets, costManagement, designCollaboration, documentManagement, field, fieldManagement, glue, insight, modelCoordination, plan, projectAdministration, projectHome, projectManagement, and quantification.
 * 
 * Note that this endpoint returns only ACC products. Other endpoints, such as GET projects and GET projects/:projectId, may return both ACC and BIM 360 projects. In those responses, product keys may include BIM 360 values.
     * @type {string}
     * @memberof Product
     */
    'key'?: string;
    /**
     * The URL of the icon associated with the product.
     * @type {string}
     * @memberof Product
     */
    'icon'?: string;
    /**
     * The name of the product.
     * @type {string}
     * @memberof Product
     */
    'name'?: string;
    /**
     * The list of projects IDs where the user is associated with the product.
     * @type {Array<string>}
     * @memberof Product
     */
    'projectIds'?: Array<string>;
}

