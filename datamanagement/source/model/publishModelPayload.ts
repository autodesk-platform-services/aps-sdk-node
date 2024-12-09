/* tslint:disable */
/* eslint-disable */

import { PublishModelPayloadAttributes } from './publishModelPayloadAttributes';
import { PublishModelPayloadRelationships } from './publishModelPayloadRelationships';
import { TypeCommands } from './typeCommands';

/**
 * An object that contains the input required to execute the PublishModel command.  The PublishModel Command publishes the latest version of a Collaboration for Revit (C4R) model to BIM 360 Docs.  See the [Developer\'s Guide topic on the PublishModel command](/en/docs/data/v2/developers_guide/commands/publishmodel/) for more information. 
 * @export
 * @interface PublishModelPayload
 */
export interface PublishModelPayload {
    /**
     * 
     * @type {TypeCommands}
     * @memberof PublishModelPayload
     */
    'type'?: TypeCommands;
    /**
     * 
     * @type {PublishModelPayloadAttributes}
     * @memberof PublishModelPayload
     */
    'attributes'?: PublishModelPayloadAttributes;
    /**
     * 
     * @type {PublishModelPayloadRelationships}
     * @memberof PublishModelPayload
     */
    'relationships'?: PublishModelPayloadRelationships;
}



