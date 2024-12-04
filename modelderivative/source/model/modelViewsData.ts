/* tslint:disable */
/* eslint-disable */

import { ModelViewsDataMetadata } from './modelViewsDataMetadata';

/**
 * An envelope that contains the return data.
 * @export
 * @interface ModelViewsData
 */
export interface ModelViewsData {
    /**
     * The type of data that is returned.
     * @type {string}
     * @memberof ModelViewsData
     */
    'type': string;
    /**
     * An array of objects, where each object represents a Model View.
     * @type {Array<ModelViewsDataMetadata>}
     * @memberof ModelViewsData
     */
    'metadata': Array<ModelViewsDataMetadata>;
}

