/* tslint:disable */
/* eslint-disable */


/**
 * The units the models must be translated to, when the output type is OBJ. For example, from millimeters (10, 123, 31) to centimeters (1.0, 12.3, 3.1). If the source unit or the unit you are translating to is not supported, the values remain unchanged. Possible values are:   - ``meter`` - ``decimeter`` - ``centimeter`` - ``millimeter`` - ``micrometer`` - ``nanometer`` - ``yard`` - ``foot`` - ``inch`` - ``mil`` - ``microinch``  **Note:** Not supported when the source design is F3D.
 * @export
 * @enum {string}
 */

export const Unit = {
    Meter: 'meter',
    Decimeter: 'decimeter',
    Centimeter: 'centimeter',
    Millimeter: 'millimeter',
    Micrometer: 'micrometer',
    Nanometer: 'nanometer',
    Yard: 'yard',
    Foot: 'foot',
    Inch: 'inch',
    Mil: 'mil',
    Microinch: 'microinch'
} as const;

export type Unit = typeof Unit[keyof typeof Unit];



