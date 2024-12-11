/* tslint:disable */
/* eslint-disable */

import { CheckPermissionPayload } from './checkPermissionPayload';
import { ListItemsPayload } from './listItemsPayload';
import { ListItemsPayloadAttributes } from './listItemsPayloadAttributes';
import { ListItemsPayloadRelationships } from './listItemsPayloadRelationships';
import { ListRefsPayload } from './listRefsPayload';
import { PublishModelJobPayload } from './publishModelJobPayload';
import { PublishModelPayload } from './publishModelPayload';
import { PublishWithoutLinksPayload } from './publishWithoutLinksPayload';
import { TypeCommands } from './typeCommands';

/**
 * @type CommandPayloadData
 * Pick one of the following data objects to capture the input data for the command you want to execute.
 * @export
 */
export type CommandPayloadData = CheckPermissionPayload | ListItemsPayload | ListRefsPayload | PublishModelJobPayload | PublishModelPayload | PublishWithoutLinksPayload;


