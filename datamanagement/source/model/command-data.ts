/* tslint:disable */
/* eslint-disable */

import { CheckPermission } from './check-permission';
import { GetPublishModelJobResp } from './get-publish-model-job-resp';
import { ListItems } from './list-items';
import { ListItemsAttributes } from './list-items-attributes';
import { ListItemsRelationships } from './list-items-relationships';
import { ListRefs } from './list-refs';
import { PublishModel } from './publish-model';
import { PublishWithoutLinks } from './publish-without-links';
import { TypeCommands } from './type-commands';
import { VersionData } from './version-data';

/**
 * @type CommandData
 * The ``data`` object that is returned will be one of the following, depending on the command that was executed.
 * @export
 */
export type CommandData = CheckPermission | GetPublishModelJobResp | ListItems | ListRefs | PublishModel | PublishWithoutLinks;


