

/**
 * The request payload for a Complete Upload to S3 Signed URL operation.
 * @export
 * @interface Completes3uploadBody
 */
export interface Completes3uploadBody {
    /**
     * The ID uniquely identifying the upload session that was returned when you called [Get S3 Signed Upload URL](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/).
     * @type {string}
     * @memberof Completes3uploadBody
     */
    'uploadKey': string;
    /**
     * The expected size of the object. If provided, OSS will check this against the object in S3 and return an error if the size does not match.
     * @type {number}
     * @memberof Completes3uploadBody
     */
    'size'?: number;
    /**
     * An array of eTags. S3 returns an eTag to each upload request, be it for a chunk or an entire file. For a single-part upload, this array contains the expected eTag of the entire object. For a multipart upload, this array contains the expected eTag of each part of the upload; the index of an eTag in the array corresponds to its part number in the upload. If provided, OSS will validate these eTags against the content in S3, and return an error if the eTags do not match.
     * @type {Array<string>}
     * @memberof Completes3uploadBody
     */
    'eTags'?: Array<string>;
}

