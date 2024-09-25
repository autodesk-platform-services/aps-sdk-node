/* tslint:disable */
/* eslint-disable */


/**
 * The current stage of the command execution  process. Possible values:  - ``accepted`` - The command is ready to be executed.  - ``committed`` - The command is currently being executed. - ``complete`` - The command was successfully executed. - ``failed`` - There was an error and command execution was stopped prematurely.
 * @export
 * @enum {string}
 */

export const CommandExecutionStatus = {
    Accepted: 'accepted',
    Committed: 'committed',
    Complete: 'complete',
    Failed: 'failed'
} as const;

export type CommandExecutionStatus = typeof CommandExecutionStatus[keyof typeof CommandExecutionStatus];



