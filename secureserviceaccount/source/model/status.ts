

/**
 * 
 * @export
 * @enum {string}
 */

export const Status = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED'
} as const;

export type Status = typeof Status[keyof typeof Status];



