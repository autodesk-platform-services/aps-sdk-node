/* tslint:disable */
/* eslint-disable */


/**
 * The type of this resource. Possible values are ``commands``.
 * @export
 * @enum {string}
 */

export const TypeCommands = {
    Commands: 'commands'
} as const;

export type TypeCommands = typeof TypeCommands[keyof typeof TypeCommands];



