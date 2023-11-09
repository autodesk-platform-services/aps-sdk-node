"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setScope = void 0;
// export function setScope(
//   scopeEnum: Scopes,
//   value: string
// ): Record<Scopes, string> {
//   const scope: Record<Scopes, string> = {} as Record<Scopes, string>;
//   scope[scopeEnum] = value;
//   return scope;
// }
function setScope(scope, scopeEnum, value) {
    if (scope == null) {
        scope = {};
    }
    scope[scopeEnum] = value;
    return scope;
}
exports.setScope = setScope;
