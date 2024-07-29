/* tslint:disable */
/* eslint-disable */


/**
 * Specifies how spaces are translated. Applicable only when the source design is of type IFC. Possible values are:  - ``hide`` - (Default) spaces are translated but are not visible by default. - ``show`` - Spaces are translated and are visible by default. - ``skip`` - Spaces are not translated.  **Note:** These options are applicable only when ``conversionMethod`` is set to ``modern`` or ``v3``.
 * @export
 * @enum {string}
 */

export const Spaces = {
    Hide: 'hide',
    Show: 'show',
    Skip: 'skip'
} as const;

export type Spaces = typeof Spaces[keyof typeof Spaces];



