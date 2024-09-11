

/**
 * Specifies the desired download format.
 * @export
 * @interface DownloadPayloadDataAttributesFormat
 */
export interface DownloadPayloadDataAttributesFormat {
    /**
     * The file name extension of the desired download format. Must be one of the supported file name extensions returned by the [List Supported Download Formats](/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-downloadFormats-GET/) operation for the specified version.
     * @type {string}
     * @memberof DownloadPayloadDataAttributesFormat
     */
    'fileType': string;
}

