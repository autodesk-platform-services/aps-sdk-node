/* tslint:disable */
/* eslint-disable */

import { BuildingStoreys } from './building-storeys';
import { ConversionMethod } from './conversion-method';
import { ExtractorVersion } from './extractor-version';
import { Hierarchy } from './hierarchy';
import { JobPayloadFormatSVF2AdvancedDGN } from './job-payload-format-svf2-advanced-dgn';
import { JobPayloadFormatSVF2AdvancedDWG } from './job-payload-format-svf2-advanced-dwg';
import { JobPayloadFormatSVF2AdvancedIFC } from './job-payload-format-svf2-advanced-ifc';
import { JobPayloadFormatSVF2AdvancedNWD } from './job-payload-format-svf2-advanced-nwd';
import { JobPayloadFormatSVF2AdvancedRVT } from './job-payload-format-svf2-advanced-rvt';
import { JobPayloadFormatSVF2AdvancedVUE } from './job-payload-format-svf2-advanced-vue';
import { MaterialMode } from './material-mode';
import { Model2dView } from './model2d-view';
import { OpeningElements } from './opening-elements';
import { Spaces } from './spaces';

/**
 * @type JobPayloadFormatSVF2Advanced
 * Advanced options for ``svf2`` output types. The available options depend on the input type.
 * @export
 */
export type JobPayloadFormatSVF2Advanced = JobPayloadFormatSVF2AdvancedDGN | JobPayloadFormatSVF2AdvancedDWG | JobPayloadFormatSVF2AdvancedIFC | JobPayloadFormatSVF2AdvancedNWD | JobPayloadFormatSVF2AdvancedRVT | JobPayloadFormatSVF2AdvancedVUE;


