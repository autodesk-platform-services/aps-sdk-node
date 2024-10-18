/* tslint:disable */
/* eslint-disable */

import { JsonApiLink } from './json-api-link';
import { WebViewLink } from './web-view-link';

/**
 * Information on links to this resource.
 * @export
 * @interface JsonApiLinksSelfAndWebView
 */
export interface JsonApiLinksSelfAndWebView {
    /**
     * 
     * @type {JsonApiLink}
     * @memberof JsonApiLinksSelfAndWebView
     */
    'self': JsonApiLink;
    /**
     * 
     * @type {WebViewLink}
     * @memberof JsonApiLinksSelfAndWebView
     */
    'webview'?: WebViewLink;
}

