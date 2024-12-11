/* tslint:disable */
/* eslint-disable */


/**
 * Specifies how openings are translated. Applicable only when the source design is of type IFC. Possible values are:  - ``hide`` - (Default) Openings are translated but are not visible by default. - ``show`` - Openings are translated and are visible by default. - ``skip`` - Openings are not translated.  **Note:** These options are applicable only when conversionMethod is set to ``modern`` or ``v3``. 
 * @export
 * @enum {string}
 */

export const OpeningElements = {
    Hide: 'hide',
    Show: 'show',
    Skip: 'skip'
} as const;

export type OpeningElements = typeof OpeningElements[keyof typeof OpeningElements];



