/* tslint:disable */
/* eslint-disable */

import { GetPublishModelJobCommandAttributes } from './get-publish-model-job-command-attributes';
import { GetPublishModelJobCommandRelationships } from './get-publish-model-job-command-relationships';
import { TypeCommands } from './type-commands';

/**
 * An object that contains the input data required to execute the GetPublishModelJob command.  The ListRefs verifies whether a Collaboration for Revit (C4R) model needs to be published to BIM 360 Docs. For more information, see the [GetPublishModelJob topic in the overview section](/en/docs/data/v2/developers_guide/commands/getpublishmodeljob).
 * @export
 * @interface GetPublishModelJobCommand
 */
export interface GetPublishModelJobCommand {
    /**
     * 
     * @type {TypeCommands}
     * @memberof GetPublishModelJobCommand
     */
    'type'?: TypeCommands;
    /**
     * A unique ID assigned to the process executing the command.
     * @type {string}
     * @memberof GetPublishModelJobCommand
     */
    'id'?: string;
    /**
     * 
     * @type {GetPublishModelJobCommandAttributes}
     * @memberof GetPublishModelJobCommand
     */
    'attributes'?: GetPublishModelJobCommandAttributes;
    /**
     * 
     * @type {GetPublishModelJobCommandRelationships}
     * @memberof GetPublishModelJobCommand
     */
    'relationships'?: GetPublishModelJobCommandRelationships;
}



