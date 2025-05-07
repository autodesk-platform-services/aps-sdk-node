

/**
 * 
 * @export
 * @enum {string}
 */

export const SortBy = {
    CreatedAt: 'createdAt',
    UpdatedAt: 'updatedAt',
    CreatedBy: 'createdBy',
    DisplayId: 'displayId',
    Title: 'title',
    Description: 'description',
    Status: 'status',
    AssignedTo: 'assignedTo',
    AssignedToType: 'assignedToType',
    DueDate: 'dueDate',
    LocationDetails: 'locationDetails',
    Published: 'published',
    ClosedBy: 'closedBy',
    ClosedAt: 'closedAt',
    IssueSubType: 'issueSubType',
    IssueType: 'issueType',
    CustomAttributes: 'customAttributes',
    StartDate: 'startDate'
} as const;

export type SortBy = typeof SortBy[keyof typeof SortBy];



