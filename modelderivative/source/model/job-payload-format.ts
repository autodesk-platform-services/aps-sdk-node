/* tslint:disable */
/* eslint-disable */

import { JobPayloadFormatAdvancedIFC } from './job-payload-format-advanced-ifc';
import { JobPayloadFormatDWG } from './job-payload-format-dwg';
import { JobPayloadFormatIFC } from './job-payload-format-ifc';
import { JobPayloadFormatIGES } from './job-payload-format-iges';
import { JobPayloadFormatOBJ } from './job-payload-format-obj';
import { JobPayloadFormatSTEP } from './job-payload-format-step';
import { JobPayloadFormatSTL } from './job-payload-format-stl';
import { JobPayloadFormatSVF } from './job-payload-format-svf';
import { JobPayloadFormatSVF2 } from './job-payload-format-svf2';
import { JobPayloadFormatThumbnail } from './job-payload-format-thumbnail';
import { OutputType } from './output-type';
import { View } from './view';

/**
 * @type JobPayloadFormat
 * Options for the output. The available options depend on the output type.
 * @export
 */
export type JobPayloadFormat = JobPayloadFormatDWG | JobPayloadFormatIFC | JobPayloadFormatIGES | JobPayloadFormatOBJ | JobPayloadFormatSTEP | JobPayloadFormatSTL | JobPayloadFormatSVF | JobPayloadFormatSVF2 | JobPayloadFormatThumbnail;


