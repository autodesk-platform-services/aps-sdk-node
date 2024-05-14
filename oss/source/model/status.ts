/* tslint:disable */
/* eslint-disable */


/**
 * Indicates whether this particular part uploaded to S3 is valid. Possible values are:  - ``Pending`` - No such part was uploaded to S3 for this index.  - ``Unexpected`` - The eTag of the part in S3 does not match the one provided in the request.  - ``TooSmall`` - A chunk uploaded to S3 is smaller than 5MB. Only the final chunk can be smaller than 5MB.  - ``Unexpected+TooSmall`` - The chunk is both too small and has an eTag mismatch.  - ``Ok`` - The chunk has no issues.\' 
 * @export
 * @enum {string}
 */

export const Status = {
    Pending: 'Pending',
    Unexpected: 'Unexpected',
    TooSmall: 'TooSmall',
    UnexpectedTooSmall: 'Unexpected+TooSmall',
    Ok: 'Ok'
} as const;

export type Status = typeof Status[keyof typeof Status];



