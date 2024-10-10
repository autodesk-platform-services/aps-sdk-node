/* tslint:disable */
/* eslint-disable */

import { PublishWithoutLinksAttributes } from './publish-without-links-attributes';
import { TypeCommands } from './type-commands';

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



