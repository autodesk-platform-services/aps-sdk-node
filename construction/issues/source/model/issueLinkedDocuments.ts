
import { IssueLinkedDocumentsDetails } from './issueLinkedDocumentsDetails';

/**
 * 
 * @export
 * @interface IssueLinkedDocuments
 */
export interface IssueLinkedDocuments {
    /**
     * The type of file. Possible values: TwoDVectorPushpin (3D models) TwoDRasterPushpin (2D sheets and views)
     * @type {string}
     * @memberof IssueLinkedDocuments
     */
    'type'?: string;
    /**
     * The ID of the file associated with the issue (pushpin). Note the we do not currently support data associated with the ACC Build Sheet tool.
     * @type {string}
     * @memberof IssueLinkedDocuments
     */
    'urn'?: string;
    /**
     * The Autodesk ID of the user who created the pushpin issue.
     * @type {string}
     * @memberof IssueLinkedDocuments
     */
    'createdBy'?: string;
    /**
     * The date and time the pushpin was created, in ISO8601 format.
     * @type {string}
     * @memberof IssueLinkedDocuments
     */
    'createdAt'?: string;
    /**
     * The version of the file the pushin issue was added to. For information about file versions, see the Data Management API.
     * @type {number}
     * @memberof IssueLinkedDocuments
     */
    'createdAtVersion'?: number;
    /**
     * The Autodesk ID of the user who closed the pushpin issue.
     * @type {string}
     * @memberof IssueLinkedDocuments
     */
    'closedBy'?: string;
    /**
     * The date and time the pushpin issue was closed, in ISO8601 format.
     * @type {string}
     * @memberof IssueLinkedDocuments
     */
    'closedAt'?: string;
    /**
     * The version of the file when the pushpin issue was closed.
     * @type {number}
     * @memberof IssueLinkedDocuments
     */
    'closedAtVersion'?: number;
    /**
     * 
     * @type {IssueLinkedDocumentsDetails}
     * @memberof IssueLinkedDocuments
     */
    'details'?: IssueLinkedDocumentsDetails;
}

