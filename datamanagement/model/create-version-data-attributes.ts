/* tslint:disable */
/* eslint-disable */

import { RelationshipRefsRequestDataMetaExtension } from './relationship-refs-request-data-meta-extension';

/**
 * 
 * @export
 * @interface CreateVersionDataAttributes
 */
export interface CreateVersionDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof CreateVersionDataAttributes
     */
    'name': string;
    /**
     * 
     * @type {RelationshipRefsRequestDataMetaExtension}
     * @memberof CreateVersionDataAttributes
     */
    'extension': RelationshipRefsRequestDataMetaExtension;
    /**
     * 
     * @type {string}
     * @memberof CreateVersionDataAttributes
     */
    'displayName'?: string;
}

