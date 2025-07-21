/* tslint:disable */
/* eslint-disable */


/**
 * The type of the resource. Possible values are ``lt``, ``le``, ``eq``, ``ge``, ``gt``, ``starts``, ``ends``, ``contains``.
 * @export
 * @enum {string}
 */

export const ComparisonTypes = {
    LessThan: 'lt',
    LessThanOrEqualTo: 'le',
    EqualTo: 'eq',
    GreaterThanOrEqualTO: 'ge',
    GreaterThan: 'gt',
    StartsWith: 'starts',
    EndsWith: 'ends',
    Contains: 'contains'
} as const;

export type ComparisonTypes = typeof ComparisonTypes[keyof typeof ComparisonTypes];



