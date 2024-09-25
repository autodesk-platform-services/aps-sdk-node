/* tslint:disable */
/* eslint-disable */

import { PublishModelCommandRelationships } from './publish-model-command-relationships';
import { PublishWithoutLinksCommandAttributes } from './publish-without-links-command-attributes';
import { TypeCommands } from './type-commands';

/**
 * An object that contains the input data to execute the PublishWithoutLinks command.  The PublishWithoutLinks command publishes the latest version of a Collaboration for Revit (C4R) model without the links it contains to BIM 360 Docs. See the [Developer\'s Guide topic on the PublishWithoutLinks command](/en/docs/data/v2/developers_guide/commands/publishwithoutlinks/) for more information. 
 * @export
 * @interface PublishWithoutLinksCommand
 */
export interface PublishWithoutLinksCommand {
    /**
     * 
     * @type {TypeCommands}
     * @memberof PublishWithoutLinksCommand
     */
    'type'?: TypeCommands;
    /**
     * 
     * @type {PublishWithoutLinksCommandAttributes}
     * @memberof PublishWithoutLinksCommand
     */
    'attributes'?: PublishWithoutLinksCommandAttributes;
    /**
     * 
     * @type {PublishModelCommandRelationships}
     * @memberof PublishWithoutLinksCommand
     */
    'relationships'?: PublishModelCommandRelationships;
}



