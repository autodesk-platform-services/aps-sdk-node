/**
 *
 * @export
 * @interface ProjectUsersImportResponse
 */
export interface ProjectUsersImportResponse {
    /**
     * We don’t currently support this field, but expect to in a future release. If the response returns jobId with a valid UUID value, the user import operation was successful.
     * @type {string}
     * @memberof ProjectUsersImportResponse
     */
    'jobId'?: string;
}
