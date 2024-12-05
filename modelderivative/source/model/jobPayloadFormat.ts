/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedIFC } from './jobPayloadFormatAdvanced-IFC';
import { JobPayloadFormatDWG } from './jobPayloadFormat-DWG';
import { JobPayloadFormatIFC } from './jobPayloadFormat-IFC';
import { JobPayloadFormatIGES } from './jobPayloadFormat-IGES';
import { JobPayloadFormatOBJ } from './jobPayloadFormat-OBJ';
import { JobPayloadFormatSTEP } from './jobPayloadFormat-STEP';
import { JobPayloadFormatSTL } from './jobPayloadFormat-STL';
import { JobPayloadFormatSVF } from './jobPayloadFormat-SVF';
import { JobPayloadFormatSVF2 } from './jobPayloadFormat-SVF2';
import { JobPayloadFormatThumbnail } from './jobPayloadFormatThumbnail';
import { OutputType } from './outputType';
import { View } from './view';

/**
 * @type JobPayloadFormat
 * Options for the output. The available options depend on the output type.
 * @export
 */
export type JobPayloadFormat = JobPayloadFormatDWG | JobPayloadFormatIFC | JobPayloadFormatIGES | JobPayloadFormatOBJ | JobPayloadFormatSTEP | JobPayloadFormatSTL | JobPayloadFormatSVF | JobPayloadFormatSVF2 | JobPayloadFormatThumbnail;


