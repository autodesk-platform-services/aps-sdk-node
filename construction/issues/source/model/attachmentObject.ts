

/**
 * A list of attachments to add to the issue.
 * @export
 * @interface AttachmentObject
 */
export interface AttachmentObject {
    /**
     * The unique identifier for the attachment, set by the client when creating the attachment reference. This can be any unique GUID, but it is recommended to use the OSS storage GUID. For more information, see the Upload Issue Attachment tutorial.
     * @type {string}
     * @memberof AttachmentObject
     */
    'attachmentId': string;
    /**
     * The human-readable display name for the attachment, including the file extension (for example, .pdf, .jpg, .dwg). This name appears in the ACC web UI and is used when downloading the file from the issue.
     * @type {string}
     * @memberof AttachmentObject
     */
    'displayName': string;
    /**
     * The unique filename of the attachment, typically formatted as {attachmentId}.{fileExtension}.
 * This value must exactly match the name of the file stored in Autodesk Docs (OSS) that you uploaded via the OSS process.
 * 
 * For more information, see the Upload Issue Attachment tutorial.
     * @type {string}
     * @memberof AttachmentObject
     */
    'fileName': string;
    /**
     * The type of attachment to create. Set to issue-attachment. Will always be: issue-attachment
     * @type {string}
     * @memberof AttachmentObject
     */
    'attachmentType': AttachmentObjectAttachmentTypeEnum;
    /**
     * The Object Storage Service (OSS) URN that uniquely identifies where the file is stored in Autodesk’s cloud infrastructure. You obtain this value after uploading the file to OSS (see the Upload Issue Attachment tutorial) or by retrieving it from an existing attachment (see the Downloading Issue Attachments tutorial).
     * @type {string}
     * @memberof AttachmentObject
     */
    'storageUrn': string;
}

export const AttachmentObjectAttachmentTypeEnum = {
    IssueAttachment: 'issue-attachment'
} as const;

export type AttachmentObjectAttachmentTypeEnum = typeof AttachmentObjectAttachmentTypeEnum[keyof typeof AttachmentObjectAttachmentTypeEnum];


