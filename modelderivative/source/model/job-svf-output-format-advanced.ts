/* tslint:disable */
/* eslint-disable */


import { JobSvfOutputFormatAdvancedDGN } from "./job-svf-output-format-advanced-DGN"
import { JobSvfOutputFormatAdvancedDWG } from "./job-svf-output-format-advanced-DWG"
import { JobSvfOutputFormatAdvancedIFC } from "./job-svf-output-format-advanced-IFC"
import { JobSvfOutputFormatAdvancedNWD } from "./job-svf-output-format-advanced-NWD"
import { JobSvfOutputFormatAdvancedRVT } from "./job-svf-output-format-advanced-RVT"
import { JobSvfOutputFormatAdvancedVUE } from "./job-svf-output-format-advanced-VUE"

/**
 * Advanced options for ``svf`` output types. The available options depend on the input type. These options are as follows:\'
 * @export
 */
export type JobSvfOutputFormatAdvanced = JobSvfOutputFormatAdvancedVUE | JobSvfOutputFormatAdvancedRVT | JobSvfOutputFormatAdvancedNWD | JobSvfOutputFormatAdvancedIFC | JobSvfOutputFormatAdvancedDWG | JobSvfOutputFormatAdvancedDGN; 



