
import { GetPublishModelJobAttributes } from './getPublishModelJobAttributes';
import { TypeCommands } from './typeCommands';

/**
 * The ``data`` object returned by the GetPublishModelJob command, if the model needs publishing. If the model is already published, the ``data`` object will bed ``null``. 
 * @export
 * @interface GetPublishModelJob
 */
export interface GetPublishModelJob {
    /**
     * 
     * @type {TypeCommands}
     * @memberof GetPublishModelJob
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof GetPublishModelJob
     */
    'id'?: string;
    /**
     * 
     * @type {GetPublishModelJobAttributes}
     * @memberof GetPublishModelJob
     */
    'attributes'?: GetPublishModelJobAttributes;
}



