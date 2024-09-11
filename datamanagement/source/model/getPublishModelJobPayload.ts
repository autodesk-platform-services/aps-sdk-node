
import { GetPublishModelJobPayloadAttributes } from './getPublishModelJobPayloadAttributes';
import { GetPublishModelJobPayloadRelationships } from './getPublishModelJobPayloadRelationships';
import { Type } from './type';

/**
 * An object that contains the input data required to execute the GetPublishModelJob command.  The ListRefs verifies whether a Collaboration for Revit (C4R) model needs to be published to BIM 360 Docs. For more information, see the [GetPublishModelJob topic in the overview section](/en/docs/data/v2/developers_guide/commands/getpublishmodeljob).
 * @export
 * @interface GetPublishModelJobPayload
 */
export interface GetPublishModelJobPayload {
    /**
     * 
     * @type {Type}
     * @memberof GetPublishModelJobPayload
     */
    'type'?: Type;
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



