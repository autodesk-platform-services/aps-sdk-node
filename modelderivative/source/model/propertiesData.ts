/* tslint:disable */
/* eslint-disable */

import { PropertiesDataCollection } from './propertiesDataCollection';

/**
 * An envelope that encapsulates the return data.
 * @export
 * @interface PropertiesData
 */
export interface PropertiesData {
    /**
     * The type of data that is returned. Always ``properties``.
     * @type {string}
     * @memberof PropertiesData
     */
    'type': string;
    /**
     * A non-hierarchical list of objects contained in  the specified Model View. Each object has a  ``properties`` attribute, which contains the  properties of that object.
     * @type {Array<PropertiesDataCollection>}
     * @memberof PropertiesData
     */
    'collection': Array<PropertiesDataCollection>;
}

