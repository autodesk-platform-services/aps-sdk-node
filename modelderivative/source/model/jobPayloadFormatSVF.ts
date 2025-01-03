/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatSVFAdvanced } from './jobPayloadFormatSVFAdvanced';
import { OutputType } from './outputType';
import { View } from './view';

/**
 * Options for SVF outputs.
 * @export
 * @interface JobPayloadFormatSVF
 */
export interface JobPayloadFormatSVF {
    /**
     * Specifies the type of view to generate. Possible values are `2d` and `3d`.
     * @type {Array<View>}
     * @memberof JobPayloadFormatSVF
     */
    'views': Array<View>;
    /**
     * 
     * @type {OutputType.Svf}
     * @memberof JobPayloadFormatSVF
     */
    'type': typeof OutputType.Svf;
    /**
     * 
     * @type {JobPayloadFormatSVFAdvanced}
     * @memberof JobPayloadFormatSVF
     */
    'advanced'?: JobPayloadFormatSVFAdvanced;
}



