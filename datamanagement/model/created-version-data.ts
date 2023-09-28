/* tslint:disable */
/* eslint-disable */

import { CreatedVersionDataAttributes } from './created-version-data-attributes';
import { ProjectsDataLinks } from './projects-data-links';

/**
 * 
 * @export
 * @interface CreatedVersionData
 */
export interface CreatedVersionData {
    /**
     * 
     * @type {string}
     * @memberof CreatedVersionData
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatedVersionData
     */
    'id'?: string;
    /**
     * 
     * @type {CreatedVersionDataAttributes}
     * @memberof CreatedVersionData
     */
    'attributes'?: CreatedVersionDataAttributes;
    /**
     * 
     * @type {ProjectsDataLinks}
     * @memberof CreatedVersionData
     */
    'links'?: ProjectsDataLinks;
}

