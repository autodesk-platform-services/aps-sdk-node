/* tslint:disable */
/* eslint-disable */

import { ConformingStatus } from './conforming-status';

/**
 * The object that contains the additional properties, which makes this resource extensible.
 * @export
 * @interface VersionExtensionWithSchemaLinkData
 */
export interface VersionExtensionWithSchemaLinkData {
    [key: string]: object | any;

    /**
     * 
     * @type {ConformingStatus}
     * @memberof VersionExtensionWithSchemaLinkData
     */
    'conformingStatus'?: ConformingStatus;
}



