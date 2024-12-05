/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedIFC } from './jobPayloadFormatAdvancedIFC';
import { JobPayloadFormatDWG } from './jobPayloadFormatDWG';
import { JobPayloadFormatIFC } from './jobPayloadFormatIFC';
import { JobPayloadFormatIGES } from './jobPayloadFormatIGES';
import { JobPayloadFormatOBJ } from './jobPayloadFormatOBJ';
import { JobPayloadFormatSTEP } from './jobPayloadFormatSTEP';
import { JobPayloadFormatSTL } from './jobPayloadFormatSTL';
import { JobPayloadFormatSVF } from './jobPayloadFormatSVF';
import { JobPayloadFormatSVF2 } from './jobPayloadFormatSVF2';
import { JobPayloadFormatThumbnail } from './jobPayloadFormatThumbnail';
import { OutputType } from './outputType';
import { View } from './view';

/**
 * @type JobPayloadFormat
 * Options for the output. The available options depend on the output type.
 * @export
 */
export type JobPayloadFormat = JobPayloadFormatDWG | JobPayloadFormatIFC | JobPayloadFormatIGES | JobPayloadFormatOBJ | JobPayloadFormatSTEP | JobPayloadFormatSTL | JobPayloadFormatSVF | JobPayloadFormatSVF2 | JobPayloadFormatThumbnail;


