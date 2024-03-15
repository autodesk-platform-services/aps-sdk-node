/* tslint:disable */
/* eslint-disable */

import { ManifestDerivatives } from './manifest-derivatives';

/**
 * 
 * @export
 * @interface Manifest
 */
export interface Manifest {
    /**
     * The URL-safe Base64 encoded URN of the source design.
     * @type {string}
     * @memberof Manifest
     */
    'urn': string;
    /**
     * An array of objects, where each object represents a derivative of the source design.
     * @type {Array<ManifestDerivative>}
     * @memberof Manifest
     */
    'derivatives': Array<ManifestDerivatives>;
    /**
     * - ``true``: There is a thumbnail for the source design. - ``false``: There is no thumbnail for the source design. 
     * @type {string}
     * @memberof Manifest
     */
    'hasThumbnail': string;
    /**
     * Indicates the overall progress of all translation jobs, as a percentage. Once all requested derivatives are generated, the value changes to ``complete``.
     * @type {string}
     * @memberof Manifest
     */
    'progress': string;
    /**
     * The type of data that is returned. Always ``manifest``.
     * @type {string}
     * @memberof Manifest
     */
    'type': string;
    /**
     * Specifies the data center where the manifest, derivatives, and references are stored. Possible values are:   - ``US`` - Data center for the US region. - ``EMEA`` - Data center for European Union, Middle East, and Africa.  
     * @type {string}
     * @memberof Manifest
     */
    'region': string;
    /**
     * Indicates the version of the schema that the manifest is based on.
     * @type {string}
     * @memberof Manifest
     */
    'version': string;
    /**
     * Overall status of all translation jobs for the source design. Possible values are: ``pending``, ``success``, ``inprogress``, ``failed``, ``timeout``.
     * @type {string}
     * @memberof Manifest
     */
    'status': string;
}

