/* tslint:disable */
/* eslint-disable */

import { BeginsWith } from './beginsWith';
import { Between } from './between';
import { Contains } from './contains';
import { EqualsTo } from './equalsTo';
import { GreaterThan } from './greaterThan';
import { LessThan } from './lessThan';
import { MatchId } from './matchId';

/**
 * @type SpecificPropertiesPayloadQuery
 * Specifies what objects to query.  Contains the parameters to pass to the search service.  You can use one of the following forms: 
 * @export
 */
export type SpecificPropertiesPayloadQuery = BeginsWith | Between | Contains | EqualsTo | GreaterThan | LessThan | MatchId;


