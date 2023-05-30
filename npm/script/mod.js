"use strict";
// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.unreachable = exports.unimplemented = exports.rejects = exports.throws = exports.isError = exports.fail = exports.objectMatch = exports.notMatch = exports.match = exports.arrayIncludes = exports.stringIncludes = exports.exists = exports.notInstanceOf = exports.instanceOf = exports.almostEquals = exports.notStrictEquals = exports.strictEquals = exports.notEquals = exports.equals = exports.notOk = exports.ok = void 0;
/** A library of assertion functions.
 * If the assertion is false an `AssertionError` will be thrown which will
 * result in pretty-printed diff of failing assertion.
 *
 * This module is browser compatible, but do not rely on good formatting of
 * values for AssertionError messages in browsers.
 *
 * @module
 */
const deps_js_1 = require("./deps.js");
const _format_npm_js_1 = require("./_format.npm.js");
const CAN_NOT_DISPLAY = "[Cannot display]";
/** Make an assertion, error will be thrown if `expr` does not have truthy value. */
function ok(expr, msg = "") {
    if (!expr) {
        throw new deps_js_1.AssertionError(msg);
    }
}
exports.ok = ok;
function notOk(expr, msg = "") {
    if (expr) {
        throw new deps_js_1.AssertionError(msg);
    }
}
exports.notOk = notOk;
/**
 * Make an assertion that `actual` and `expected` are equal, deeply. If not
 * deeply equal, then throw.
 *
 * Type parameter can be specified to ensure values under comparison have the same type.
 *
 * @example
 * ```ts
 * import { equals } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * Deno.test("example", function (): void {
 *   equals("world", "world");
 *   equals({ hello: "world" }, { hello: "world" });
 * });
 * ```
 */
