/* tslint:disable */
/* eslint-disable */

import { JsonApiLink } from './jsonApiLink';
import { WebViewLink } from './webViewLink';

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

