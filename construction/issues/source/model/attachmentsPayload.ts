
import { AttachmentObject } from './attachmentObject';

/**
 * 
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
     * 
     * @type {Array<AttachmentObject>}
     * @memberof AttachmentsPayload
     */
    'attachments'?: Array<AttachmentObject>;
}

