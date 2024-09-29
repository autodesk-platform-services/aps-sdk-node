/* tslint:disable */
/* eslint-disable */

import { GetPublishModelJobPayloadAttributes } from './get-publish-model-job-payload-attributes';
import { GetPublishModelJobPayloadRelationships } from './get-publish-model-job-payload-relationships';
import { TypeCommands } from './type-commands';

/**
 * An object that contains the input data required to execute the GetPublishModelJob command.  The ListRefs verifies whether a Collaboration for Revit (C4R) model needs to be published to BIM 360 Docs. For more information, see the [GetPublishModelJob topic in the overview section](/en/docs/data/v2/developers_guide/commands/getpublishmodeljob).
 * @export
 * @interface GetPublishModelJobPayload
 */
export interface GetPublishModelJobPayload {
    /**
     * 
     * @type {TypeCommands}
     * @memberof GetPublishModelJobPayload
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof GetPublishModelJobPayload
     */
    'id'?: string;
    /**
     * 
     * @type {GetPublishModelJobPayloadAttributes}
     * @memberof GetPublishModelJobPayload
     */
    'attributes'?: GetPublishModelJobPayloadAttributes;
    /**
     * 
     * @type {GetPublishModelJobPayloadRelationships}
     * @memberof GetPublishModelJobPayload
     */
    'relationships'?: GetPublishModelJobPayloadRelationships;
}



