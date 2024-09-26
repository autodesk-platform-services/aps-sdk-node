

/**
 * The type of this resource. Possible values: queued, finished, failed, processing
 * @export
 * @enum {string}
 */

export const DownloadsStatus = {
    Queued: 'queued',
    Finished: 'finished',
    Failed: 'failed',
    Processing: 'processing'
} as const;

export type DownloadsStatus = typeof DownloadsStatus[keyof typeof DownloadsStatus];



