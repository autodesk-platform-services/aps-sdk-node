/* tslint:disable */
/* eslint-disable */

import { DownloadFormatsDataAttributesFormats } from './download-formats-data-attributes-formats';

/**
 * Contains the list of formats.
 * @export
 * @interface DownloadFormatsDataAttributes
 */
export interface DownloadFormatsDataAttributes {
    /**
     * An array of objects, where each object corresponds to a file format.
     * @type {Set<DownloadFormatsDataAttributesFormats>}
     * @memberof DownloadFormatsDataAttributes
     */
    'formats'?: Set<DownloadFormatsDataAttributesFormats>;
}

