/**
 *
 * @export
 * @enum {string}
 */
export declare const ContractType: {
    readonly ConstructionManagementCmAtRisk: "Construction Management (CM) at Risk";
    readonly DesignBid: "Design-Bid";
    readonly DesignBidBuild: "Design-Bid-Build";
    readonly DesignBuildOperate: "Design-Build-Operate";
    readonly Ipd: "IPD";
};
export type ContractType = typeof ContractType[keyof typeof ContractType];
