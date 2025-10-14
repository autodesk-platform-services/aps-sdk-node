

/**
 * Filters the list of products by product key — a machine-readable identifier for an ACC product (such as docs, build, or cost).
 * You can specify one or more keys to return only those products the user is associated with.
 * 
 * Example: filter[key]=docs,build
 * 
 * Possible values: accountAdministration, autoSpecs, build, buildingConnected, capitalPlanning, cloudWorksharing, cost, designCollaboration, docs, financials, insight, modelCoordination, projectAdministration, takeoff, and workshopxr.
 * @export
 * @enum {string}
 */

export const FilterProductKey = {
    AccountAdministration: 'accountAdministration',
    AutoSpecs: 'autoSpecs',
    Build: 'build',
    BuildingConnected: 'buildingConnected',
    CapitalPlanning: 'capitalPlanning',
    CloudWorksharing: 'cloudWorksharing',
    Cost: 'cost',
    DesignCollaboration: 'designCollaboration',
    Docs: 'docs',
    Financials: 'financials',
    Insight: 'insight',
    ModelCoordination: 'modelCoordination',
    ProjectAdministration: 'projectAdministration',
    Takeoff: 'takeoff',
    Workshopxr: 'workshopxr'
} as const;

export type FilterProductKey = typeof FilterProductKey[keyof typeof FilterProductKey];



