/* tslint:disable */
/* eslint-disable */

import { CommandExecutionStatus } from './commandExecutionStatus';
import { ListRefsPayloadAttributesExtension } from './listRefsPayloadAttributesExtension';

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



