/* tslint:disable */
/* eslint-disable */

import { PublishModelResponseAttributes } from './publish-model-response-attributes';
import { TypeCommands } from './type-commands';

/**
 * The ``data`` object returned by the PublishModel command.
 * @export
 * @interface PublishModelResponse
 */
export interface PublishModelResponse {
    /**
     * 
     * @type {TypeCommands}
     * @memberof PublishModelResponse
     */
    'type'?: TypeCommands;
    /**
     * 
     * @type {PublishModelResponseAttributes}
     * @memberof PublishModelResponse
     */
    'attributes'?: PublishModelResponseAttributes;
}



