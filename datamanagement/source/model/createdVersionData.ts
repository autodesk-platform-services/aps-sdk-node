
import { JsonApiLinksSelfAndWebView } from './jsonApiLinksSelfAndWebView';
import { Type } from './type';
import { VersionAttributes } from './versionAttributes';

/**
 * A container of data describing the version.
 * @export
 * @interface CreatedVersionData
 */
export interface CreatedVersionData {
    /**
     * 
     * @type {Type}
     * @memberof CreatedVersionData
     */
    'type'?: Type;
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



