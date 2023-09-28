import { CommandDataAttributes } from './command-data-attributes';
/**
 *
 * @export
 * @interface CommandData
 */
export interface CommandData {
    /**
     *
     * @type {string}
     * @memberof CommandData
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof CommandData
     */
    'id'?: string;
    /**
     *
     * @type {CommandDataAttributes}
     * @memberof CommandData
     */
    'attributes'?: CommandDataAttributes;
}
