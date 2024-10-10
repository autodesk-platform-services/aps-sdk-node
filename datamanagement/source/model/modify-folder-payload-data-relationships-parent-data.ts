/* tslint:disable */
/* eslint-disable */


/**
 * A container for the data that defines the parent of this folder.
 * @export
 * @interface ModifyFolderPayloadDataRelationshipsParentData
 */
export interface ModifyFolderPayloadDataRelationshipsParentData {
    /**
     * The type of the resource. Must be ``folders``
     * @type {string}
     * @memberof ModifyFolderPayloadDataRelationshipsParentData
     */
    'type': string;
    /**
     * The URN of the parent folder to which you want to move a folder to.
     * @type {string}
     * @memberof ModifyFolderPayloadDataRelationshipsParentData
     */
    'id': string;
}

