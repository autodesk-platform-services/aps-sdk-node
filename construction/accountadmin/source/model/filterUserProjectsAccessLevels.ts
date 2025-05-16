

/**
 *  Possible values: projectAdmin, projectMember.
 * @export
 * @enum {string}
 */

export const FilterUserProjectsAccessLevels = {
    ProjectMember: 'projectMember',
    ProjectAdmin: 'projectAdmin'
} as const;

export type FilterUserProjectsAccessLevels = typeof FilterUserProjectsAccessLevels[keyof typeof FilterUserProjectsAccessLevels];



