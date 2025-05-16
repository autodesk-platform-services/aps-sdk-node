

/**
 * Possible values: name, email, firstName, lastName, addressLine1, addressLine2, city, companyName, stateOrProvince, status, phone, postalCode, country and addedOn. Default value: name.
 * @export
 * @enum {string}
 */

export const UserProjectSortBy = {
    NameAsc: 'name asc',
    StartDateAsc: 'startDate asc',
    EndDateAsc: 'endDate asc',
    TypeAsc: 'type asc',
    StatusAsc: 'status asc',
    JobNumberAsc: 'jobNumber asc',
    ConstructionTypeAsc: 'constructionType asc',
    DeliveryMethodAsc: 'deliveryMethod asc',
    ContractTypeAsc: 'contractType asc',
    CurrentPhaseAsc: 'currentPhase asc',
    CreatedAtAsc: 'createdAt asc',
    UpdatedAtAsc: 'updatedAt asc',
    PlatformAsc: 'platform asc',
    NameDesc: 'name desc',
    StartDateDesc: 'startDate desc',
    EndDateDesc: 'endDate desc',
    TypeDesc: 'type desc',
    StatusDesc: 'status desc',
    JobNumberDesc: 'jobNumber desc',
    ConstructionTypeDesc: 'constructionType desc',
    DeliveryMethodDesc: 'deliveryMethod desc',
    ContractTypeDesc: 'contractType desc',
    CurrentPhaseDesc: 'currentPhase desc',
    CreatedAtDesc: 'createdAt desc',
    UpdatedAtDesc: 'updatedAt desc',
    PlatformDesc: 'platform desc'
} as const;

export type UserProjectSortBy = typeof UserProjectSortBy[keyof typeof UserProjectSortBy];



