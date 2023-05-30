import { inspect } from "util";
// deno-lint-ignore no-unused-vars
export function setAllowTrailingCommas(value) {
    // not supported in node
}
export function format(v) {
    return inspect(v, {
        depth: Infinity,
        sorted: true,
        compact: false,
        getters: true,
    }).replace(/'(.*[^\\'])'/gm, '\"$1\"');
}
