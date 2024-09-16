
import { CheckPermission } from './checkPermission';
import { GetPublishModelJob } from './getPublishModelJob';
import { GetPublishModelJobAttributes } from './getPublishModelJobAttributes';
import { ListItems } from './listItems';
import { ListItemsRelationships } from './listItemsRelationships';
import { ListRefs } from './listRefs';
import { PublishModel } from './publishModel';
import { PublishWithoutLinks } from './publishWithoutLinks';
import { TypeCommands } from './typeCommands';
import { VersionData } from './versionData';

/**
 * @type CommandData
 * @export
 */
export type CommandData = CheckPermission | GetPublishModelJob | ListItems | ListRefs | PublishModel | PublishWithoutLinks;


