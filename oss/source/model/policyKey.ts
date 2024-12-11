/* tslint:disable */
/* eslint-disable */


/**
 * Specifies the retention policy for the objects stored in the bucket. Possible values are:               - ``transient`` - Objects are retained for 24 hours. - ``temporary`` - Objects are retained for 30 days. - ``persistent`` - Objects are retained until they are deleted.
 * @export
 * @enum {string}
 */

export const PolicyKey = {
    Transient: 'transient',
    Temporary: 'temporary',
    Persistent: 'persistent'
} as const;

export type PolicyKey = typeof PolicyKey[keyof typeof PolicyKey];



