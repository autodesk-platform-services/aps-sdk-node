/* tslint:disable */
/* eslint-disable */

import { VersionRequestDataAttributes } from './version-request-data-attributes';

/**
 * 
 * @export
 * @interface VersionRequestData
 */
export interface VersionRequestData {
    /**
     * 
     * @type {string}
     * @memberof VersionRequestData
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof VersionRequestData
     */
    'id': string;
    /**
     * 
     * @type {VersionRequestDataAttributes}
     * @memberof VersionRequestData
     */
    'attributes'?: VersionRequestDataAttributes;
}

