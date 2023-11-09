"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setScope = void 0;
function setScope(scopeEnum, value) {
    const scope = {};
    scope[scopeEnum] = value;
    return scope;
}
exports.setScope = setScope;
