/* tslint:disable */
/* eslint-disable */


/**
 * Use this to retrieve only the properties of objects with names begining with a specified string. 
 * @export
 * @interface BeginsWith
 */
export interface BeginsWith {
    /**
     * Returns only the objects with their ``name`` attribute beginning with the specified string.  The first element of the array contains the name of the attribute to match (``name``). The second element contains the string to match. The array can have only two elements. Only the objects whose name begin with the specified string are returned. 
     * @type {Array<string>}
     * @memberof BeginsWith
     */
    '$prefix': Array<string>;
}

