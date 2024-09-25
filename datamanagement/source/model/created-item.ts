/* tslint:disable */
/* eslint-disable */

import { CreatedItemAllOf } from './created-item-all-of';
import { CreatedItemAllOfMeta } from './created-item-all-of-meta';
import { Item } from './item';
import { ItemData } from './item-data';
import { JsonApiLinksSelf } from './json-api-links-self';
import { JsonApiVersion } from './json-api-version';
import { VersionData } from './version-data';

/**
 * @type CreatedItem
 * Create item reponse
 * @export
 */
export type CreatedItem = CreatedItemAllOf & Item;


