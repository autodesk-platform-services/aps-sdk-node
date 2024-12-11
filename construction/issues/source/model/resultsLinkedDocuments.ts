/* tslint:disable */
/* eslint-disable */

import { ResultsLinkedDocumentsDetails } from './resultsLinkedDocumentsDetails';

/**
 * 
 * @export
 * @interface ResultsLinkedDocuments
 */
export interface ResultsLinkedDocuments {
    /**
     * The type of file. Possible values: TwoDVectorPushpin (3D models) TwoDRasterPushpin (2D sheets and views)
     * @type {string}
     * @memberof ResultsLinkedDocuments
     */
    'type'?: string;
    /**
     * The ID of the file associated with the issue (pushpin). Note the we do not currently support data associated with the ACC Build Sheet tool.
     * @type {string}
     * @memberof ResultsLinkedDocuments
     */
    'urn'?: string;
    /**
     * The Autodesk ID of the user who created the pushpin issue.
     * @type {string}
     * @memberof ResultsLinkedDocuments
     */
    'createdBy'?: string;
    /**
     * The date and time the pushpin was created, in ISO8601 format.
     * @type {string}
     * @memberof ResultsLinkedDocuments
     */
    'createdAt'?: string;
    /**
     * The version of the file the pushin issue was added to. For information about file versions, see the Data Management API.
     * @type {number}
     * @memberof ResultsLinkedDocuments
     */
    'createdAtVersion'?: number;
    /**
     * The Autodesk ID of the user who closed the pushpin issue.
     * @type {string}
     * @memberof ResultsLinkedDocuments
     */
    'closedBy'?: string;
    /**
     * The date and time the pushpin issue was closed, in ISO8601 format.
     * @type {string}
     * @memberof ResultsLinkedDocuments
     */
    'closedAt'?: string;
    /**
     * The version of the file when the pushpin issue was closed.
     * @type {number}
     * @memberof ResultsLinkedDocuments
     */
    'closedAtVersion'?: number;
    /**
     * 
     * @type {ResultsLinkedDocumentsDetails}
     * @memberof ResultsLinkedDocuments
     */
    'details'?: ResultsLinkedDocumentsDetails;
}

