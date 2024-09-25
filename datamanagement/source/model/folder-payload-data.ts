/* tslint:disable */
/* eslint-disable */

import { FolderPayloadDataAttributes } from './folder-payload-data-attributes';
import { FolderPayloadDataRelationships } from './folder-payload-data-relationships';

/**
 * The data that describes the folder to be created.
 * @export
 * @interface FolderPayloadData
 */
export interface FolderPayloadData {
    /**
     * The type of the resource you are creating. Must be ``folders``.
     * @type {string}
     * @memberof FolderPayloadData
     */
    'type': string;
    /**
     * 
     * @type {FolderPayloadDataAttributes}
     * @memberof FolderPayloadData
     */
    'attributes': FolderPayloadDataAttributes;
    /**
     * 
     * @type {FolderPayloadDataRelationships}
     * @memberof FolderPayloadData
     */
    'relationships': FolderPayloadDataRelationships;
}

