/* tslint:disable */
/* eslint-disable */

import { ObjectTreeDataObjects } from './object-tree-data-objects';

/**
 * Envelope that contains the returned data.
 * @export
 * @interface ObjectTreeData
 */
export interface ObjectTreeData {
    /**
     * The type of data that is returned. Always ``objects``.
     * @type {string}
     * @memberof ObjectTreeData
     */
    'type': string;
    /**
     * Collection of \"objects\" that constitute the nodes of the object tree.
     * @type {Set<ObjectTreeDataObjects>}
     * @memberof ObjectTreeData
     */
    'objects': Set<ObjectTreeDataObjects>;
}

