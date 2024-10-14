/* tslint:disable */
/* eslint-disable */

import { PublishModelJobAttributes } from './publish-model-job-attributes';
import { TypeCommands } from './type-commands';

/**
 * The ``data`` object returned by the GetPublishModelJob command, if the model needs publishing. If the model is already published, the ``data`` object will bed ``null``. 
 * @export
 * @interface PublishModelJob
 */
export interface PublishModelJob {
    /**
     * 
     * @type {TypeCommands}
     * @memberof PublishModelJob
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof PublishModelJob
     */
    'id'?: string;
    /**
     * 
     * @type {PublishModelJobAttributes}
     * @memberof PublishModelJob
     */
    'attributes'?: PublishModelJobAttributes;
}



