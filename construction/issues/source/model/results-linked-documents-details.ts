/* tslint:disable */
/* eslint-disable */

import { IssueLinkedDocumentsDetailsPosition } from './issue-linked-documents-details-position';

/**
 * Information about the individual viewable.
 * @export
 * @interface ResultsLinkedDocumentsDetails
 */
export interface ResultsLinkedDocumentsDetails {
    /**
     * The individual viewable associated with the issue (pushpin). This is relevant for both individual 2D sheets and views within a 3D model, and individual PDF sheets within a multi-sheet PDF file. It is only relevant if the issue is associated with a file.
     * @type {object}
     * @memberof ResultsLinkedDocumentsDetails
     */
    'viewable'?: object;
    /**
     * 
     * @type {IssueLinkedDocumentsDetailsPosition}
     * @memberof ResultsLinkedDocumentsDetails
     */
    'position'?: IssueLinkedDocumentsDetailsPosition;
    /**
     * The ID of the element the pushpin is associated with in the viewable.
     * @type {number}
     * @memberof ResultsLinkedDocumentsDetails
     */
    'objectId'?: number;
    /**
     * An external identifier of the element the pushpin is associated with in the viewable.
     * @type {string}
     * @memberof ResultsLinkedDocumentsDetails
     */
    'externalId'?: string;
    /**
     * The viewer state at the time the pushpin was created. Maximum length: 2,500,000 characters. You can get the viewer state object by calling ViewerState.getState(). To restore the viewer instance use ViewerState.restoreState(). See the `Viewer API documentation https://developer.autodesk.com/en/docs/viewer/v2/reference/javascript/viewerstate/`_ for more details.
     * @type {object}
     * @memberof ResultsLinkedDocumentsDetails
     */
    'viewerState'?: object;
}

