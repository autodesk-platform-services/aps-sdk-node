/* tslint:disable */
/* eslint-disable */


/**
 * The current status of the issue. To check the available statuses for the project, call GET users/me and check the permitted statuses list (issue.new.permittedStatuses). For more information about statuses, see the Help documentation.
 * @export
 * @enum {string}
 */

export const Status = {
    Draft: 'draft',
    Open: 'open',
    Pending: 'pending',
    InProgress: 'in_progress',
    InReview: 'in_review',
    Completed: 'completed',
    NotApproved: 'not_approved',
    InDispute: 'in_dispute',
    Closed: 'closed'
} as const;

export type Status = typeof Status[keyof typeof Status];



