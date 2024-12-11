/* tslint:disable */
/* eslint-disable */

import { BuildingStoreys } from './buildingStoreys';
import { ConversionMethod } from './conversionMethod';
import { ExtractorVersion } from './extractorVersion';
import { Hierarchy } from './hierarchy';
import { JobPayloadFormatSVF2AdvancedDGN } from './jobPayloadFormatSVF2AdvancedDGN';
import { JobPayloadFormatSVF2AdvancedDWG } from './jobPayloadFormatSVF2AdvancedDWG';
import { JobPayloadFormatSVF2AdvancedIFC } from './jobPayloadFormatSVF2AdvancedIFC';
import { JobPayloadFormatSVF2AdvancedNWD } from './jobPayloadFormatSVF2AdvancedNWD';
import { JobPayloadFormatSVF2AdvancedRVT } from './jobPayloadFormatSVF2AdvancedRVT';
import { JobPayloadFormatSVF2AdvancedVUE } from './jobPayloadFormatSVF2AdvancedVUE';
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


