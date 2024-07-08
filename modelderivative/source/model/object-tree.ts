/* tslint:disable */
/* eslint-disable */

import { ObjectTreeData } from './object-tree-data';

/**
 * An object that represents the successful response of a Fetch Object Tree operation.
 * @export
 * @interface ObjectTree
 */
export class ObjectTree {
    private _isProcessing: boolean;

    constructor(isProcessing: boolean)  {
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
     * @type {ObjectTreeData}
     * @memberof ObjectTree
     */
    'data': ObjectTreeData;
}

