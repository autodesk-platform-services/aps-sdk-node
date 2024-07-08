/* tslint:disable */
/* eslint-disable */

import { BeginsWith } from './begins-with';
import { Between } from './between';
import { Contains } from './contains';
import { EqualsTo } from './equals-to';
import { GreaterThan } from './greater-than';
import { LessThan } from './less-than';
import { MatchId } from './match-id';

/**
 * @type SpecificPropertiesPayloadQuery
 * Specifies what objects to query.  Contains the parameters to pass to the search service.  You can use one of the following forms: 
 * @export
 */
export type SpecificPropertiesPayloadQuery = BeginsWith | Between | Contains | EqualsTo | GreaterThan | LessThan | MatchId;


