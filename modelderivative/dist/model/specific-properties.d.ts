import { SpecificPropertiesData } from './specific-properties-data';
import { SpecificPropertiesPagination } from './specific-properties-pagination';
/**
 *
 * @export
 * @interface SpecificProperties
 */
export interface SpecificProperties {
    /**
     *
     * @type {SpecificPropertiesPagination}
     * @memberof SpecificProperties
     */
    'pagination': SpecificPropertiesPagination;
    /**
     *
     * @type {SpecificPropertiesData}
     * @memberof SpecificProperties
     */
    'data': SpecificPropertiesData;
}
