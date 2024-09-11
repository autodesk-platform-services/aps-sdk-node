
import { CheckPermission } from './checkPermission';
import { GetPublishModelJob } from './getPublishModelJob';
import { ListItems } from './listItems';
import { ListItemsAttributes } from './listItemsAttributes';
import { ListItemsRelationships } from './listItemsRelationships';
import { ListRefs } from './listRefs';
import { PublishModel } from './publishModel';
import { PublishWithoutLinks } from './publishWithoutLinks';
import { Type } from './type';
import { VersionData } from './versionData';

/**
 * @type CommandData
 * @export
 */
export type CommandData = CheckPermission | GetPublishModelJob | ListItems | ListRefs | PublishModel | PublishWithoutLinks;


