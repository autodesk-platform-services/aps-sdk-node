/* tslint:disable */
/* eslint-disable */

import { PublishModelJobPayloadAttributes } from './publish-model-job-payload-attributes';
import { PublishModelJobPayloadRelationships } from './publish-model-job-payload-relationships';
import { TypeCommands } from './type-commands';

/**
 * An object that contains the input data required to execute the GetPublishModelJob command.  The ListRefs verifies whether a Collaboration for Revit (C4R) model needs to be published to BIM 360 Docs. For more information, see the [GetPublishModelJob topic in the overview section](/en/docs/data/v2/developers_guide/commands/getpublishmodeljob).
 * @export
 * @interface PublishModelJobPayload
 */
export interface PublishModelJobPayload {
    /**
     * 
     * @type {TypeCommands}
     * @memberof PublishModelJobPayload
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof PublishModelJobPayload
     */
    'id'?: string;
    /**
     * 
     * @type {PublishModelJobPayloadAttributes}
     * @memberof PublishModelJobPayload
     */
    'attributes'?: PublishModelJobPayloadAttributes;
    /**
     * 
     * @type {PublishModelJobPayloadRelationships}
     * @memberof PublishModelJobPayload
     */
    'relationships'?: PublishModelJobPayloadRelationships;
}



