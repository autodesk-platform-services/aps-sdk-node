/* tslint:disable */
/* eslint-disable */


/**
 * Advanced options for `thumbnail` type.
 * @export
 * @interface JobThumbnailOutputFormatAdvanced
 */
export interface JobThumbnailOutputFormatAdvanced {
    /**
     * Set the width. Possible values are `100`, `200` and `400`.
     * @type {number}
     * @memberof JobThumbnailOutputFormatAdvanced
     */
    'width'?: JobThumbnailOutputFormatAdvancedWidthEnum;
    /**
     * Set the height. Possible values are `100`, `200` and `400`.
     * @type {number}
     * @memberof JobThumbnailOutputFormatAdvanced
     */
    'height'?: JobThumbnailOutputFormatAdvancedHeightEnum;
}

export const JobThumbnailOutputFormatAdvancedWidthEnum = {
    NUMBER_100: 100,
    NUMBER_200: 200,
    NUMBER_400: 400
} as const;

export type JobThumbnailOutputFormatAdvancedWidthEnum = typeof JobThumbnailOutputFormatAdvancedWidthEnum[keyof typeof JobThumbnailOutputFormatAdvancedWidthEnum];
export const JobThumbnailOutputFormatAdvancedHeightEnum = {
    NUMBER_100: 100,
    NUMBER_200: 200,
    NUMBER_400: 400
} as const;

export type JobThumbnailOutputFormatAdvancedHeightEnum = typeof JobThumbnailOutputFormatAdvancedHeightEnum[keyof typeof JobThumbnailOutputFormatAdvancedHeightEnum];


