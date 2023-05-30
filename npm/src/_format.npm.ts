import { inspect } from "util"


// deno-lint-ignore no-unused-vars
export function setAllowTrailingCommas(value: boolean): void {
    // not supported in node
}

export function format(v: unknown): string {
    return inspect(v, {
        depth: Infinity,
        sorted: true,
        compact: false,
        getters: true,
    }).replace(/'(.*[^\\'])'/gm, '\"$1\"');
}

