"use strict";
/* tslint:disable */
/* eslint-disable */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestFunction = exports.toPathString = exports.serializeDataIfNeeded = exports.setSearchParams = exports.setBearerAuthToObject = exports.assertParamExists = void 0;
var base_1 = require("./base");
/**
 *
 * @throws {RequiredError}
 * @export
 */
var assertParamExists = function (functionName, paramName, paramValue) {
    if (paramValue === null || paramValue === undefined) {
        throw new base_1.RequiredError(paramName, "Required parameter ".concat(paramName, " was null or undefined when calling ").concat(functionName, "."));
    }
};
exports.assertParamExists = assertParamExists;
/**
 *
 * @export
 */
var setBearerAuthToObject = function (object, accessToken) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            object["Authorization"] = "Bearer " + accessToken;
            return [2 /*return*/];
        });
    });
};
exports.setBearerAuthToObject = setBearerAuthToObject;
function setFlattenedQueryParams(urlSearchParams, parameter, key) {
    if (key === void 0) { key = ""; }
    if (parameter == null)
        return;
    if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
            parameter.forEach(function (item) { return setFlattenedQueryParams(urlSearchParams, item, key); });
        }
        else {
            Object.keys(parameter).forEach(function (currentKey) {
                return setFlattenedQueryParams(urlSearchParams, parameter[currentKey], "".concat(key).concat(key !== '' ? '.' : '').concat(currentKey));
            });
        }
    }
    else {
        if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, parameter);
        }
        else {
            urlSearchParams.set(key, parameter);
        }
    }
}
/**
 *
 * @export
 */
var setSearchParams = function (url) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    var searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
};
exports.setSearchParams = setSearchParams;
/**
 *
 * @export
 */
var serializeDataIfNeeded = function (value, requestOptions, apsConfiguration) {
    var nonString = typeof value !== 'string';
    var needsSerialization = nonString && apsConfiguration && isJsonMime
        ? isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? value : {})
        : (value || "");
};
exports.serializeDataIfNeeded = serializeDataIfNeeded;
/**
* Check if the given MIME is a JSON MIME.
* JSON MIME examples:
*   application/json
*   application/json; charset=UTF8
*   APPLICATION/JSON
*   application/vnd.company+json
* @param mime - MIME (Multipurpose Internet Mail Extensions)
* @return True if the given MIME is JSON, false otherwise.
*/
function isJsonMime(mime) {
    var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
    return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
}
/**
 *
 * @export
 */
var toPathString = function (url) {
    return url.pathname + url.search + url.hash;
};
exports.toPathString = toPathString;
/**
 *
 * @export
 */
var createRequestFunction = function (axiosArgs, sdkManager) {
    return function () {
        var _a, _b;
        var config = __assign(__assign({}, axiosArgs.options), { url: ((_a = sdkManager.apsconfiguration) === null || _a === void 0 ? void 0 : _a.baseAddress) + axiosArgs.url });
        return (_b = sdkManager === null || sdkManager === void 0 ? void 0 : sdkManager.apsclient) === null || _b === void 0 ? void 0 : _b.apsService.request(config);
    };
};
exports.createRequestFunction = createRequestFunction;
