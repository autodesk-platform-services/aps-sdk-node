/* tslint:disable */
/* eslint-disable */

import { BuildingStoreys } from './building-storeys';
import { ConversionMethod } from './conversion-method';
import { ExtractorVersion } from './extractor-version';
import { Hierarchy } from './hierarchy';
import { JobPayloadFormatSVFAdvancedDGN } from './job-payload-format-svf-advanced-dgn';
import { JobPayloadFormatSVFAdvancedDWG } from './job-payload-format-svf-advanced-dwg';
import { JobPayloadFormatSVFAdvancedIFC } from './job-payload-format-svf-advanced-ifc';
import { JobPayloadFormatSVFAdvancedNWD } from './job-payload-format-svf-advanced-nwd';
import { JobPayloadFormatSVFAdvancedRVT } from './job-payload-format-svf-advanced-rvt';
import { JobPayloadFormatSVFAdvancedVUE } from './job-payload-format-svf-advanced-vue';
import { MaterialMode } from './material-mode';
import { Model2dView } from './model2d-view';
import { OpeningElements } from './opening-elements';
import { Spaces } from './spaces';

/**
 * @type JobPayloadFormatSVFAdvanced
 * Advanced options for ``svf`` output types. The available options depend on the input type.
 * @export
 */
export type JobPayloadFormatSVFAdvanced = JobPayloadFormatSVFAdvancedDGN | JobPayloadFormatSVFAdvancedDWG | JobPayloadFormatSVFAdvancedIFC | JobPayloadFormatSVFAdvancedNWD | JobPayloadFormatSVFAdvancedRVT | JobPayloadFormatSVFAdvancedVUE;


