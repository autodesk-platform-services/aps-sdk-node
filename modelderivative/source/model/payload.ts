/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the format for numeric values in the response body. Possible values:  - ``text`` - (Default) Returns all properties requested in ``fields`` without applying any special formatting. - ``unit`` - Applies a filter and returns only the properties that contain numerical values. Additionally, it formats property values as ``##<VALUE_OF_PROPERTY><UNIT_OF_VALUE><PRECISION><SYSTEM_UNIT>``. For example ``##94.172{mm}[3]{m}``, where ``94.172`` is the value of the property, ``{mm}`` is the unit of the value, ``[3]`` is the precision, and ``{m}`` is the metric base unit for the measurement. 
 * @export
 * @enum {string}
 */

export const Payload = {
    Text: 'text',
    Unit: 'unit'
} as const;

export type Payload = typeof Payload[keyof typeof Payload];



