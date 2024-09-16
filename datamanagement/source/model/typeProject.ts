

/**
 * The type of the resource. Possible values are ``projects``.
 * @export
 * @enum {string}
 */

export const TypeProject = {
    Projects: 'projects'
} as const;

export type TypeProject = typeof TypeProject[keyof typeof TypeProject];



