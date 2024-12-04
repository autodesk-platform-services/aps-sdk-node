/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedIFC } from './jobPayloadFormatAdvancedIfc';
import { JobPayloadFormatDWG } from './jobPayloadFormatDwg';
import { JobPayloadFormatIFC } from './jobPayloadFormatIfc';
import { JobPayloadFormatIGES } from './jobPayloadFormatIges';
import { JobPayloadFormatOBJ } from './jobPayloadFormatObj';
import { JobPayloadFormatSTEP } from './jobPayloadFormatStep';
import { JobPayloadFormatSTL } from './jobPayloadFormatStl';
import { JobPayloadFormatSVF } from './jobPayloadFormatSvf';
import { JobPayloadFormatSVF2 } from './jobPayloadFormatSvf2';
import { JobPayloadFormatThumbnail } from './jobPayloadFormatThumbnail';
import { OutputType } from './outputType';
import { View } from './view';

/**
 * @type JobPayloadFormat
 * Options for the output. The available options depend on the output type.
 * @export
 */
export type JobPayloadFormat = JobPayloadFormatDWG | JobPayloadFormatIFC | JobPayloadFormatIGES | JobPayloadFormatOBJ | JobPayloadFormatSTEP | JobPayloadFormatSTL | JobPayloadFormatSVF | JobPayloadFormatSVF2 | JobPayloadFormatThumbnail;


