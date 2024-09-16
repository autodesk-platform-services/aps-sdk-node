
import { PublishModelAttributes } from './publishModelAttributes';
import { TypeCommands } from './typeCommands';

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



