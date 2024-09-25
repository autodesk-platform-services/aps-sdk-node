/* tslint:disable */
/* eslint-disable */

import { PublishModelCommandAttributes } from './publish-model-command-attributes';
import { PublishModelCommandRelationships } from './publish-model-command-relationships';
import { TypeCommands } from './type-commands';

/**
 * An object that contains the input required to execute the PublishModel command.  The PublishModel Command publishes the latest version of a Collaboration for Revit (C4R) model to BIM 360 Docs.  See the [Developer\'s Guide topic on the PublishModel command](/en/docs/data/v2/developers_guide/commands/publishmodel/) for more information. 
 * @export
 * @interface PublishModelCommand
 */
export interface PublishModelCommand {
    /**
     * 
     * @type {TypeCommands}
     * @memberof PublishModelCommand
     */
    'type'?: TypeCommands;
    /**
     * 
     * @type {PublishModelCommandAttributes}
     * @memberof PublishModelCommand
     */
    'attributes'?: PublishModelCommandAttributes;
    /**
     * 
     * @type {PublishModelCommandRelationships}
     * @memberof PublishModelCommand
     */
    'relationships'?: PublishModelCommandRelationships;
}



