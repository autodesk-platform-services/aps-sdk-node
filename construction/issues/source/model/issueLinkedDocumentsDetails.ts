
import { IssueLinkedDocumentsDetailsPosition } from './issueLinkedDocumentsDetailsPosition';
import { IssueLinkedDocumentsDetailsViewable } from './issueLinkedDocumentsDetailsViewable';

/**
 * Information about the individual viewable.
 * @export
 * @interface IssueLinkedDocumentsDetails
 */
export interface IssueLinkedDocumentsDetails {
    /**
     * 
     * @type {IssueLinkedDocumentsDetailsViewable}
     * @memberof IssueLinkedDocumentsDetails
     */
    'viewable'?: IssueLinkedDocumentsDetailsViewable;
    /**
     * 
     * @type {IssueLinkedDocumentsDetailsPosition}
     * @memberof IssueLinkedDocumentsDetails
     */
    'position'?: IssueLinkedDocumentsDetailsPosition;
    /**
     * The ID of the element the pushpin is associated with in the viewable.
     * @type {number}
     * @memberof IssueLinkedDocumentsDetails
     */
    'objectId'?: number;
    /**
     * An external identifier of the element the pushpin is associated with in the viewable.
     * @type {string}
     * @memberof IssueLinkedDocumentsDetails
     */
    'externalId'?: string;
    /**
     * The viewer state at the time the pushpin was created. Maximum length: 2,500,000 characters. You can get the viewer state object by calling ViewerState.getState(). To restore the viewer instance use ViewerState.restoreState(). See the `Viewer API documentation https://developer.autodesk.com/en/docs/viewer/v2/reference/javascript/viewerstate/`_ for more details.
     * @type {object}
     * @memberof IssueLinkedDocumentsDetails
     */
    'viewerState'?: object;
}

