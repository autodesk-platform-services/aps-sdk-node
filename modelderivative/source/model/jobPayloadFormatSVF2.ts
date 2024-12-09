/* tslint:disable */
/* eslint-disable */

import { Interface } from 'readline';
import { JobPayloadFormatSVF2Advanced } from './jobPayloadFormatSVF2Advanced';
import { OutputType } from './outputType';
import { View } from './view';

/**
 * Options for SVF2 outputs.
 * @export
 * @interface JobPayloadFormatSVF2
 */
export interface JobPayloadFormatSVF2 {
    /**
     * Specifies the type of view to generate. Possible values are `2d` and `3d`.
     * @type {Array<View>}
     * @memberof JobPayloadFormatSVF2
     */
    'views': Array<View>;
    /**
     * 
     * @type {OutputType.Svf2}
     * @memberof JobPayloadFormatSVF2
     */
    'type': typeof OutputType.Svf2 ;
    /**
     * 
     * @type {JobPayloadFormatSVF2Advanced}
     * @memberof JobPayloadFormatSVF2
     */
    'advanced'?: JobPayloadFormatSVF2Advanced;
}



