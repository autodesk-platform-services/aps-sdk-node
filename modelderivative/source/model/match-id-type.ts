/* tslint:disable */
/* eslint-disable */


/**
 * The first element of the array contains the name of the attribute to match (`objectid` or `externalId`). Subsequent elements contain the values to match.  For example, if you specify an array as: `\"$in\":[\"objectid\",1,2]`, the request will only return the properties of the objects with `objectid` = `1` and `2`. If you specify an array as `\"$in\":[\"externalId\",\"doc_982afc8a\",\"doc_afd75233\" ]` the request will only return the properties of the objects with `externalId` = `doc_982afc8a` and `doc_afd75233`.     
 * @export
 * @enum {string}
 */

export const MatchIdType = {
    ObjectId: 'objectid',
    ExternalId: 'externalId'
} as const;

export type MatchIdType = typeof MatchIdType[keyof typeof MatchIdType];



