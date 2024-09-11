

/**
 * Describes the direction of data flow in the relationship. Possible values are:  - ``to`` - Data flows from this resource to the related resource. - ``from`` - Data flows from the related resource to this resource. 
 * @export
 * @enum {string}
 */

export const MetarefsDirection = {
    From: 'from',
    To: 'to'
} as const;

export type MetarefsDirection = typeof MetarefsDirection[keyof typeof MetarefsDirection];



