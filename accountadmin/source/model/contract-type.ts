/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const ContractType = {
    ConstructionManagementCmAtRisk: 'Construction Management (CM) at Risk',
    DesignBid: 'Design-Bid',
    DesignBidBuild: 'Design-Bid-Build',
    DesignBuildOperate: 'Design-Build-Operate',
    Ipd: 'IPD'
} as const;

export type ContractType = typeof ContractType[keyof typeof ContractType];



