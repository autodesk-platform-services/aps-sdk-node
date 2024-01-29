/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const ProductKeys = {
    Build: 'build',
    Docs: 'docs',
    Takeoff: 'takeoff',
    Cost: 'cost',
    Autospecs: 'autospecs',
    Financials: 'financials',
    BuildingConnected: 'buildingConnected',
    CapitalPlanning: 'capitalPlanning',
    AccountAdministration: 'accountAdministration',
    Workshopxr: 'workshopxr',
    Insight: 'insight',
    ProjectAdministration: 'projectAdministration',
    ModelCoordination: 'modelCoordination',
    DesignCollaboration: 'designCollaboration',
    AndCloudWorksharing: 'and cloudWorksharing'
} as const;

export type ProductKeys = typeof ProductKeys[keyof typeof ProductKeys];



