/* tslint:disable */
/* eslint-disable */

import { CheckPermissionResponse } from './check-permission-response';
import { GetPublishModelJobResp } from './get-publish-model-job-resp';
import { ListItemsResponse } from './list-items-response';
import { ListItemsResponseAttributes } from './list-items-response-attributes';
import { ListItemsResponseRelationships } from './list-items-response-relationships';
import { ListRefsResponse } from './list-refs-response';
import { PublishModelResponse } from './publish-model-response';
import { PublishWithoutLinksResponse } from './publish-without-links-response';
import { TypeCommands } from './type-commands';
import { VersionData } from './version-data';

/**
 * @type CommandData
 * The ``data`` object that is returned will be one of the following, depending on the command that was executed.
 * @export
 */
export type CommandData = CheckPermissionResponse | GetPublishModelJobResp | ListItemsResponse | ListRefsResponse | PublishModelResponse | PublishWithoutLinksResponse;


