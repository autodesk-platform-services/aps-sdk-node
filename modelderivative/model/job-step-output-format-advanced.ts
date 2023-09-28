/* tslint:disable */
/* eslint-disable */


/**
 * Advanced options for `step` type.
 * @export
 * @interface JobStepOutputFormatAdvanced
 */
export interface JobStepOutputFormatAdvanced {
    /**
     * A STEP file can be generated with the following Application Protocols: `203` for configuration controlled design, `214` for core data for automotive mechanical design processes, `242` for managed model based 3D engineering. By default, `214` will be exported. 
     * @type {string}
     * @memberof JobStepOutputFormatAdvanced
     */
    'applicationProtocol'?: JobStepOutputFormatAdvancedApplicationProtocolEnum;
    /**
     * Possible values are between `0` and `1`. By default it is set at 0.001.
     * @type {number}
     * @memberof JobStepOutputFormatAdvanced
     */
    'tolerance'?: number;
}

export const JobStepOutputFormatAdvancedApplicationProtocolEnum = {
    _203: '203',
    _214: '214',
    _242: '242'
} as const;

export type JobStepOutputFormatAdvancedApplicationProtocolEnum = typeof JobStepOutputFormatAdvancedApplicationProtocolEnum[keyof typeof JobStepOutputFormatAdvancedApplicationProtocolEnum];


