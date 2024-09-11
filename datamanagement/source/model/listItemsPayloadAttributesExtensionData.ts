

/**
 * Contains the custom properties specific to the  ListItems command.
 * @export
 * @interface ListItemsPayloadAttributesExtensionData
 */
export interface ListItemsPayloadAttributesExtensionData {
    /**
     * Specify whether to return the  ``pathInProject`` attribute in response  for BIM 360 Docs projects.  ``pathInProject`` is the path to  the item relative to the project’s root folder.  - ``true``: Response will contain the ``pathInProject`` attribute for BIM 360 Docs projects. - ``false``: (Default) response will not contain the ``pathInProject`` attribute for BIM 360 Docs projects.  Setting this parameter to ``true`` on a  non-BIM 360 Docs project results in an error.
     * @type {boolean}
     * @memberof ListItemsPayloadAttributesExtensionData
     */
    'includePathInProject'?: boolean;
}

