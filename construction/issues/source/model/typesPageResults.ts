
import { TypesPageResultsSubtypes } from './typesPageResultsSubtypes';

/**
 * 
 * @export
 * @interface TypesPageResults
 */
export interface TypesPageResults {
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof TypesPageResults
     */
    'id'?: string;
    /**
     * Not relevant
     * @type {string}
     * @memberof TypesPageResults
     */
    'containerId'?: string;
    /**
     * Max length: 250
     * @type {string}
     * @memberof TypesPageResults
     */
    'title'?: string;
    /**
     * States whether the issue type is active.
     * @type {boolean}
     * @memberof TypesPageResults
     */
    'isActive'?: boolean;
    /**
     * Not relevant
     * @type {number}
     * @memberof TypesPageResults
     */
    'orderIndex'?: number;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof TypesPageResults
     */
    'permittedActions'?: Array<string>;
    /**
     * Not relevant
     * @type {Array<string>}
     * @memberof TypesPageResults
     */
    'permittedAttributes'?: Array<string>;
    /**
     * A list of subtypes of the specific issue type.
     * @type {Array<TypesPageResultsSubtypes>}
     * @memberof TypesPageResults
     */
    'subtypes'?: Array<TypesPageResultsSubtypes>;
    /**
     * Not relevant
     * @type {string}
     * @memberof TypesPageResults
     */
    'statusSet'?: string;
    /**
     * The unique identifier of the user who created the issue type.
     * @type {string}
     * @memberof TypesPageResults
     */
    'createdBy'?: string;
    /**
     * The date and time the issue was created, in ISO8601 format.
     * @type {string}
     * @memberof TypesPageResults
     */
    'createdAt'?: string;
    /**
     * The unique identifier of the user who updated the issue type.
     * @type {string}
     * @memberof TypesPageResults
     */
    'updatedBy'?: string;
    /**
     * The date and time the issue type was updated, in ISO8601 format.
     * @type {string}
     * @memberof TypesPageResults
     */
    'updatedAt'?: string;
    /**
     * The unique identifier of the user who deleted the issue type.
     * @type {string}
     * @memberof TypesPageResults
     */
    'deletedBy'?: string;
    /**
     * The date and time the issue type was deleted, in ISO8601 format.
     * @type {string}
     * @memberof TypesPageResults
     */
    'deletedAt'?: string;
}

