/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './command-execution-status';
import { ListRefsPayloadAttributesExtension } from './list-refs-payload-attributes-extension';

/**
 * Contains the properties of the response to the ListRefs command.
 * @export
 * @interface ListRefsAttributes
 */
export interface ListRefsAttributes {
    /**
     * 
     * @type {CommandExecutionStatus}
     * @memberof ListRefsAttributes
     */
    'status'?: CommandExecutionStatus;
    /**
     * 
     * @type {ListRefsPayloadAttributesExtension}
     * @memberof ListRefsAttributes
     */
    'extension'?: ListRefsPayloadAttributesExtension;
}



