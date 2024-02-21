/**
 *
 * @export
 * @enum {string}
 */
export declare const SortBy: {
    readonly NameAsc: "name asc";
    readonly StartDateAsc: "startDate asc";
    readonly EndDateAsc: "endDate asc";
    readonly TypeAsc: "type asc";
    readonly StatusAsc: "status asc";
    readonly JobNumberAsc: "jobNumber asc";
    readonly ConstructionTypeAsc: "constructionType asc";
    readonly DeliveryMethodAsc: "deliveryMethod asc";
    readonly ContractTypeAsc: "contractType asc";
    readonly CurrentPhaseAsc: "currentPhase asc";
    readonly CompanyCountAsc: "companyCount asc";
    readonly MemberCountAsc: "memberCount asc";
    readonly CreatedAtAsc: "createdAt asc";
    readonly UpdatedAtAsc: "updatedAt asc";
    readonly NameDesc: "name desc";
    readonly StartDateDesc: "startDate desc";
    readonly EndDateDesc: "endDate desc";
    readonly TypeDesc: "type desc";
    readonly StatusDesc: "status desc";
    readonly JobNumberDesc: "jobNumber desc";
    readonly ConstructionTypeDesc: "constructionType desc";
    readonly DeliveryMethodDesc: "deliveryMethod desc";
    readonly ContractTypeDesc: "contractType desc";
    readonly CurrentPhaseDesc: "currentPhase desc";
    readonly CompanyCountDesc: "companyCount desc";
    readonly MemberCountDesc: "memberCount desc";
    readonly CreatedAtDesc: "createdAt desc";
    readonly UpdatedAtDesc: "updatedAt desc";
};
export type SortBy = typeof SortBy[keyof typeof SortBy];
