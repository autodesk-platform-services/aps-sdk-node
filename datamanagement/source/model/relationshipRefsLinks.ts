
import { JsonApiLinksRelated } from './jsonApiLinksRelated';
import { JsonApiLinksRelatedRelated } from './jsonApiLinksRelatedRelated';
import { JsonApiLinksSelf } from './jsonApiLinksSelf';
import { JsonApiLinksSelfSelf } from './jsonApiLinksSelfSelf';

/**
 * @type RelationshipRefsLinks
 * Information on links to this resource.
 * @export
 */
export type RelationshipRefsLinks = JsonApiLinksRelated & JsonApiLinksSelf;


