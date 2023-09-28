import { CreateVersionDataAttributes } from './create-version-data-attributes';
import { CreateVersionDataRelationships } from './create-version-data-relationships';
/**
 *
 * @export
 * @interface CreateVersionData
 */
export interface CreateVersionData {
    /**
     *
     * @type {string}
     * @memberof CreateVersionData
     */
    'type': string;
    /**
     *
     * @type {CreateVersionDataAttributes}
     * @memberof CreateVersionData
     */
    'attributes': CreateVersionDataAttributes;
    /**
     *
     * @type {CreateVersionDataRelationships}
     * @memberof CreateVersionData
     */
    'relationships': CreateVersionDataRelationships;
}
