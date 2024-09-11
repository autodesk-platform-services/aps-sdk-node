
import { PublishModelAttributes } from './publishModelAttributes';
import { Type } from './type';

/**
 * The ``data`` object returned by the PublishModel command.
 * @export
 * @interface PublishModel
 */
export interface PublishModel {
    /**
     * 
     * @type {Type}
     * @memberof PublishModel
     */
    'type'?: Type;
    /**
     * 
     * @type {PublishModelAttributes}
     * @memberof PublishModel
     */
    'attributes'?: PublishModelAttributes;
}



