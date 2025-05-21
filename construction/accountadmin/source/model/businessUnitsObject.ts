/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface BusinessUnitsObject
 */
export interface BusinessUnitsObject {
    /**
     * Business unit ID
 * 
 * If specified and already existing, the existing business unit will be replaced
 * with the provided attributes.
 * 
 * If specified and not already existing, a new business unit will be created with the id.
 * 
 * If unspecified, a new business unit will be created with a server-generated id.
     * @type {string}
     * @memberof BusinessUnitsObject
     */
    'id'?: string;
    /**
     * The ID of the parent business unit
 * 
 * Note that an entire business unit hierarchy can be created by manually specifying the id
 * attribute for each business unit and using it as appropriate in other parent_id
 * attributes.
     * @type {string}
     * @memberof BusinessUnitsObject
     */
    'parent_id'?: string;
    /**
     * The name of the business unit
     * @type {string}
     * @memberof BusinessUnitsObject
     */
    'name': string;
    /**
     * The description of the business unit
     * @type {string}
     * @memberof BusinessUnitsObject
     */
    'description'?: string;
}

