

/**
 * Possible values: accessLevels, accountId, addressLine1, addressLine2, city, constructionType, country, createdAt, classification, deliveryMethod, endDate, imageUrl, jobNumber, latitude, longitude, name, platform, postalCode, projectValue, sheetCount, startDate, stateOrProvince, status, thumbnailImageUrl, timezone, type, updatedAt, contractType and currentPhase.
 * @export
 * @enum {string}
 */

export const UserProjectFields = {
    AccessLevels: 'accessLevels',
    AccountId: 'accountId',
    AddressLine1: 'addressLine1',
    AddressLine2: 'addressLine2',
    City: 'city',
    ConstructionType: 'constructionType',
    Country: 'country',
    CreatedAt: 'createdAt',
    Classification: 'classification',
    DeliveryMethod: 'deliveryMethod',
    EndDate: 'endDate',
    ImageUrl: 'imageUrl',
    JobNumber: 'jobNumber',
    Latitude: 'latitude',
    Longitude: 'longitude',
    Name: 'name',
    Platform: 'platform',
    PostalCode: 'postalCode',
    ProjectValue: 'projectValue',
    SheetCount: 'sheetCount',
    StartDate: 'startDate',
    StateOrProvince: 'stateOrProvince',
    Status: 'status',
    ThumbnailImageUrl: 'thumbnailImageUrl',
    Timezone: 'timezone',
    Type: 'type',
    UpdatedAt: 'updatedAt',
    ContractType: 'contractType',
    CurrentPhase: 'currentPhase'
} as const;

export type UserProjectFields = typeof UserProjectFields[keyof typeof UserProjectFields];



