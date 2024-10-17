/* tslint:disable */
/* eslint-disable */

import { PublishModelAttributes } from './publish-model-attributes';
import { TypeCommands } from './type-commands';

/**
 * The ``data`` object returned by the PublishModel command.
 * @export
 * @interface PublishModel
 */
export interface PublishModel {
    /**
     * 
     * @type {TypeCommands}
     * @memberof PublishModel
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof PublishModel
     */
    'id'?: string;
    /**
     * 
     * @type {PublishModelAttributes}
     * @memberof PublishModel
     */
    'attributes'?: PublishModelAttributes;
}



