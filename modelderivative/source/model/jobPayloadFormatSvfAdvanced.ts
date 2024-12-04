/* tslint:disable */
/* eslint-disable */

import { BuildingStoreys } from './buildingStoreys';
import { ConversionMethod } from './conversionMethod';
import { ExtractorVersion } from './extractorVersion';
import { Hierarchy } from './hierarchy';
import { JobPayloadFormatSVFAdvancedDGN } from './jobPayloadFormatSvfAdvancedDgn';
import { JobPayloadFormatSVFAdvancedDWG } from './jobPayloadFormatSvfAdvancedDwg';
import { JobPayloadFormatSVFAdvancedIFC } from './jobPayloadFormatSvfAdvancedIfc';
import { JobPayloadFormatSVFAdvancedNWD } from './jobPayloadFormatSvfAdvancedNwd';
import { JobPayloadFormatSVFAdvancedRVT } from './jobPayloadFormatSvfAdvancedRvt';
import { JobPayloadFormatSVFAdvancedVUE } from './jobPayloadFormatSvfAdvancedVue';
import { MaterialMode } from './materialMode';
import { Model2dView } from './model2dView';
import { OpeningElements } from './openingElements';
import { Spaces } from './spaces';

/**
 * @type JobPayloadFormatSVFAdvanced
 * Advanced options for ``svf`` output types. The available options depend on the input type.
 * @export
 */
export type JobPayloadFormatSVFAdvanced = JobPayloadFormatSVFAdvancedDGN | JobPayloadFormatSVFAdvancedDWG | JobPayloadFormatSVFAdvancedIFC | JobPayloadFormatSVFAdvancedNWD | JobPayloadFormatSVFAdvancedRVT | JobPayloadFormatSVFAdvancedVUE;


