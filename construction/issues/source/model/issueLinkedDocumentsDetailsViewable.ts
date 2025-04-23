

/**
 * The individual viewable associated with the issue (pushpin). This is relevant for both individual 2D sheets and views within a 3D model, and individual PDF sheets within a multi-sheet PDF file. It is only relevant if the issue is associated with a file.
 * @export
 * @interface IssueLinkedDocumentsDetailsViewable
 */
export interface IssueLinkedDocumentsDetailsViewable {
    /**
     * Not relevant
     * @type {string}
     * @memberof IssueLinkedDocumentsDetailsViewable
     */
    'id'?: string;
    /**
     * The ID of the viewable (guid).
     * @type {string}
     * @memberof IssueLinkedDocumentsDetailsViewable
     */
    'guid'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof IssueLinkedDocumentsDetailsViewable
     */
    'viewableId'?: string;
    /**
     * The name of the viewable. Max length: 1000
     * @type {string}
     * @memberof IssueLinkedDocumentsDetailsViewable
     */
    'name'?: string;
    /**
     * True if it is a 3D viewable false if it is a 2D viewable
     * @type {boolean}
     * @memberof IssueLinkedDocumentsDetailsViewable
     */
    'is3D'?: boolean;
}

