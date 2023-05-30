"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.setAllowTrailingCommas = void 0;
const util_1 = require("util");
// deno-lint-ignore no-unused-vars
function setAllowTrailingCommas(value) {
    // not supported in node
}
exports.setAllowTrailingCommas = setAllowTrailingCommas;
function format(v) {
    return (0, util_1.inspect)(v, {
        depth: Infinity,
        sorted: true,
        compact: false,
        getters: true,
    }).replace(/'(.*[^\\'])'/gm, '\"$1\"');
}
exports.format = format;
