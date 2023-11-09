import { Action } from './action';
import { Type } from './type';
/**
 *
 * @export
 * @interface CommandPayloadDataAttributesExtension
 */
export interface CommandPayloadDataAttributesExtension {
    /**
     *
     * @type {Type}
     * @memberof CommandPayloadDataAttributesExtension
     */
    'type': Type;
    /**
     *
     * @type {string}
     * @memberof CommandPayloadDataAttributesExtension
     */
    'version': string;
    /**
     * An array containing the list of permitted actions to check for. Possible values: **read, view, download, collaborate, write, create, upload, updateMetaData, delete, admin, share** See the tables under the initial description of the command for details.
     * @type {Array<Action>}
     * @memberof CommandPayloadDataAttributesExtension
     */
    'data'?: Array<Action>;
}
