
import { PublishModelPayloadRelationships } from './publishModelPayloadRelationships';
import { PublishWithoutLinksPayloadAttributes } from './publishWithoutLinksPayloadAttributes';
import { Type } from './type';

/**
 * An object that contains the input data to execute the PublishWithoutLinks command.  The PublishWithoutLinks command publishes the latest version of a Collaboration for Revit (C4R) model without the links it contains to BIM 360 Docs. See the [Developer\'s Guide topic on the PublishWithoutLinks command](/en/docs/data/v2/developers_guide/commands/publishwithoutlinks/) for more information. 
 * @export
 * @interface PublishWithoutLinksPayload
 */
export interface PublishWithoutLinksPayload {
    /**
     * 
     * @type {Type}
     * @memberof PublishWithoutLinksPayload
     */
    'type'?: Type;
    /**
     * 
     * @type {PublishWithoutLinksPayloadAttributes}
     * @memberof PublishWithoutLinksPayload
     */
    'attributes'?: PublishWithoutLinksPayloadAttributes;
    /**
     * 
     * @type {PublishModelPayloadRelationships}
     * @memberof PublishWithoutLinksPayload
     */
    'relationships'?: PublishModelPayloadRelationships;
}



