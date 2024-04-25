/* tslint:disable */
/* eslint-disable */


/**
 * **Not applicable for Head operation** The optional information you can request for. To request more than one of the following, specify this parameter multiple times in the request.  Possible values:   - ``createdDate``  - ``lastAccessedDate``  - ``lastModifiedDate``  - ``userDefinedMetadata`` 
 * @export
 * @enum {string}
 */

export const With = {
    CreatedDate: 'createdDate',
    LastAccessedDate: 'lastAccessedDate',
    LastModifiedDate: 'lastModifiedDate',
    UserDefinedMetadata: 'userDefinedMetadata'
} as const;

export type With = typeof With[keyof typeof With];



