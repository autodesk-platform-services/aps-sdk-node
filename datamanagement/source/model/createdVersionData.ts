
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { TypeVersion } from './typeVersion';
import { VersionAttributes } from './versionAttributes';

/**
 * A container of data describing the version.
 * @export
 * @interface CreatedVersionData
 */
export interface CreatedVersionData {
    /**
     * 
     * @type {TypeVersion}
     * @memberof CreatedVersionData
     */
    'type'?: TypeVersion;
    /**
     * The ID that uniquely identifies the version (Version ID). The Version ID is the URN of the version.
     * @type {string}
     * @memberof CreatedVersionData
     */
    'id'?: string;
    /**
     * 
     * @type {VersionAttributes}
     * @memberof CreatedVersionData
     */
    'attributes'?: VersionAttributes;
    /**
     * 
     * @type {JsonApiLinksSelfAndWebView}
     * @memberof CreatedVersionData
     */
    'links'?: JsonApiLinksSelfAndWebView;
}



