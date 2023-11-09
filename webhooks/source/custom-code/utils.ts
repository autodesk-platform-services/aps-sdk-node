import { Scopes, HookPayload } from '../model'; // Import your Scopes enum and HookPayload type

// export function setScope(
//   scopeEnum: Scopes,
//   value: string
// ): Record<Scopes, string> {
//   const scope: Record<Scopes, string> = {} as Record<Scopes, string>;
//   scope[scopeEnum] = value;
//   return scope;
// }

export function setScope(
  scope: { [key in Scopes]: string },
  scopeEnum: Scopes,
  value: string
): { [key in Scopes]: string } {
  if (scope == null) {
    scope = {} as { [key in Scopes]: string };
  }

  scope[scopeEnum] = value;
  return scope;
}
