
import { PublishWithoutLinksAttributes } from './publishWithoutLinksAttributes';
import { TypeCommands } from './typeCommands';

/**
 * The ``data`` object returned by the PublishWithoutLinks command.
 * @export
 * @interface PublishWithoutLinks
 */
export interface PublishWithoutLinks {
    /**
     * 
     * @type {TypeCommands}
     * @memberof PublishWithoutLinks
     */
    'type'?: TypeCommands;
    /**
     * 
     * @type {PublishWithoutLinksAttributes}
     * @memberof PublishWithoutLinks
     */
    'attributes'?: PublishWithoutLinksAttributes;
}



