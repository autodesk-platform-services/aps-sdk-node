/* tslint:disable */
/* eslint-disable */

import { Properties } from './properties';
import { PropertiesData } from './properties-data';
import { SpecificPropertiesPagination } from './specific-properties-pagination';

/**
 * An object that represents the successful response of a Fetch Specific Properties operation.
 * @export
 * @class SpecificProperties
 */
export class SpecificProperties {
    private _isProcessing: boolean;

    constructor(isProcessing: boolean) {
        this._isProcessing = isProcessing;
    }

    public get isProcessing(): boolean {
        return this._isProcessing;
    }
    public set isProcessing(value){
        this._isProcessing = value;
     }
    /**
     * 
     * @type {SpecificPropertiesPagination}
     * @memberof SpecificProperties
     */
    'pagination': SpecificPropertiesPagination;
    /**
     * 
     * @type {PropertiesData}
     * @memberof SpecificProperties
     */
    'data': PropertiesData;
}

