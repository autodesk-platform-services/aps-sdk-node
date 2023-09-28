import { PostReferencesRequestReferences } from './post-references-request-references';
/**
 *
 * @export
 * @interface PostReferencesRequest
 */
export interface PostReferencesRequest {
    /**
     * The URN of the top level component of the design. Mandatory if the Base64 encoded urn in the request URL is a logical URN.
     * @type {string}
     * @memberof PostReferencesRequest
     */
    'urn': string;
    /**
     * Region to store reference information. Possible values: ``US``, ``EMEA``. By default, it is set to ``US``.
     * @type {string}
     * @memberof PostReferencesRequest
     */
    'region'?: PostReferencesRequestRegionEnum;
    /**
     * The file name of the top level component. By default, it is set to ``\"\"`` and the file will be download with its ``urn``.
     * @type {string}
     * @memberof PostReferencesRequest
     */
    'filename': string;
    /**
     * An array of objects, where each object represents a referenced file.
     * @type {Set<PostReferencesRequestReferences>}
     * @memberof PostReferencesRequest
     */
    'references': Set<PostReferencesRequestReferences>;
}
export declare const PostReferencesRequestRegionEnum: {
    readonly Us: "US";
    readonly Emea: "EMEA";
};
export type PostReferencesRequestRegionEnum = typeof PostReferencesRequestRegionEnum[keyof typeof PostReferencesRequestRegionEnum];
