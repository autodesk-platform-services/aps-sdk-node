
import { ConformingStatus } from './conformingStatus';

/**
 * The object that contains the additional properties, which makes this resource extensible.
 * @export
 * @interface VersionExtensionWithSchemaLinkData
 */
export interface VersionExtensionWithSchemaLinkData {
    [key: string]: ConformingStatus | object;

    /**
     * 
     * @type {ConformingStatus}
     * @memberof VersionExtensionWithSchemaLinkData
     */
    'conformingStatus'?: ConformingStatus;
}



