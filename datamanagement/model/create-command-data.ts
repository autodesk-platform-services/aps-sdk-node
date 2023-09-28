/* tslint:disable */
/* eslint-disable */

import { CreateCommandDataAttributes } from './create-command-data-attributes';
import { CreateCommandDataRelationships } from './create-command-data-relationships';

/**
 * 
 * @export
 * @interface CreateCommandData
 */
export interface CreateCommandData {
    /**
     * 
     * @type {string}
     * @memberof CreateCommandData
     */
    'type': string;
    /**
     * 
     * @type {CreateCommandDataAttributes}
     * @memberof CreateCommandData
     */
    'attributes': CreateCommandDataAttributes;
    /**
     * 
     * @type {CreateCommandDataRelationships}
     * @memberof CreateCommandData
     */
    'relationships': CreateCommandDataRelationships;
}

