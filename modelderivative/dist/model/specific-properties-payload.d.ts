import { SpecificPropertiesPayloadPagination } from './specific-properties-payload-pagination';
import { SpecificPropertiesPayloadQuery } from './specific-properties-payload-query';
/**
 *
 * @export
 * @interface SpecificPropertiesPayload
 */
export interface SpecificPropertiesPayload {
    /**
     *
     * @type {SpecificPropertiesPayloadPagination}
     * @memberof SpecificPropertiesPayload
     */
    'pagination': SpecificPropertiesPayloadPagination;
    /**
     *
     * @type {SpecificPropertiesPayloadQuery}
     * @memberof SpecificPropertiesPayload
     */
    'query': SpecificPropertiesPayloadQuery;
    /**
     * Specifies what properties of the objects to return. If you do not specify this attribute, the response returns all properties.  Possible values:  - ``properties`` - Return all properties. - ``properties.something``- Return the property named ``something`` and all its children. - ``properties.some*`` - Return all properties with names that begin with ``some`` and all their children. - ``properties.category.*`` - Return the property named ``category`` and all its children. - ``properties.*.property`` - Return any property named ``property`` regardless of its parent.
     * @type {object}
     * @memberof SpecificPropertiesPayload
     */
    'fields': object;
    /**
     * Specifies the format for numeric values in the response body. Possible values:  - ``text`` - (Default) Returns all properties requested in ``fields`` without applying any special formatting.    - ``unit`` - Applies a filter and returns only the properties that contain numerical values. Additionally, it formats property values as ``##<VALUE_OF_PROPERTY><UNIT_OF_VALUE><PRECISION><SYSTEM_UNIT>``. For example ``##94.172{mm}[3]{m}``, where ``94.172`` is the value of the property, ``{mm}`` is the unit of the value, ``[3]`` is the precision, and ``{m}`` is the metric base unit for the measurement.
     * @type {string}
     * @memberof SpecificPropertiesPayload
     */
    'payload': SpecificPropertiesPayloadPayloadEnum;
}
export declare const SpecificPropertiesPayloadPayloadEnum: {
    readonly Text: "text";
    readonly Unit: "unit";
};
export type SpecificPropertiesPayloadPayloadEnum = typeof SpecificPropertiesPayloadPayloadEnum[keyof typeof SpecificPropertiesPayloadPayloadEnum];
