
import { PublishWithoutLinksAttributes } from './publishWithoutLinksAttributes';
import { Type } from './type';

/**
 * The ``data`` object returned by the PublishWithoutLinks command.
 * @export
 * @interface PublishWithoutLinks
 */
export interface PublishWithoutLinks {
    /**
     * 
     * @type {Type}
     * @memberof PublishWithoutLinks
     */
    'type'?: Type;
    /**
     * 
     * @type {PublishWithoutLinksAttributes}
     * @memberof PublishWithoutLinks
     */
    'attributes'?: PublishWithoutLinksAttributes;
}



