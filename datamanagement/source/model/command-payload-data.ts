/* tslint:disable */
/* eslint-disable */

import { CheckPermissionCommand } from './check-permission-command';
import { GetPublishModelJobCommand } from './get-publish-model-job-command';
import { ListItemsCommand } from './list-items-command';
import { ListItemsCommandAttributes } from './list-items-command-attributes';
import { ListItemsCommandRelationships } from './list-items-command-relationships';
import { ListRefsCommand } from './list-refs-command';
import { PublishModelCommand } from './publish-model-command';
import { PublishWithoutLinksCommand } from './publish-without-links-command';
import { TypeCommands } from './type-commands';

/**
 * @type CommandPayloadData
 * Pick one of the following data objects to capture the input data for the command you want to execute.
 * @export
 */
export type CommandPayloadData = CheckPermissionCommand | GetPublishModelJobCommand | ListItemsCommand | ListRefsCommand | PublishModelCommand | PublishWithoutLinksCommand;


