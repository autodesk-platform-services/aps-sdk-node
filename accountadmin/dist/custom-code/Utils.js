"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const model_1 = require("../model");
class Utils {
    static GetPathfromRegion(region) {
        switch (region) {
            case model_1.Region.Us:
                return "/hq/v1/accounts/";
            case model_1.Region.Emea:
                return "/hq/v1/regions/eu/accounts/";
            default:
                return "/hq/v1/accounts/";
        }
    }
}
exports.Utils = Utils;
