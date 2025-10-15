

/**
 * A list of attachments to add to the issue.
 * @export
 * @interface Attachment
 */
export interface Attachment {
    /**
     * The unique identifier for the attachment, set by the client when creating the attachment reference. This can be any unique GUID, but it is recommended to use the OSS storage GUID. For more information, see the Upload Issue Attachment tutorial.
     * @type {string}
     * @memberof Attachment
     */
    'attachmentId'?: string;
    /**
     * The human-readable display name for the attachment, including the file extension (for example, .pdf, .jpg, .dwg). This name appears in the ACC web UI and is used when downloading the file from the issue.
     * @type {string}
     * @memberof Attachment
     */
    'displayName'?: string;
    /**
     * The unique filename of the attachment, typically formatted as {attachmentId}.{fileExtension}.
 * This value must exactly match the name of the file stored in Autodesk Docs (OSS) that you uploaded via the OSS process.
 * 
 * For more information, see the Upload Issue Attachment tutorial.
     * @type {string}
     * @memberof Attachment
     */
    'fileName'?: string;
    /**
     * The type of attachment to create. Set to issue-attachment. Will always be: issue-attachment
     * @type {string}
     * @memberof Attachment
     */
    'attachmentType'?: AttachmentAttachmentTypeEnum;
    /**
     * The Object Storage Service (OSS) URN that uniquely identifies where the file is stored in Autodesk’s cloud infrastructure. You obtain this value after uploading the file to OSS (see the Upload Issue Attachment tutorial) or by retrieving it from an existing attachment (see the Downloading Issue Attachments tutorial).
     * @type {string}
     * @memberof Attachment
     */
    'storageUrn'?: string;
    /**
     * The size of the file in bytes.
     * @type {number}
     * @memberof Attachment
     */
    'fileSize'?: number;
    /**
     * The file extension (without the dot), for example pdf or jpg.
     * @type {string}
     * @memberof Attachment
     */
    'fileType'?: string;
    /**
     * The ID of the issue that owns the attachment.
     * @type {string}
     * @memberof Attachment
     */
    'domainEntityId'?: string;
    /**
     * The document lineage URN for the attachment’s source file.
     * @type {string}
     * @memberof Attachment
     */
    'lineageUrn'?: string;
    /**
     * The document version number.
     * @type {number}
     * @memberof Attachment
     */
    'version'?: number;
    /**
     * The URN for the specific file version that was attached to the issue. This may differ from the latest version URN (tipVersionUrn) if a newer version of the file exists in Autodesk Docs.
     * @type {string}
     * @memberof Attachment
     */
    'versionUrn'?: string;
    /**
     * The URN for the latest (tip) version of the file.
     * @type {string}
     * @memberof Attachment
     */
    'tipVersionUrn'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Attachment
     */
    'bubbleUrn'?: string;
    /**
     * The ID of the user who created the issue attachment. For details about the user, call GET users.
     * @type {string}
     * @memberof Attachment
     */
    'createdBy'?: string;
    /**
     * The date and time when the issue attachment was created, in ISO8601 format.
     * @type {string}
     * @memberof Attachment
     */
    'createdOn'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Attachment
     */
    'modifiedBy'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof Attachment
     */
    'modifiedOn'?: string;
    /**
     * The ID of the user who deleted the issue attachment, if applicable. For details about the user, call GET users.
     * @type {string}
     * @memberof Attachment
     */
    'deletedBy'?: string;
    /**
     * The date and time when the issue attachment was deleted, if applicable.
     * @type {string}
     * @memberof Attachment
     */
    'deletedOn'?: string;
    /**
     * true: The attachment has been deleted.
 * false: (default) The attachment has not been deleted.
     * @type {boolean}
     * @memberof Attachment
     */
    'isDeleted'?: boolean;
}

export const AttachmentAttachmentTypeEnum = {
    IssueAttachment: 'issue-attachment'
} as const;

export type AttachmentAttachmentTypeEnum = typeof AttachmentAttachmentTypeEnum[keyof typeof AttachmentAttachmentTypeEnum];


