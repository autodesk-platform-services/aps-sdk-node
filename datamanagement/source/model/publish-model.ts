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
     * 
     * @type {PublishModelAttributes}
     * @memberof PublishModel
     */
    'attributes'?: PublishModelAttributes;
}



