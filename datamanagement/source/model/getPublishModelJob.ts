
import { GetPublishModelJobAttributes } from './getPublishModelJobAttributes';
import { Type } from './type';

/**
 * The ``data`` object returned by the GetPublishModelJob command, if the model needs publishing. If the model is already published, the ``data`` object will bed ``null``. 
 * @export
 * @interface GetPublishModelJob
 */
export interface GetPublishModelJob {
    /**
     * 
     * @type {Type}
     * @memberof GetPublishModelJob
     */
    'type'?: Type;
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



