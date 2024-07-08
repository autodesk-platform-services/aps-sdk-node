/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Fields = {
    Id: 'id',
    DisplayId: 'displayId',
    Title: 'title',
    Description: 'description',
    IssueTypeId: 'issueTypeId',
    IssueSubtypeId: 'issueSubtypeId',
    Status: 'status',
    AssignedTo: 'assignedTo',
    AssignedToType: 'assignedToType',
    DueDate: 'dueDate',
    StartDate: 'startDate',
    LocationId: 'locationId',
    LocationDetails: 'locationDetails',
    RootCauseTitle: 'rootCauseTitle',
    RootCauseId: 'rootCauseId',
    PermittedStatuses: 'permittedStatuses',
    PermittedAttributes: 'permittedAttributes',
    PermittedActions: 'permittedActions',
    Published: 'published',
    CommentCount: 'commentCount',
    OpenedBy: 'openedBy',
    OpenedAt: 'openedAt',
    ClosedBy: 'closedBy',
    ClosedAt: 'closedAt',
    CreatedBy: 'createdBy',
    CreatedAt: 'createdAt',
    UpdatedBy: 'updatedBy',
    UpdatedAt: 'updatedAt',
    CustomAttributes: 'customAttributes'
} as const;

export type Fields = typeof Fields[keyof typeof Fields];



