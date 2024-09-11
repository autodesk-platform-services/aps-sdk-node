

/**
 * Specifies where the hub is stored. Possible values are:  - ``US`` - Data center for the US region. - ``EMEA`` - Data center for the European Union, Middle East, and Africa regions. - ``APAC`` - Data center for the Australia region.
 * @export
 * @enum {string}
 */

export const Region = {
    Us: 'US',
    Emea: 'EMEA',
    Apac: 'APAC'
} as const;

export type Region = typeof Region[keyof typeof Region];



