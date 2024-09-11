
import { Type } from './type';

/**
 * The data about the location of binary data.
 * @export
 * @interface ItemPayloadIncludedRelationshipsStorageData
 */
export interface ItemPayloadIncludedRelationshipsStorageData {
    /**
     * 
     * @type {Type}
     * @memberof ItemPayloadIncludedRelationshipsStorageData
     */
    'type': Type;
    /**
     * The URN indicating the location of the binary data. This is represented by the ``objectId``  returned when [uploading the file](/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-PUT/).
     * @type {string}
     * @memberof ItemPayloadIncludedRelationshipsStorageData
     */
    'id': string;
}



