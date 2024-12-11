/* tslint:disable */
/* eslint-disable */


/**
 * Specifies how storeys are translated. Applicable only when the source design is of type IFC. Possible values are:  - ``hide`` - (Default) Storeys are translated but not visible by default. - ``show`` - Storeys are translated and are visible by default. - ``skip`` - Storeys are not translated.  **Note:** These options are applicable only when ``conversionMethod`` is set to ``modern`` or ``v3``.
 * @export
 * @enum {string}
 */

export const BuildingStoreys = {
    Hide: 'hide',
    Show: 'show',
    Skip: 'skip'
} as const;

export type BuildingStoreys = typeof BuildingStoreys[keyof typeof BuildingStoreys];



