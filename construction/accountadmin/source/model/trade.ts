/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Trade = {
    Architecture: 'Architecture',
    Communications: 'Communications',
    CommunicationsData: 'Communications | Data',
    Concrete: 'Concrete',
    ConcreteCastInPlace: 'Concrete | Cast-in-Place',
    ConcretePrecast: 'Concrete | Precast',
    ConstructionManagement: 'Construction Management',
    ConveyingEquipment: 'Conveying Equipment',
    ConveyingEquipmentElevators: 'Conveying Equipment | Elevators',
    Demolition: 'Demolition',
    Earthwork: 'Earthwork',
    EarthworkSiteExcavationGrading: 'Earthwork | Site Excavation & Grading',
    Electrical: 'Electrical',
    ElectricalPowerGeneration: 'Electrical Power Generation',
    ElectronicSafetySecurity: 'Electronic Safety & Security',
    Equipment: 'Equipment',
    EquipmentKitchenAppliances: 'Equipment | Kitchen Appliances',
    ExteriorImprovements: 'Exterior Improvements',
    ExteriorFencesGates: 'Exterior | Fences & Gates',
    ExteriorLandscaping: 'Exterior | Landscaping',
    ExteriorIrrigation: 'Exterior | Irrigation',
    Finishes: 'Finishes',
    FinishesCarpeting: 'Finishes | Carpeting',
    FinishesCeiling: 'Finishes | Ceiling',
    FinishesDrywall: 'Finishes | Drywall',
    FinishesFlooring: 'Finishes | Flooring',
    FinishesPaintingCoating: 'Finishes | Painting & Coating',
    FinishesTile: 'Finishes | Tile',
    FireSuppression: 'Fire Suppression',
    Furnishings: 'Furnishings',
    FurnishingsCaseworkCabinets: 'Furnishings | Casework & Cabinets',
    FurnishingsCountertops: 'Furnishings | Countertops',
    FurnishingsWindowTreatments: 'Furnishings | Window Treatments',
    GeneralContractor: 'General Contractor',
    HvacHeatingVentilatingAirConditioning: 'HVAC Heating, Ventilating, & Air Conditioning',
    IndustrySpecificManufacturingProcessing: 'Industry-Specific Manufacturing Processing',
    IntegratedAutomation: 'Integrated Automation',
    Masonry: 'Masonry',
    MaterialProcessingHandlingEquipment: 'Material Processing & Handling Equipment',
    Metals: 'Metals',
    MetalsStructuralSteelFraming: 'Metals | Structural Steel / Framing',
    MoistureProtection: 'Moisture Protection',
    MoistureProtectionRoofing: 'Moisture Protection | Roofing',
    MoistureProtectionWaterproofing: 'Moisture Protection | Waterproofing',
    Openings: 'Openings',
    OpeningsDoorsFrames: 'Openings | Doors & Frames',
    OpeningsEntrancesStorefronts: 'Openings | Entrances & Storefronts',
    OpeningsGlazing: 'Openings | Glazing',
    OpeningsRoofWindowsSkylights: 'Openings | Roof Windows & Skylights',
    OpeningsWindows: 'Openings | Windows',
    Owner: 'Owner',
    Plumbing: 'Plumbing',
    PollutionWasteControlEquipment: 'Pollution & Waste Control Equipment',
    ProcessGasLiquidHandlingPurificationStorageEquipment: 'Process Gas & Liquid Handling, Purification, & Storage Equipment',
    ProcessHeatingCoolingDryingEquipment: 'Process Heating, Cooling, & Drying Equipment',
    ProcessIntegration: 'Process Integration',
    ProcessIntegrationPiping: 'Process Integration | Piping',
    SpecialConstruction: 'Special Construction',
    Specialties: 'Specialties',
    SpecialtiesSignage: 'Specialties | Signage',
    Utilities: 'Utilities',
    WaterWastewaterEquipment: 'Water & Wastewater Equipment',
    WaterwayMarineConstruction: 'Waterway & Marine Construction',
    WoodPlastics: 'Wood & Plastics',
    WoodPlasticsMillwork: 'Wood & Plastics | Millwork',
    WoodPlasticsRoughCarpentry: 'Wood & Plastics | Rough Carpentry'
} as const;

export type Trade = typeof Trade[keyof typeof Trade];



