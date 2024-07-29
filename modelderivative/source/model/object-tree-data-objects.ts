/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface ObjectTreeDataObjects
 */
export interface ObjectTreeDataObjects {
    /**
     * A non-persistent ID that is assigned to an object at translation time.
     * @type {number}
     * @memberof ObjectTreeDataObjects
     */
    'objectid': number;
    /**
     * Name of the object.
     * @type {string}
     * @memberof ObjectTreeDataObjects
     */
    'name': string;
    /**
     * An optional array of objects of type ``object`` where each object represents a child of the current node on the object tree.
     * @type {Array<ObjectTreeDataObjects>}
     * @memberof ObjectTreeDataObjects
     */
    'objects'?: Array<ObjectTreeDataObjects>;
}

