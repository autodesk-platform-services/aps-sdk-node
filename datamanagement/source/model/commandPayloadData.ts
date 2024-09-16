
import { CheckPermissionPayload } from './checkPermissionPayload';
import { GetPublishModelJobPayload } from './getPublishModelJobPayload';
import { GetPublishModelJobPayloadAttributes } from './getPublishModelJobPayloadAttributes';
import { GetPublishModelJobPayloadRelationships } from './getPublishModelJobPayloadRelationships';
import { ListItemsPayload } from './listItemsPayload';
import { ListRefsPayload } from './listRefsPayload';
import { PublishModelPayload } from './publishModelPayload';
import { PublishWithoutLinksPayload } from './publishWithoutLinksPayload';
import { TypeCommands } from './typeCommands';

/**
 * @type CommandPayloadData
 * @export
 */
export type CommandPayloadData = CheckPermissionPayload | GetPublishModelJobPayload | ListItemsPayload | ListRefsPayload | PublishModelPayload | PublishWithoutLinksPayload;


