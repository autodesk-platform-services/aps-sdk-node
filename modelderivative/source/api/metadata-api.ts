/* tslint:disable */
/* eslint-disable */

import type { AxiosPromise, AxiosInstance } from 'axios';
import {ApsServiceRequestConfig, IApsConfiguration, SDKManager, ApiResponse} from  "@aps_sdk/autodesk-sdkmanager";
import { assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { COLLECTION_FORMATS, RequestArgs, BaseApi, RequiredError, ModelDerivativeApiError } from '../base';
import { AllProperties, Region } from '../model';
import { ModelViews } from '../model';
import { ObjectTree } from '../model';
import { SpecificProperties } from '../model';
import { SpecificPropertiesPayload } from '../model';
import { XAdsDerivativeFormat } from '../model';
/**
 * MetadataApi - axios parameter creator
 * @export
 */
export const MetadataApiAxiosParamCreator = function (apsConfiguration?: IApsConfiguration) {
    return {
        /**
         * Queries the objects in the Model View (Viewable) specified by the ``modelGuid`` parameter and returns the specified properties in a paginated list. You can limit the number of objects to be queried by specifying a filter using the ``query`` attribute in the request body.  **Note:** A design file must be translated to SVF or SVF2 before you can query object properties.    Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views in the source design. - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid``  parameter.
         * @summary Fetch Specific Properties
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} modelGuid The ID of the Model View you are querying. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
         * @param {SpecificPropertiesPayload} [specificPropertiesPayload] 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchSpecificProperties: async (accessToken: string, urn: string, modelGuid: string, acceptEncoding?: string, region?: Region, specificPropertiesPayload?: SpecificPropertiesPayload,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'urn' is not null or undefined
            assertParamExists('fetchSpecificProperties', 'urn', urn)
            // verify required parameter 'modelGuid' is not null or undefined
            assertParamExists('fetchSpecificProperties', 'modelGuid', modelGuid)
            const localVarPath = `/modelderivative/v2/designdata/{urn}/metadata/{modelGuid}/properties:query`
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)))
                .replace(`{${"modelGuid"}}`, encodeURIComponent(String(modelGuid)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (acceptEncoding != null) {
                localVarHeaderParameter['Accept-Encoding'] = String(acceptEncoding);
            }

            if (region != null) {
                localVarHeaderParameter['region'] = String(region);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['User-Agent'] = 'APS SDK/MODEL-DERIVATIVE/TypeScript/1.0.0';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(specificPropertiesPayload, localVarRequestOptions, apsConfiguration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of properties of all objects in the  Model View specified by the ``modelGuid`` parameter.   This operation returns properties of all objects by default. However, you can restrict the results to a specific object by specifying its ID as the ``objectid`` parameter.  Properties are returned as a flat list, ordered, by their ``objectid``. The ``objectid`` is a non-persistent ID assigned to an object when the source design is translated to the SVF or SVF2 format. This means that:  - A design file must be translated to SVF or SVF2 before you can retrieve properties. - The ``objectid`` of an object can change if the design is translated to SVF or SVF2 again. If you require a persistent ID across translations, use ``externalId`` to reference objects, instead of ``objectid``.  Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views (Viewables) in the source design.  - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid`` parameter.  **Tip**: Use `Fetch Specific Properties </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-GET/>`_ to retrieve only the objects and properties of interest. What’s more, the response is paginated. So, when the number of properties returned is large, responses start arriving more promptly.
         * @summary Fetch All Properties
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} modelGuid The ID of the Model View you are querying. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
         * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_ 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
         * @param {number} [objectid] The Object ID of the object you want to restrict the response to. If you do not specify this parameter, all properties of all objects within the Model View are returned.  
         * @param {string} [forceget] &#x60;&#x60;true&#x60;&#x60;: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if &#x60;&#x60;forceget&#x60;&#x60; is &#x60;&#x60;false&#x60;&#x60;.   &#x60;&#x60;false&#x60;&#x60;: (Default) Does not retrieve resources if they are larger than 20 MB. 
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProperties: async (accessToken: string, urn: string, modelGuid: string, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, region?: Region, objectid?: number, forceget?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'urn' is not null or undefined
            assertParamExists('getAllProperties', 'urn', urn)
            // verify required parameter 'modelGuid' is not null or undefined
            assertParamExists('getAllProperties', 'modelGuid', modelGuid)
            const localVarPath = `/modelderivative/v2/designdata/{urn}/metadata/{modelGuid}/properties`
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)))
                .replace(`{${"modelGuid"}}`, encodeURIComponent(String(modelGuid)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (objectid !== undefined) {
                localVarQueryParameter['objectid'] = objectid;
            }

            if (forceget !== undefined) {
                localVarQueryParameter['forceget'] = forceget;
            }

            if (acceptEncoding != null) {
                localVarHeaderParameter['Accept-Encoding'] = String(acceptEncoding);
            }

            if (xAdsForce != null) {
                localVarHeaderParameter['x-ads-force'] = typeof xAdsForce === 'string'
                    ? xAdsForce
                    : JSON.stringify(xAdsForce);
            }

            if (xAdsDerivativeFormat != null) {
                localVarHeaderParameter['x-ads-derivative-format'] = typeof xAdsDerivativeFormat === 'string'
                    ? xAdsDerivativeFormat
                    : JSON.stringify(xAdsDerivativeFormat);
            }

            if (region != null) {
                localVarHeaderParameter['region'] = String(region);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of Model Views (Viewables) in the source design specified by the ``urn`` parameter. It also returns an ID that uniquely identifies the Model View. You can use these IDs with other metadata operations to obtain information about the objects within those Model Views.  Designs created with applications like Fusion 360 and Inventor contain only one Model View per design. Applications like Revit allow multiple Model Views per design.  **Note:** You can retrieve metadata only from a design that has already been translated to SVF or SVF2.
         * @summary List Model Views
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getModelViews: async (accessToken: string, urn: string, acceptEncoding?: string, region?: Region,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'urn' is not null or undefined
            assertParamExists('getModelViews', 'urn', urn)
            const localVarPath = `/modelderivative/v2/designdata/{urn}/metadata`
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (acceptEncoding != null) {
                localVarHeaderParameter['Accept-Encoding'] = String(acceptEncoding);
            }

            if (region != null) {
                localVarHeaderParameter['region'] = String(region);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the structured hierarchy of objects, known as an object tree, from the specified Model View (Viewable) within the specified source design. The object tree represents the arrangement and relationships of various objects present in that Model View.  **Note:** A design file must be translated to SVF or SVF2 before you can retrieve its object tree.    Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views in the source design. - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid``  parameter. 
         * @summary Fetch Object tree
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} modelGuid The ID of the Model View you are extracting the object tree from. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
         * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_ 
         * @param {string} [forceget] &#x60;&#x60;true&#x60;&#x60;: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if &#x60;&#x60;forceget&#x60;&#x60; is &#x60;&#x60;false&#x60;&#x60;.   &#x60;&#x60;false&#x60;&#x60;: (Default) Does not retrieve resources if they are larger than 20 MB. 
         * @param {number} [objectid] If specified, retrieves the sub-tree that has the specified Object ID as its parent node. If this parameter is not specified, retrieves the entire object tree.
         * @param {string} [level] Specifies how many child levels of the hierarchy to return, when the &#x60;&#x60;objectid&#x60;&#x60;  parameter is specified. Currently supports only &#x60;&#x60;level&#x60;&#x60; &#x3D; &#x60;&#x60;1&#x60;&#x60;.
         * @param accessToken bearer access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjectTree: async (accessToken: string, urn: string, modelGuid: string, acceptEncoding?: string, region?: Region, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, forceget?: string, objectid?: number, level?: string,  options: ApsServiceRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'urn' is not null or undefined
            assertParamExists('getObjectTree', 'urn', urn)
            // verify required parameter 'modelGuid' is not null or undefined
            assertParamExists('getObjectTree', 'modelGuid', modelGuid)
            const localVarPath = `/modelderivative/v2/designdata/{urn}/metadata/{modelGuid}`
                .replace(`{${"urn"}}`, encodeURIComponent(String(urn)))
                .replace(`{${"modelGuid"}}`, encodeURIComponent(String(modelGuid)));
            const localVarUrlObj = new URL(localVarPath, apsConfiguration.baseAddress);
            let baseOptions;
            if (apsConfiguration) {
                baseOptions = apsConfiguration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            await setBearerAuthToObject(localVarHeaderParameter, accessToken)

            if (forceget !== undefined) {
                localVarQueryParameter['forceget'] = forceget;
            }

            if (objectid !== undefined) {
                localVarQueryParameter['objectid'] = objectid;
            }

            if (level !== undefined) {
                localVarQueryParameter['level'] = level;
            }

            if (acceptEncoding != null) {
                localVarHeaderParameter['Accept-Encoding'] = String(acceptEncoding);
            }

            if (region != null) {
                localVarHeaderParameter['region'] = String(region);
            }

            if (xAdsForce != null) {
                localVarHeaderParameter['x-ads-force'] = typeof xAdsForce === 'string'
                    ? xAdsForce
                    : JSON.stringify(xAdsForce);
            }

            if (xAdsDerivativeFormat != null) {
                localVarHeaderParameter['x-ads-derivative-format'] = typeof xAdsDerivativeFormat === 'string'
                    ? xAdsDerivativeFormat
                    : JSON.stringify(xAdsDerivativeFormat);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetadataApi - functional programming interface
 * @export
 */
export const MetadataApiFp = function(sdkManager?: SDKManager) {
    const localVarAxiosParamCreator = MetadataApiAxiosParamCreator(sdkManager.apsConfiguration)
    return {
        /**
         * Queries the objects in the Model View (Viewable) specified by the ``modelGuid`` parameter and returns the specified properties in a paginated list. You can limit the number of objects to be queried by specifying a filter using the ``query`` attribute in the request body.  **Note:** A design file must be translated to SVF or SVF2 before you can query object properties.    Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views in the source design. - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid``  parameter.
         * @summary Fetch Specific Properties
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} modelGuid The ID of the Model View you are querying. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
         * @param {SpecificPropertiesPayload} [specificPropertiesPayload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchSpecificProperties(accessToken: string, urn: string, modelGuid: string, acceptEncoding?: string, region?: Region, specificPropertiesPayload?: SpecificPropertiesPayload, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SpecificProperties>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchSpecificProperties(accessToken, urn, modelGuid, acceptEncoding, region, specificPropertiesPayload,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a list of properties of all objects in the  Model View specified by the ``modelGuid`` parameter.   This operation returns properties of all objects by default. However, you can restrict the results to a specific object by specifying its ID as the ``objectid`` parameter.  Properties are returned as a flat list, ordered, by their ``objectid``. The ``objectid`` is a non-persistent ID assigned to an object when the source design is translated to the SVF or SVF2 format. This means that:  - A design file must be translated to SVF or SVF2 before you can retrieve properties. - The ``objectid`` of an object can change if the design is translated to SVF or SVF2 again. If you require a persistent ID across translations, use ``externalId`` to reference objects, instead of ``objectid``.  Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views (Viewables) in the source design.  - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid`` parameter.  **Tip**: Use `Fetch Specific Properties </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-GET/>`_ to retrieve only the objects and properties of interest. What’s more, the response is paginated. So, when the number of properties returned is large, responses start arriving more promptly.
         * @summary Fetch All Properties
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} modelGuid The ID of the Model View you are querying. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
         * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_ 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
         * @param {number} [objectid] The Object ID of the object you want to restrict the response to. If you do not specify this parameter, all properties of all objects within the Model View are returned.  
         * @param {string} [forceget] &#x60;&#x60;true&#x60;&#x60;: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if &#x60;&#x60;forceget&#x60;&#x60; is &#x60;&#x60;false&#x60;&#x60;.   &#x60;&#x60;false&#x60;&#x60;: (Default) Does not retrieve resources if they are larger than 20 MB. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllProperties(accessToken: string, urn: string, modelGuid: string, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, region?: Region, objectid?: number, forceget?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AllProperties>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllProperties(accessToken, urn, modelGuid, acceptEncoding, xAdsForce, xAdsDerivativeFormat, region, objectid, forceget,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Returns a list of Model Views (Viewables) in the source design specified by the ``urn`` parameter. It also returns an ID that uniquely identifies the Model View. You can use these IDs with other metadata operations to obtain information about the objects within those Model Views.  Designs created with applications like Fusion 360 and Inventor contain only one Model View per design. Applications like Revit allow multiple Model Views per design.  **Note:** You can retrieve metadata only from a design that has already been translated to SVF or SVF2.
         * @summary List Model Views
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getModelViews(accessToken: string, urn: string, acceptEncoding?: string, region?: Region, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelViews>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getModelViews(accessToken, urn, acceptEncoding, region,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
        /**
         * Retrieves the structured hierarchy of objects, known as an object tree, from the specified Model View (Viewable) within the specified source design. The object tree represents the arrangement and relationships of various objects present in that Model View.  **Note:** A design file must be translated to SVF or SVF2 before you can retrieve its object tree.    Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views in the source design. - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid``  parameter. 
         * @summary Fetch Object tree
         * @param {string} urn The URL-safe Base64 encoded URN of the source design.
         * @param {string} modelGuid The ID of the Model View you are extracting the object tree from. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
         * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
         * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
         * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
         * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_ 
         * @param {string} [forceget] &#x60;&#x60;true&#x60;&#x60;: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if &#x60;&#x60;forceget&#x60;&#x60; is &#x60;&#x60;false&#x60;&#x60;.   &#x60;&#x60;false&#x60;&#x60;: (Default) Does not retrieve resources if they are larger than 20 MB. 
         * @param {number} [objectid] If specified, retrieves the sub-tree that has the specified Object ID as its parent node. If this parameter is not specified, retrieves the entire object tree.
         * @param {string} [level] Specifies how many child levels of the hierarchy to return, when the &#x60;&#x60;objectid&#x60;&#x60;  parameter is specified. Currently supports only &#x60;&#x60;level&#x60;&#x60; &#x3D; &#x60;&#x60;1&#x60;&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getObjectTree(accessToken: string, urn: string, modelGuid: string, acceptEncoding?: string, region?: Region, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, forceget?: string, objectid?: number, level?: string, options?: ApsServiceRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectTree>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getObjectTree(accessToken, urn, modelGuid, acceptEncoding, region, xAdsForce, xAdsDerivativeFormat, forceget, objectid, level,  options);
            return createRequestFunction(localVarAxiosArgs, sdkManager);
        },
    }
};

/**
 * MetadataApi - interface
 * @export
 * @interface MetadataApi
 */
export interface MetadataApiInterface {
    /**
     * Queries the objects in the Model View (Viewable) specified by the ``modelGuid`` parameter and returns the specified properties in a paginated list. You can limit the number of objects to be queried by specifying a filter using the ``query`` attribute in the request body.  **Note:** A design file must be translated to SVF or SVF2 before you can query object properties.    Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views in the source design. - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid``  parameter.
     * @summary Fetch Specific Properties
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {string} modelGuid The ID of the Model View you are querying. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
     * @param {SpecificPropertiesPayload} [specificPropertiesPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApiInterface
     */
    fetchSpecificProperties(accessToken: string,urn: string, modelGuid: string, acceptEncoding?: string, region?: Region, specificPropertiesPayload?: SpecificPropertiesPayload,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a list of properties of all objects in the  Model View specified by the ``modelGuid`` parameter.   This operation returns properties of all objects by default. However, you can restrict the results to a specific object by specifying its ID as the ``objectid`` parameter.  Properties are returned as a flat list, ordered, by their ``objectid``. The ``objectid`` is a non-persistent ID assigned to an object when the source design is translated to the SVF or SVF2 format. This means that:  - A design file must be translated to SVF or SVF2 before you can retrieve properties. - The ``objectid`` of an object can change if the design is translated to SVF or SVF2 again. If you require a persistent ID across translations, use ``externalId`` to reference objects, instead of ``objectid``.  Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views (Viewables) in the source design.  - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid`` parameter.  **Tip**: Use `Fetch Specific Properties </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-GET/>`_ to retrieve only the objects and properties of interest. What’s more, the response is paginated. So, when the number of properties returned is large, responses start arriving more promptly.
     * @summary Fetch All Properties
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {string} modelGuid The ID of the Model View you are querying. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
     * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
     * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_ 
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
     * @param {number} [objectid] The Object ID of the object you want to restrict the response to. If you do not specify this parameter, all properties of all objects within the Model View are returned.  
     * @param {string} [forceget] &#x60;&#x60;true&#x60;&#x60;: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if &#x60;&#x60;forceget&#x60;&#x60; is &#x60;&#x60;false&#x60;&#x60;.   &#x60;&#x60;false&#x60;&#x60;: (Default) Does not retrieve resources if they are larger than 20 MB. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApiInterface
     */
    getAllProperties(accessToken: string,urn: string, modelGuid: string, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, region?: Region, objectid?: number, forceget?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Returns a list of Model Views (Viewables) in the source design specified by the ``urn`` parameter. It also returns an ID that uniquely identifies the Model View. You can use these IDs with other metadata operations to obtain information about the objects within those Model Views.  Designs created with applications like Fusion 360 and Inventor contain only one Model View per design. Applications like Revit allow multiple Model Views per design.  **Note:** You can retrieve metadata only from a design that has already been translated to SVF or SVF2.
     * @summary List Model Views
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApiInterface
     */
    getModelViews(accessToken: string,urn: string, acceptEncoding?: string, region?: Region,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

    /**
     * Retrieves the structured hierarchy of objects, known as an object tree, from the specified Model View (Viewable) within the specified source design. The object tree represents the arrangement and relationships of various objects present in that Model View.  **Note:** A design file must be translated to SVF or SVF2 before you can retrieve its object tree.    Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views in the source design. - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid``  parameter. 
     * @summary Fetch Object tree
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {string} modelGuid The ID of the Model View you are extracting the object tree from. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
     * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
     * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_ 
     * @param {string} [forceget] &#x60;&#x60;true&#x60;&#x60;: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if &#x60;&#x60;forceget&#x60;&#x60; is &#x60;&#x60;false&#x60;&#x60;.   &#x60;&#x60;false&#x60;&#x60;: (Default) Does not retrieve resources if they are larger than 20 MB. 
     * @param {number} [objectid] If specified, retrieves the sub-tree that has the specified Object ID as its parent node. If this parameter is not specified, retrieves the entire object tree.
     * @param {string} [level] Specifies how many child levels of the hierarchy to return, when the &#x60;&#x60;objectid&#x60;&#x60;  parameter is specified. Currently supports only &#x60;&#x60;level&#x60;&#x60; &#x3D; &#x60;&#x60;1&#x60;&#x60;.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApiInterface
     */
    getObjectTree(accessToken: string,urn: string, modelGuid: string, acceptEncoding?: string, region?: Region, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, forceget?: string, objectid?: number, level?: string,  options?: ApsServiceRequestConfig): Promise<ApiResponse>;

}

/**
 * MetadataApi - object-oriented interface
 * @export
 * @class MetadataApi
 * @extends {BaseApi}
 */
export class MetadataApi extends BaseApi implements MetadataApiInterface {
    private logger = this.sdkManager.logger;
    /**
     * Queries the objects in the Model View (Viewable) specified by the ``modelGuid`` parameter and returns the specified properties in a paginated list. You can limit the number of objects to be queried by specifying a filter using the ``query`` attribute in the request body.  **Note:** A design file must be translated to SVF or SVF2 before you can query object properties.    Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views in the source design. - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid``  parameter.
     * @summary Fetch Specific Properties
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {string} modelGuid The ID of the Model View you are querying. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
     * @param {SpecificPropertiesPayload} [specificPropertiesPayload] 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public async fetchSpecificProperties(accessToken: string, urn: string, modelGuid: string, acceptEncoding?: string, region?: Region, specificPropertiesPayload?: SpecificPropertiesPayload, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into fetchSpecificProperties ");
      try {
        const request =  await MetadataApiFp(this.sdkManager).fetchSpecificProperties(accessToken, urn, modelGuid, acceptEncoding, region, specificPropertiesPayload,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`fetchSpecificProperties Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`fetchSpecificProperties Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new ModelDerivativeApiError(`fetchSpecificProperties Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`fetchSpecificProperties Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiError(`fetchSpecificProperties Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a list of properties of all objects in the  Model View specified by the ``modelGuid`` parameter.   This operation returns properties of all objects by default. However, you can restrict the results to a specific object by specifying its ID as the ``objectid`` parameter.  Properties are returned as a flat list, ordered, by their ``objectid``. The ``objectid`` is a non-persistent ID assigned to an object when the source design is translated to the SVF or SVF2 format. This means that:  - A design file must be translated to SVF or SVF2 before you can retrieve properties. - The ``objectid`` of an object can change if the design is translated to SVF or SVF2 again. If you require a persistent ID across translations, use ``externalId`` to reference objects, instead of ``objectid``.  Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views (Viewables) in the source design.  - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid`` parameter.  **Tip**: Use `Fetch Specific Properties </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-GET/>`_ to retrieve only the objects and properties of interest. What’s more, the response is paginated. So, when the number of properties returned is large, responses start arriving more promptly.
     * @summary Fetch All Properties
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {string} modelGuid The ID of the Model View you are querying. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
     * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
     * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_ 
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
     * @param {number} [objectid] The Object ID of the object you want to restrict the response to. If you do not specify this parameter, all properties of all objects within the Model View are returned.  
     * @param {string} [forceget] &#x60;&#x60;true&#x60;&#x60;: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if &#x60;&#x60;forceget&#x60;&#x60; is &#x60;&#x60;false&#x60;&#x60;.   &#x60;&#x60;false&#x60;&#x60;: (Default) Does not retrieve resources if they are larger than 20 MB. 
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public async getAllProperties(accessToken: string, urn: string, modelGuid: string, acceptEncoding?: string, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, region?: Region, objectid?: number, forceget?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getAllProperties ");
      try {
        const request =  await MetadataApiFp(this.sdkManager).getAllProperties(accessToken, urn, modelGuid, acceptEncoding, xAdsForce, xAdsDerivativeFormat, region, objectid, forceget,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getAllProperties Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getAllProperties Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new ModelDerivativeApiError(`getAllProperties Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getAllProperties Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiError(`getAllProperties Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Returns a list of Model Views (Viewables) in the source design specified by the ``urn`` parameter. It also returns an ID that uniquely identifies the Model View. You can use these IDs with other metadata operations to obtain information about the objects within those Model Views.  Designs created with applications like Fusion 360 and Inventor contain only one Model View per design. Applications like Revit allow multiple Model Views per design.  **Note:** You can retrieve metadata only from a design that has already been translated to SVF or SVF2.
     * @summary List Model Views
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public async getModelViews(accessToken: string, urn: string, acceptEncoding?: string, region?: Region, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getModelViews ");
      try {
        const request =  await MetadataApiFp(this.sdkManager).getModelViews(accessToken, urn, acceptEncoding, region,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getModelViews Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getModelViews Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new ModelDerivativeApiError(`getModelViews Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getModelViews Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiError(`getModelViews Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }

    /**
     * Retrieves the structured hierarchy of objects, known as an object tree, from the specified Model View (Viewable) within the specified source design. The object tree represents the arrangement and relationships of various objects present in that Model View.  **Note:** A design file must be translated to SVF or SVF2 before you can retrieve its object tree.    Before you call this operation:  - Use the `List Model Views </en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/>`_ operation to obtain the list of Model Views in the source design. - Pick the ID of the Model View you want to query and specify that ID as the value for the ``modelGuid``  parameter. 
     * @summary Fetch Object tree
     * @param {string} urn The URL-safe Base64 encoded URN of the source design.
     * @param {string} modelGuid The ID of the Model View you are extracting the object tree from. Use the &#x60;List Model Views &lt;/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET&gt;&#x60;_ operation to get the IDs of the Model Views in the source design.
     * @param {string} [acceptEncoding] A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.    If you specify &#x60;&#x60;gzip&#x60;&#x60; or &#x60;&#x60;*&#x60;&#x60;, content is compressed and returned in gzip format. 
     * @param {Region} [region] Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:  - &#x60;&#x60;US&#x60;&#x60; - (Default) Data center for the US region. - &#x60;&#x60;EMEA&#x60;&#x60; - Data center for European Union, Middle East, and Africa.  
     * @param {boolean} [xAdsForce] &#x60;&#x60;true&#x60;&#x60;: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.  &#x60;&#x60;false&#x60;&#x60;: (Default) Use previously parsed property data to extract the object tree. 
     * @param {XAdsDerivativeFormat} [xAdsDerivativeFormat] Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs service. Possible values are:    - &#x60;&#x60;latest&#x60;&#x60; - (Default) Return SVF2 Object IDs.  - &#x60;&#x60;fallback&#x60;&#x60; - Return SVF Object IDs.    **Note:**    1. This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs service.  2. The BIM 360 Docs service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs service. Setting this header to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.  3. If you use this parameter with one derivative (URN), you must use it consistently across the following:      - &#x60;Create Translation Job &lt;en/docs/model-derivative/v2/reference/http/job-POST&gt;&#x60;_ (for OBJ output)     - &#x60;Fetch Object Tree &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET&gt;&#x60;_    - &#x60;Fetch All Properties &lt;en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET&gt;&#x60;_ 
     * @param {string} [forceget] &#x60;&#x60;true&#x60;&#x60;: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if &#x60;&#x60;forceget&#x60;&#x60; is &#x60;&#x60;false&#x60;&#x60;.   &#x60;&#x60;false&#x60;&#x60;: (Default) Does not retrieve resources if they are larger than 20 MB. 
     * @param {number} [objectid] If specified, retrieves the sub-tree that has the specified Object ID as its parent node. If this parameter is not specified, retrieves the entire object tree.
     * @param {string} [level] Specifies how many child levels of the hierarchy to return, when the &#x60;&#x60;objectid&#x60;&#x60;  parameter is specified. Currently supports only &#x60;&#x60;level&#x60;&#x60; &#x3D; &#x60;&#x60;1&#x60;&#x60;.
     * @param accessToken bearer access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public async getObjectTree(accessToken: string, urn: string, modelGuid: string, acceptEncoding?: string, region?: Region, xAdsForce?: boolean, xAdsDerivativeFormat?: XAdsDerivativeFormat, forceget?: string, objectid?: number, level?: string, options?: ApsServiceRequestConfig) {
      this.logger.logInfo("Entered into getObjectTree ");
      try {
        const request =  await MetadataApiFp(this.sdkManager).getObjectTree(accessToken, urn, modelGuid, acceptEncoding, region, xAdsForce, xAdsDerivativeFormat, forceget, objectid, level,  options);
        const response = await request(this.axios);
        this.logger.logInfo(`getObjectTree Request completed successfully with status code: ${response.status}`);
        return new ApiResponse(response,response.data);
      } catch (error) {
        if (error.response) {
            this.logger.logError(`getObjectTree Request failed with status : ${error.response.status} and statusText : ${error.response.statusText} and error message: ${error.response.data.reason}`);
            throw new ModelDerivativeApiError(`getObjectTree Request failed with status : ${error.response.status} and error message: ${error.response.data.reason}`, error);
        } else if (error.request) {
            this.logger.logError(`getObjectTree Request failed with no response received: ${error.request}`);
            throw new ModelDerivativeApiError(`getObjectTree Request failed with no response received: ${error.request}`, error);
        }
        throw error;
      }
    }
}

