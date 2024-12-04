/* tslint:disable */
/* eslint-disable */

import { Messages } from './messages';

/**
 * Represents a resource generated for a derivative.
 * @export
 * @interface ManifestResources
 */
export interface ManifestResources {
    /**
     * An ID that uniquely identifies the resource.
     * @type {string}
     * @memberof ManifestResources
     */
    'guid': string;
    /**
     * Type of resource this JSON object represents.
     * @type {string}
     * @memberof ManifestResources
     */
    'type': string;
    /**
     * The URN that you can use to access the resource.
     * @type {string}
     * @memberof ManifestResources
     */
    'urn': string;
    /**
     * File type of the resource.
     * @type {string}
     * @memberof ManifestResources
     */
    'role': string;
    /**
     * MIME type of the content of the resource.
     * @type {string}
     * @memberof ManifestResources
     */
    'mime'?: string;
    /**
     * An ID assigned to a resource that can be displayed in a viewer.
     * @type {string}
     * @memberof ManifestResources
     */
    'viewableID'?: string;
    /**
     * The name of the resource.
     * @type {string}
     * @memberof ManifestResources
     */
    'name'?: string;
    /**
     * Status of the task generating this resource; Possible values are:  ``pending``, ``inprogress``, ``success``, ``failed``, ``timeout``
     * @type {string}
     * @memberof ManifestResources
     */
    'status': string;
    /**
     * - ``true``: There is a thumbnail for the resource. - ``false``: There is no thumbnail for the resource. 
     * @type {string}
     * @memberof ManifestResources
     */
    'hasThumbnail'?: string;
    /**
     * Indicates the progress of the process generating this resource, as a percentage. Once complete, the value changes to ``complete``.
     * @type {string}
     * @memberof ManifestResources
     */
    'progress'?: string;
    /**
     * The name of the phase the resource file was generated from. This attribute is present only on Model Views (Viewables) generated from a Revit source design. This attribute can be a string (for Revit non-sheet 2D or 3D views) or an array of strings (for Revit sheet views).
     * @type {object}
     * @memberof ManifestResources
     */
    'phaseNames'?: string | Array<string>;
    /**
     * The unique ID of the phase the resource file was generated from. This attribute is present only on Model Views (Viewables) generated from a Revit source design. This attribute can be a string (for Revit non-sheet 2D or 3D views) or an array of strings (for Revit sheet views).
     * @type {object}
     * @memberof ManifestResources
     */
    'phaseIds'?: string | Array<string>;
    /**
     * The default viewpoint of a viewable 3D resource.
     * @type {Array<number>}
     * @memberof ManifestResources
     */
    'camera'?: Array<number>;
    /**
     * An array of two integers where the first number represents the width of a thumbnail in pixels, and the second the height. Available only for thumbnail resources.
     * @type {Array<number>}
     * @memberof ManifestResources
     */
    'resolution'?: Array<number>;
    /**
     * 
     * @type {Array<Messages>}
     * @memberof ManifestResources
     */
    'messages'?: Array<Messages>;
    /**
     * An optional array of objects, where each object (of type ``children``) represents another resource generated for this resource.
     * @type {Array<ManifestResources>}
     * @memberof ManifestResources
     */
    'children'?: Array<ManifestResources>;
}

