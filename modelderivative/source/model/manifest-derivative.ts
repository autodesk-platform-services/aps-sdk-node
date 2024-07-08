/* tslint:disable */
/* eslint-disable */

import { ManifestResources } from './manifest-resources';
import { Messages } from './messages';

/**
 * Represents a derivative generated for the source design.
 * @export
 * @interface ManifestDerivative
 */
export interface ManifestDerivative {
    /**
     * The name of the resource.
     * @type {string}
     * @memberof ManifestDerivative
     */
    'name': string;
    /**
     * - ``true``: The derivative has a thumbnail. - ``false``: The derivative does not have a thumbnail. 
     * @type {string}
     * @memberof ManifestDerivative
     */
    'hasThumbnail': string;
    /**
     * Indicates the progress of the process generating this derivative, as a percentage. Once complete, the value changes to ``complete``.
     * @type {string}
     * @memberof ManifestDerivative
     */
    'progress': string;
    /**
     * The file type/format of the derivative. Possible values are: ``dwg``, ``fbx``, ``ifc``, ``iges``, ``obj`` , ``step``, ``stl``, ``svf``, ``svf2``,  ``thumbnail``.
     * @type {string}
     * @memberof ManifestDerivative
     */
    'outputType': string;
    /**
     * Status of the task generating this derivative. Possible values are: ``pending``, ``inprogress``, ``success``, ``failed``, ``timeout``.
     * @type {string}
     * @memberof ManifestDerivative
     */
    'status': string;
    /**
     * 
     * @type {Array<Messages>}
     * @memberof ManifestDerivative
     */
    'messages'?: Array<Messages>;
    /**
     * An array of objects, where each object represents a resource generated for the derivative. For example, a Model View (Viewable) of the source design.
     * @type {Array<ManifestResources>}
     * @memberof ManifestDerivative
     */
    'children'?: Array<ManifestResources>;
}