function equals(actual, expected, msg) {
    if ((0, deps_js_1.equal)(actual, expected)) {
        return;
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    let message = `Values are not equal${msgSuffix}`;
    const actualString = (0, _format_npm_js_1.format)(actual);
    const expectedString = (0, _format_npm_js_1.format)(expected);
    try {
        const stringDiff = (typeof actual === "string") &&
            (typeof expected === "string");
        const diffResult = stringDiff
            ? (0, deps_js_1.diffstr)(actual, expected)
            : (0, deps_js_1.diff)(actualString.split("\n"), expectedString.split("\n"));
        const diffMsg = (0, deps_js_1.buildMessage)(diffResult, { stringDiff }).join("\n");
        message = `${message}\n${diffMsg}`;
    }
    catch {
        message = `${message}\n${(0, deps_js_1.red)(CAN_NOT_DISPLAY)} + \n\n`;
    }
    throw new deps_js_1.AssertionError(message);
}
exports.equals = equals;
/**
 * Make an assertion that `actual` and `expected` are not equal, deeply.
 * If not then throw.
 *
 * Type parameter can be specified to ensure values under comparison have the same type.
 *
 * @example
 * ```ts
 * import { notEquals } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * notEquals<number>(1, 2)
 * ```
 */
function notEquals(actual, expected, msg) {
    if (!(0, deps_js_1.equal)(actual, expected)) {
        return;
    }
    let actualString;
    let expectedString;
    try {
        actualString = String(actual);
    }
    catch {
        actualString = "[Cannot display]";
    }
    try {
        expectedString = String(expected);
    }
    catch {
        expectedString = "[Cannot display]";
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new deps_js_1.AssertionError(`Expected actual: ${actualString} not to be: ${expectedString}${msgSuffix}`);
}
exports.notEquals = notEquals;
/**
 * Make an assertion that `actual` and `expected` are strictly equal. If
 * not then throw.
 *
 * @example
 * ```ts
 * import { strictEquals } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * Deno.test("isStrictlyEqual", function (): void {
 *   const a = {};
 *   const b = a;
 *   strictEquals(a, b);
 * });
 *
 * // This test fails
 * Deno.test("isNotStrictlyEqual", function (): void {
 *   const a = {};
 *   const b = {};
 *   strictEquals(a, b);
 * });
 * ```
 */
function strictEquals(actual, expected, msg) {
    if (Object.is(actual, expected)) {
        return;
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    let message;
    const actualString = (0, _format_npm_js_1.format)(actual);
    const expectedString = (0, _format_npm_js_1.format)(expected);
    if (actualString === expectedString) {
        const withOffset = actualString
            .split("\n")
            .map((l) => `    ${l}`)
            .join("\n");
        message =
            `Values have the same structure but are not reference-equal${msgSuffix}\n\n${(0, deps_js_1.red)(withOffset)}\n`;
    }
    else {
        try {
            const stringDiff = (typeof actual === "string") &&
                (typeof expected === "string");
            const diffResult = stringDiff
                ? (0, deps_js_1.diffstr)(actual, expected)
                : (0, deps_js_1.diff)(actualString.split("\n"), expectedString.split("\n"));
            const diffMsg = (0, deps_js_1.buildMessage)(diffResult, { stringDiff }).join("\n");
            message = `Values are not strictly equal${msgSuffix}\n${diffMsg}`;
        }
        catch {
            message = `\n${(0, deps_js_1.red)(CAN_NOT_DISPLAY)} + \n\n`;
        }
    }
    throw new deps_js_1.AssertionError(message);
}
exports.strictEquals = strictEquals;
/**
 * Make an assertion that `actual` and `expected` are not strictly equal.
 * If the values are strictly equal then throw.
 *
 * ```ts
 * import { notStrictEquals } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * notStrictEquals(1, 1)
 * ```
 */
function notStrictEquals(actual, expected, msg) {
    if (!Object.is(actual, expected)) {
        return;
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new deps_js_1.AssertionError(`Expected "actual" to be strictly unequal to: ${(0, _format_npm_js_1.format)(actual)}${msgSuffix}\n`);
}
exports.notStrictEquals = notStrictEquals;
/**
 * Make an assertion that `actual` and `expected` are almost equal numbers through
 * a given tolerance. It can be used to take into account IEEE-754 double-precision
 * floating-point representation limitations.
 * If the values are not almost equal then throw.
 *
 * @example
 * ```ts
 * import { almostEquals, throws } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * almostEquals(0.1, 0.2);
 *
 * // Using a custom tolerance value
 * almostEquals(0.1 + 0.2, 0.3, 1e-16);
 * throws(() => almostEquals(0.1 + 0.2, 0.3, 1e-17));
 * ```
 */
function almostEquals(actual, expected, tolerance = 1e-7, msg) {
    if (Object.is(actual, expected)) {
        return;
    }
    const delta = Math.abs(expected - actual);
    if (delta <= tolerance) {
        return;
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    const f = (n) => Number.isInteger(n) ? n : n.toExponential();
    throw new deps_js_1.AssertionError(`Expected actual: "${f(actual)}" to be close to "${f(expected)}": \
delta "${f(delta)}" is greater than "${f(tolerance)}"${msgSuffix}`);
}
exports.almostEquals = almostEquals;
/**
 * Make an assertion that `obj` is an instance of `type`.
 * If not then throw.
 */
function instanceOf(actual, expectedType, msg = "") {
    if (actual instanceof expectedType)
        return;
    const msgSuffix = msg ? `: ${msg}` : ".";
    const expectedTypeStr = expectedType.name;
    let actualTypeStr = "";
    if (actual === null) {
        actualTypeStr = "null";
    }
    else if (actual === undefined) {
        actualTypeStr = "undefined";
    }
    else if (typeof actual === "object") {
        actualTypeStr = actual.constructor?.name ?? "Object";
    }
    else {
        actualTypeStr = typeof actual;
    }
    if (expectedTypeStr == actualTypeStr) {
        msg =
            `Expected object to be an instance of "${expectedTypeStr}"${msgSuffix}`;
    }
    else if (actualTypeStr == "function") {
        msg =
            `Expected object to be an instance of "${expectedTypeStr}" but was not an instanced object${msgSuffix}`;
    }
    else {
        msg =
            `Expected object to be an instance of "${expectedTypeStr}" but was "${actualTypeStr}"${msgSuffix}`;
    }
    throw new deps_js_1.AssertionError(msg);
}
exports.instanceOf = instanceOf;
/**
 * Make an assertion that `obj` is not an instance of `type`.
 * If so, then throw.
 */
function notInstanceOf(actual, 
// deno-lint-ignore no-explicit-any
unexpectedType, msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    msg =
        `Expected object to not be an instance of "${typeof unexpectedType}"${msgSuffix}`;
    notOk(actual instanceof unexpectedType, msg);
}
exports.notInstanceOf = notInstanceOf;
/**
 * Make an assertion that actual is not null or undefined.
 * If not then throw.
 */
function exists(actual, msg) {
    if (actual === undefined || actual === null) {
        const msgSuffix = msg ? `: ${msg}` : ".";
        msg =
            `Expected actual: "${actual}" to not be null or undefined${msgSuffix}`;
        throw new deps_js_1.AssertionError(msg);
    }
}
exports.exists = exists;
/**
 * Make an assertion that actual includes expected. If not
 * then throw.
 */
function stringIncludes(actual, expected, msg) {
    if (!actual.includes(expected)) {
        const msgSuffix = msg ? `: ${msg}` : ".";
        msg = `Expected actual: "${actual}" to contain: "${expected}"${msgSuffix}`;
        throw new deps_js_1.AssertionError(msg);
    }
}
exports.stringIncludes = stringIncludes;
/**
 * Make an assertion that `actual` includes the `expected` values.
 * If not then an error will be thrown.
 *
 * Type parameter can be specified to ensure values under comparison have the same type.
 *
 * @example
 * ```ts
 * import { arrayIncludes } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * arrayIncludes<number>([1, 2], [2])
 * ```
 */
function arrayIncludes(actual, expected, msg) {
    const missing = [];
    for (let i = 0; i < expected.length; i++) {
        let found = false;
        for (let j = 0; j < actual.length; j++) {
            if ((0, deps_js_1.equal)(expected[i], actual[j])) {
                found = true;
                break;
            }
        }
        if (!found) {
            missing.push(expected[i]);
        }
    }
    if (missing.length === 0) {
        return;
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    msg = `Expected actual: "${(0, _format_npm_js_1.format)(actual)}" to include: "${(0, _format_npm_js_1.format)(expected)}"${msgSuffix}\nmissing: ${(0, _format_npm_js_1.format)(missing)}`;
    throw new deps_js_1.AssertionError(msg);
}
exports.arrayIncludes = arrayIncludes;
/**
 * Make an assertion that `actual` match RegExp `expected`. If not
 * then throw.
 */
function match(actual, expected, msg) {
    if (!expected.test(actual)) {
        const msgSuffix = msg ? `: ${msg}` : ".";
        msg = `Expected actual: "${actual}" to match: "${expected}"${msgSuffix}`;
        throw new deps_js_1.AssertionError(msg);
    }
}
exports.match = match;
/**
 * Make an assertion that `actual` not match RegExp `expected`. If match
 * then throw.
 */
function notMatch(actual, expected, msg) {
    if (expected.test(actual)) {
        const msgSuffix = msg ? `: ${msg}` : ".";
        msg =
            `Expected actual: "${actual}" to not match: "${expected}"${msgSuffix}`;
        throw new deps_js_1.AssertionError(msg);
    }
}
exports.notMatch = notMatch;
/**
 * Make an assertion that `actual` object is a subset of `expected` object, deeply.
 * If not, then throw.
 */
function objectMatch(
// deno-lint-ignore no-explicit-any
actual, expected, msg) {
    function filter(a, b) {
        const seen = new WeakMap();
        return fn(a, b);
        function fn(a, b) {
            // Prevent infinite loop with circular references with same filter
            if ((seen.has(a)) && (seen.get(a) === b)) {
                return a;
            }
            seen.set(a, b);
            // Filter keys and symbols which are present in both actual and expected
            const filtered = {};
            const entries = [
                ...Object.getOwnPropertyNames(a),
                ...Object.getOwnPropertySymbols(a),
            ]
                .filter((key) => key in b)
                .map((key) => [key, a[key]]);
            for (const [key, value] of entries) {
                // On array references, build a filtered array and filter nested objects inside
                if (Array.isArray(value)) {
                    const subset = b[key];
                    if (Array.isArray(subset)) {
                        filtered[key] = fn({ ...value }, { ...subset });
                        continue;
                    }
                } // On regexp references, keep value as it to avoid loosing pattern and flags
                else if (value instanceof RegExp) {
                    filtered[key] = value;
                    continue;
                } // On nested objects references, build a filtered object recursively
                else if (typeof value === "object") {
                    const subset = b[key];
                    if ((typeof subset === "object") && (subset)) {
                        // When both operands are maps, build a filtered map with common keys and filter nested objects inside
                        if ((value instanceof Map) && (subset instanceof Map)) {
                            filtered[key] = new Map([...value].filter(([k]) => subset.has(k)).map(([k, v]) => [k, typeof v === "object" ? fn(v, subset.get(k)) : v]));
                            continue;
                        }
                        // When both operands are set, build a filtered set with common values
                        if ((value instanceof Set) && (subset instanceof Set)) {
                            filtered[key] = new Set([...value].filter((v) => subset.has(v)));
                            continue;
                        }
                        filtered[key] = fn(value, subset);
                        continue;
                    }
                }
                filtered[key] = value;
            }
            return filtered;
        }
    }
    return equals(
    // get the intersection of "actual" and "expected"
    // side effect: all the instances' constructor field is "Object" now.
    filter(actual, expected), 
    // set (nested) instances' constructor field to be "Object" without changing expected value.
    // see https://github.com/denoland/deno_std/pull/1419
    filter(expected, expected), msg);
}
exports.objectMatch = objectMatch;
/**
 * Forcefully throws a failed assertion
 */
function fail(msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    ok(false, `Failed assertion${msgSuffix}`);
}
exports.fail = fail;
/**
 * Make an assertion that `error` is an `Error`.
 * If not then an error will be thrown.
 * An error class and a string that should be included in the
 * error message can also be asserted.
 */
function isError(error, 
// deno-lint-ignore no-explicit-any
ErrorClass, msgIncludes, msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    if (error instanceof Error === false) {
        throw new deps_js_1.AssertionError(`Expected "error" to be an Error object${msgSuffix}}`);
    }
    if (ErrorClass && !(error instanceof ErrorClass)) {
        msg = `Expected error to be instance of "${ErrorClass.name}", but was "${typeof error === "object" ? error?.constructor?.name : "[not an object]"}"${msgSuffix}`;
        throw new deps_js_1.AssertionError(msg);
    }
    if (msgIncludes && (!(error instanceof Error) ||
        !(0, deps_js_1.stripColor)(error.message).includes((0, deps_js_1.stripColor)(msgIncludes)))) {
        msg = `Expected error message to include "${msgIncludes}", but got "${error instanceof Error ? error.message : "[not an Error]"}"${msgSuffix}`;
        throw new deps_js_1.AssertionError(msg);
    }
}
exports.isError = isError;
function throws(fn, errorClassOrMsg, msgIncludesOrMsg, msg) {
    // deno-lint-ignore no-explicit-any
    let ErrorClass = undefined;
    let msgIncludes = undefined;
    let err;
    if (typeof errorClassOrMsg !== "string") {
        if (errorClassOrMsg === undefined ||
            errorClassOrMsg.prototype instanceof Error ||
            errorClassOrMsg.prototype === Error.prototype) {
            // deno-lint-ignore no-explicit-any
            ErrorClass = errorClassOrMsg;
            msgIncludes = msgIncludesOrMsg;
        }
        else {
            msg = msgIncludesOrMsg;
        }
    }
    else {
        msg = errorClassOrMsg;
    }
    let doesThrow = false;
    const msgSuffix = msg ? `: ${msg}` : ".";
    try {
        fn();
    }
    catch (error) {
        if (ErrorClass) {
            if (error instanceof Error === false) {
                throw new deps_js_1.AssertionError(`A non-Error object was thrown${msgSuffix}`);
            }
            isError(error, ErrorClass, msgIncludes, msg);
        }
        err = error;
        doesThrow = true;
    }
    if (!doesThrow) {
        msg = `Expected function to throw${msgSuffix}`;
        throw new deps_js_1.AssertionError(msg);
    }
    return err;
}
exports.throws = throws;
async function rejects(fn, errorClassOrMsg, msgIncludesOrMsg, msg) {
    // deno-lint-ignore no-explicit-any
    let ErrorClass = undefined;
    let msgIncludes = undefined;
    let err;
    if (typeof errorClassOrMsg !== "string") {
        if (errorClassOrMsg === undefined ||
            errorClassOrMsg.prototype instanceof Error ||
            errorClassOrMsg.prototype === Error.prototype) {
            // deno-lint-ignore no-explicit-any
            ErrorClass = errorClassOrMsg;
            msgIncludes = msgIncludesOrMsg;
        }
    }
    else {
        msg = errorClassOrMsg;
    }
    let doesThrow = false;
    let isPromiseReturned = false;
    const msgSuffix = msg ? `: ${msg}` : ".";
    try {
        const possiblePromise = fn();
        if (possiblePromise &&
            typeof possiblePromise === "object" &&
            typeof possiblePromise.then === "function") {
            isPromiseReturned = true;
            await possiblePromise;
        }
    }
    catch (error) {
        if (!isPromiseReturned) {
            throw new deps_js_1.AssertionError(`Function throws when expected to reject${msgSuffix}`);
        }
        if (ErrorClass) {
            if (error instanceof Error === false) {
                throw new deps_js_1.AssertionError(`A non-Error object was rejected${msgSuffix}`);
            }
            isError(error, ErrorClass, msgIncludes, msg);
        }
        err = error;
        doesThrow = true;
    }
    if (!doesThrow) {
        throw new deps_js_1.AssertionError(`Expected function to reject${msgSuffix}`);
    }
    return err;
}
exports.rejects = rejects;
/** Use this to stub out methods that will throw when invoked. */
function unimplemented(msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new deps_js_1.AssertionError(`Unimplemented${msgSuffix}`);
}
exports.unimplemented = unimplemented;
/** Use this to assert unreachable code. */
function unreachable() {
    throw new deps_js_1.AssertionError("unreachable");
}
exports.unreachable = unreachable;
