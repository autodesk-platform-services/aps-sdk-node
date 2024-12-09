/* tslint:disable */
/* eslint-disable */

import { CheckPermissionPayload } from './check-permission-payload';
import { ListItemsPayload } from './list-items-payload';
import { ListItemsPayloadAttributes } from './list-items-payload-attributes';
import { ListItemsPayloadRelationships } from './list-items-payload-relationships';
import { ListRefsPayload } from './list-refs-payload';
import { PublishModelJobPayload } from './publish-model-job-payload';
import { PublishModelPayload } from './publish-model-payload';
import { PublishWithoutLinksPayload } from './publish-without-links-payload';
import { TypeCommands } from './type-commands';

/**
 * @type CommandPayloadData
 * Pick one of the following data objects to capture the input data for the command you want to execute.
 * @export
 */
export type CommandPayloadData = CheckPermissionPayload | ListItemsPayload | ListRefsPayload | PublishModelJobPayload | PublishModelPayload | PublishWithoutLinksPayload;


