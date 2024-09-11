
import { CheckPermissionPayload } from './checkPermissionPayload';
import { GetPublishModelJobPayload } from './getPublishModelJobPayload';
import { ListItemsPayload } from './listItemsPayload';
import { ListItemsPayloadAttributes } from './listItemsPayloadAttributes';
import { ListItemsPayloadRelationships } from './listItemsPayloadRelationships';
import { ListRefsPayload } from './listRefsPayload';
import { PublishModelPayload } from './publishModelPayload';
import { PublishWithoutLinksPayload } from './publishWithoutLinksPayload';
import { Type } from './type';

/**
 * @type CommandPayloadData
 * @export
 */
export type CommandPayloadData = CheckPermissionPayload | GetPublishModelJobPayload | ListItemsPayload | ListRefsPayload | PublishModelPayload | PublishWithoutLinksPayload;


