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
export declare const JobThumbnailOutputFormatAdvancedWidthEnum: {
    readonly NUMBER_100: 100;
    readonly NUMBER_200: 200;
    readonly NUMBER_400: 400;
};
export type JobThumbnailOutputFormatAdvancedWidthEnum = typeof JobThumbnailOutputFormatAdvancedWidthEnum[keyof typeof JobThumbnailOutputFormatAdvancedWidthEnum];
export declare const JobThumbnailOutputFormatAdvancedHeightEnum: {
    readonly NUMBER_100: 100;
    readonly NUMBER_200: 200;
    readonly NUMBER_400: 400;
};
export type JobThumbnailOutputFormatAdvancedHeightEnum = typeof JobThumbnailOutputFormatAdvancedHeightEnum[keyof typeof JobThumbnailOutputFormatAdvancedHeightEnum];
