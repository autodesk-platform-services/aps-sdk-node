/**
 * Project template options specific to classic field.
 * @export
 * @interface ProjectPayloadTemplateOptionsField
 */
export interface ProjectPayloadTemplateOptionsField {
    /**
     * Indicates whether to include company data when copying from the project template. true: Include company data. false: Exclude company data.
     * @type {boolean}
     * @memberof ProjectPayloadTemplateOptionsField
     */
    'includeCompanies'?: boolean;
    /**
     * Indicates whether to include location data when copying from the template project. true: Include location data. false: Exclude location data.
     * @type {boolean}
     * @memberof ProjectPayloadTemplateOptionsField
     */
    'includeLocations'?: boolean;
}
