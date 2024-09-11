
import { GetHubs403ResponseMeta } from './getHubs403ResponseMeta';

/**
 * 
 * @export
 * @interface GetHubs403Response
 */
export interface GetHubs403Response {
    /**
     * The JSON API object.
     * @type {object}
     * @memberof GetHubs403Response
     */
    'jsonapi'?: object;
    /**
     * An object intended to contain the URI of a resource. Empty in this case, because an error has occurred.
     * @type {object}
     * @memberof GetHubs403Response
     */
    'links'?: object;
    /**
     * An object intended to contain the return data. Empty in this case, because an error has occurred.
     * @type {Array<object>}
     * @memberof GetHubs403Response
     */
    'data'?: Array<object>;
    /**
     * 
     * @type {GetHubs403ResponseMeta}
     * @memberof GetHubs403Response
     */
    'meta'?: GetHubs403ResponseMeta;
}

