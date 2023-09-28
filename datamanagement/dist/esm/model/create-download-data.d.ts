import { CreateDownloadDataAttributes } from './create-download-data-attributes';
import { CreateDownloadDataRelationships } from './create-download-data-relationships';
/**
 *
 * @export
 * @interface CreateDownloadData
 */
export interface CreateDownloadData {
    /**
     *
     * @type {string}
     * @memberof CreateDownloadData
     */
    'type': string;
    /**
     *
     * @type {CreateDownloadDataAttributes}
     * @memberof CreateDownloadData
     */
    'attributes': CreateDownloadDataAttributes;
    /**
     *
     * @type {CreateDownloadDataRelationships}
     * @memberof CreateDownloadData
     */
    'relationships': CreateDownloadDataRelationships;
}
