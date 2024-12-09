/* tslint:disable */
/* eslint-disable */

import { BuildingStoreys } from './buildingStoreys';
import { ConversionMethod } from './conversionMethod';
import { ExtractorVersion } from './extractorVersion';
import { Hierarchy } from './hierarchy';
import { JobPayloadFormatSVFAdvancedDGN } from './jobPayloadFormatSVFAdvancedDGN';
import { JobPayloadFormatSVFAdvancedDWG } from './jobPayloadFormatSVFAdvancedDWG';
import { JobPayloadFormatSVFAdvancedIFC } from './jobPayloadFormatSVFAdvancedIFC';
import { JobPayloadFormatSVFAdvancedNWD } from './jobPayloadFormatSVFAdvancedNWD';
import { JobPayloadFormatSVFAdvancedRVT } from './jobPayloadFormatSVFAdvancedRVT';
import { JobPayloadFormatSVFAdvancedVUE } from './jobPayloadFormatSVFAdvancedVUE';
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


