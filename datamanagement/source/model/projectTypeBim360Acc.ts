

/**
 * The type of project. Only relevant for BIM 360 and ACC projects.
 * @export
 * @enum {string}
 */

export const ProjectTypeBim360Acc = {
    Bim360: 'BIM360',
    Acc: 'ACC'
} as const;

export type ProjectTypeBim360Acc = typeof ProjectTypeBim360Acc[keyof typeof ProjectTypeBim360Acc];



