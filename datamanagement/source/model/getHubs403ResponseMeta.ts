
import { GetHubs403ResponseMetaWarnings } from './getHubs403ResponseMetaWarnings';

/**
 * Contains information about the error that occurred.
 * @export
 * @interface GetHubs403ResponseMeta
 */
export interface GetHubs403ResponseMeta {
    /**
     * An array of objects, where each element of the array represents a warning.
     * @type {Array<GetHubs403ResponseMetaWarnings>}
     * @memberof GetHubs403ResponseMeta
     */
    'warnings'?: Array<GetHubs403ResponseMetaWarnings>;
}

