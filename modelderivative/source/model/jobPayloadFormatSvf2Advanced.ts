/* tslint:disable */
/* eslint-disable */

import { BuildingStoreys } from './buildingStoreys';
import { ConversionMethod } from './conversionMethod';
import { ExtractorVersion } from './extractorVersion';
import { Hierarchy } from './hierarchy';
import { JobPayloadFormatSVF2AdvancedDGN } from './jobPayloadFormatSvf2AdvancedDgn';
import { JobPayloadFormatSVF2AdvancedDWG } from './jobPayloadFormatSvf2AdvancedDwg';
import { JobPayloadFormatSVF2AdvancedIFC } from './jobPayloadFormatSvf2AdvancedIfc';
import { JobPayloadFormatSVF2AdvancedNWD } from './jobPayloadFormatSvf2AdvancedNwd';
import { JobPayloadFormatSVF2AdvancedRVT } from './jobPayloadFormatSvf2AdvancedRvt';
import { JobPayloadFormatSVF2AdvancedVUE } from './jobPayloadFormatSvf2AdvancedVue';
import { MaterialMode } from './materialMode';
import { Model2dView } from './model2dView';
import { OpeningElements } from './openingElements';
import { Spaces } from './spaces';

/**
 * @type JobPayloadFormatSVF2Advanced
 * Advanced options for ``svf2`` output types. The available options depend on the input type.
 * @export
 */
export type JobPayloadFormatSVF2Advanced = JobPayloadFormatSVF2AdvancedDGN | JobPayloadFormatSVF2AdvancedDWG | JobPayloadFormatSVF2AdvancedIFC | JobPayloadFormatSVF2AdvancedNWD | JobPayloadFormatSVF2AdvancedRVT | JobPayloadFormatSVF2AdvancedVUE;


