

/**
 * Indicates the upload status of the requested object. Possible values are:
 * 
 * - ``complete`` - The upload process is finished. If the object was uploaded in chunks, assembly of chunks into the final object is also complete.
 * - ``chunked`` - The object was uploaded in chunks, but assembly of chunks into the final object is still pending. `public-resource-fallback`` = ``false``
 * - ``fallback`` - The object was uploaded in chunks, but assembly of chunks into the final object is still pending. `public-resource-fallback`` = ``true`` 
 * 
 * @export
 * @enum {string}
 */

export const DownloadStatus = {
    Complete: 'complete',
    Chunked: 'chunked',
    Fallback: 'fallback'
} as const;

export type DownloadStatus = typeof DownloadStatus[keyof typeof DownloadStatus];



