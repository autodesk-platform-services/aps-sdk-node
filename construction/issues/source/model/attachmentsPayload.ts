
import { AttachmentObject } from './attachmentObject';

/**
 * Represents the payload for adding attachments to an issue.
 * @export
 * @interface AttachmentsPayload
 */
export interface AttachmentsPayload {
    /**
     * The unique identifier of the issue to which the attachments will be added.
     * @type {string}
     * @memberof AttachmentsPayload
     */
    'domainEntityId'?: string;
    /**
     * The list of attachments to be added to the issue.
     * @type {Array<AttachmentObject>}
     * @memberof AttachmentsPayload
     */
    'attachments'?: Array<AttachmentObject>;
}

