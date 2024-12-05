/* tslint:disable */
/* eslint-disable */

import { CheckPermission } from './checkPermission';
import { ListItems } from './listItems';
import { ListItemsAttributes } from './listItemsAttributes';
import { ListItemsRelationships } from './listItemsRelationships';
import { ListRefs } from './listRefs';
import { PublishModel } from './publishModel';
import { PublishModelJob } from './publishModelJob';
import { PublishWithoutLinks } from './publishWithoutLinks';
import { TypeCommands } from './typeCommands';
import { VersionData } from './versionData';

/**
 * @type CommandData
 * The ``data`` object that is returned will be one of the following, depending on the command that was executed.
 * @export
 */
export type CommandData = CheckPermission | ListItems | ListRefs | PublishModel | PublishModelJob | PublishWithoutLinks;


