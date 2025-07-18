

/**
 * Access for signed resource Possible values: read, write, readwrite Default value: read
 * @export
 * @enum {string}
 */

export const Access = {
    Read: 'Read',
    Write: 'Write',
    ReadWrite: 'ReadWrite'
} as const;

export type Access = typeof Access[keyof typeof Access];



