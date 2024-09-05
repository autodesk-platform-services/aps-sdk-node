/* tslint:disable */
/* eslint-disable */


/**
 * Use this to retrieve only the properties of objects where a specified property contains a specified value. 
 * @export
 * @interface Contains
 */
export interface Contains {
    /**
     * Returns only the objects where the value of the specified property contains the words specified in a string.  The first element of the array contains the name of the property. The second element contains a string containing the words to match. The array can only be two elements long.  For example, if you specify an array as: ``\"$contains\":[\"properties.Materials and Finishes.Structural Material\",\"Concrete Situ\"]``, the request returns the properties of all objects whose ``properties.Materials and Finishes.Structural Material`` property contains the words  ``Concrete`` and ``Situ``. You can specify up to 50 words.
     * @type {Array<string>}
     * @memberof Contains
     */
    '$contains': Array<string>;
}

