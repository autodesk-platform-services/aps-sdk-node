/* tslint:disable */
/* eslint-disable */

import { PublishWithoutLinksResponseAttributes } from './publish-without-links-response-attributes';
import { TypeCommands } from './type-commands';

/**
 * The ``data`` object returned by the PublishWithoutLinks command.
 * @export
 * @interface PublishWithoutLinksResponse
 */
export interface PublishWithoutLinksResponse {
    /**
     * 
     * @type {TypeCommands}
     * @memberof PublishWithoutLinksResponse
     */
    'type'?: TypeCommands;
    /**
     * 
     * @type {PublishWithoutLinksResponseAttributes}
     * @memberof PublishWithoutLinksResponse
     */
    'attributes'?: PublishWithoutLinksResponseAttributes;
}



