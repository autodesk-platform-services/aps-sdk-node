/* tslint:disable */
/* eslint-disable */


/**
 * Use this to retrieve only the properties of objects where a specified property is less than a specified value. 
 * @export
 * @interface LessThan
 */
export interface LessThan {
    /**
     * Returns only the objects where the value of the specified numerical property is less than or equal to the specified value.  The first element of the array contains the name of the property. The next element specifies the values that the property must be less than or equal to. The array can only be two elements long.  For example, if you specify an array as: ``\"$le\":[\"properties.Dimensions.Width1\",10]``, the request returns the properties of all objects whose ``properties.Dimensions.Width1`` property is less than or equal to ``10``.  **Note:** The Model Derivative service converts numeric values from their native units to metric base units for comparison. So, the value to compare with must be specified in metric base units. For example, if the property you are comparing is a length measurement, you must specify the value  in ``m``.  Not in ``cm``, ``mm``, or ``ft``.
     * @type {Array<object>}
     * @memberof LessThan
     */
    '$le': Array<any>;
}

