/** Make an assertion, error will be thrown if `expr` does not have truthy value. */
export declare function ok(expr: unknown, msg?: string): asserts expr;
/** Make an assertion, error will be thrown if `expr` have truthy value. */
type Falsy = false | 0 | 0n | "" | null | undefined;
export declare function notOk(expr: unknown, msg?: string): asserts expr is Falsy;
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
export declare function equals<T>(actual: T, expected: T, msg?: string): void;
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
export declare function notEquals<T>(actual: T, expected: T, msg?: string): void;
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
export declare function strictEquals<T>(actual: unknown, expected: T, msg?: string): asserts actual is T;
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
export declare function notStrictEquals<T>(actual: T, expected: T, msg?: string): void;
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
export declare function almostEquals(actual: number, expected: number, tolerance?: number, msg?: string): void;
type AnyConstructor = new (...args: any[]) => any;
type GetConstructorType<T extends AnyConstructor> = T extends new (...args: any) => infer C ? C : never;
/**
 * Make an assertion that `obj` is an instance of `type`.
 * If not then throw.
 */
export declare function instanceOf<T extends AnyConstructor>(actual: unknown, expectedType: T, msg?: string): asserts actual is GetConstructorType<T>;
/**
 * Make an assertion that `obj` is not an instance of `type`.
 * If so, then throw.
 */
export declare function notInstanceOf<A, T>(actual: A, unexpectedType: new (...args: any[]) => T, msg?: string): asserts actual is Exclude<A, T>;
/**
 * Make an assertion that actual is not null or undefined.
 * If not then throw.
 */
export declare function exists<T>(actual: T, msg?: string): asserts actual is NonNullable<T>;
/**
 * Make an assertion that actual includes expected. If not
 * then throw.
 */
export declare function stringIncludes(actual: string, expected: string, msg?: string): void;
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
export declare function arrayIncludes<T>(actual: ArrayLike<T>, expected: ArrayLike<T>, msg?: string): void;
/**
 * Make an assertion that `actual` match RegExp `expected`. If not
 * then throw.
 */
export declare function match(actual: string, expected: RegExp, msg?: string): void;
/**
 * Make an assertion that `actual` not match RegExp `expected`. If match
 * then throw.
 */
export declare function notMatch(actual: string, expected: RegExp, msg?: string): void;
/**
 * Make an assertion that `actual` object is a subset of `expected` object, deeply.
 * If not, then throw.
 */
export declare function objectMatch(actual: Record<PropertyKey, any>, expected: Record<PropertyKey, unknown>, msg?: string): void;
/**
 * Forcefully throws a failed assertion
 */
export declare function fail(msg?: string): never;
/**
 * Make an assertion that `error` is an `Error`.
 * If not then an error will be thrown.
 * An error class and a string that should be included in the
 * error message can also be asserted.
 */
export declare function isError<E extends Error = Error>(error: unknown, ErrorClass?: new (...args: any[]) => E, msgIncludes?: string, msg?: string): asserts error is E;
/**
 * Executes a function, expecting it to throw. If it does not, then it
 * throws.
 *
 * @example
 * ```ts
 * import { throws } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * Deno.test("doesThrow", function (): void {
 *   throws((): void => {
 *     throw new TypeError("hello world!");
 *   });
 * });
 *
 * // This test will not pass.
 * Deno.test("fails", function (): void {
 *   throws((): void => {
 *     console.log("Hello world");
 *   });
 * });
 * ```
 */
export declare function throws(fn: () => unknown, msg?: string): unknown;
/**
 * Executes a function, expecting it to throw. If it does not, then it
 * throws. An error class and a string that should be included in the
 * error message can also be asserted.
 *
 * @example
 *
 * ```ts
 * import { throws } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * Deno.test("doesThrow", function (): void {
 *   throws((): void => {
 *     throw new TypeError("hello world!");
 *   }, TypeError);
 *   throws(
 *     (): void => {
 *       throw new TypeError("hello world!");
 *     },
 *     TypeError,
 *     "hello",
 *   );
 * });
 *
 * // This test will not pass.
 * Deno.test("fails", function (): void {
 *   throws((): void => {
 *     console.log("Hello world");
 *   });
 * });
 * ```
 */
export declare function throws<E extends Error = Error>(fn: () => unknown, ErrorClass: new (...args: any[]) => E, msgIncludes?: string, msg?: string): E;
/**
 * Executes a function which returns a promise, expecting it to reject.
 *
 * @example
 * ```ts
 * import { rejects } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * Deno.test("doesThrow", async function () {
 *   await rejects(
 *     async () => {
 *       throw new TypeError("hello world!");
 *     },
 *   );
 *   await rejects(
 *     async () => {
 *       return Promise.reject(new Error());
 *     },
 *   );
 * });
 *
 * // This test will not pass.
 * Deno.test("fails", async function () {
 *   await rejects(
 *     async () => {
 *       console.log("Hello world");
 *     },
 *   );
 * });
 * ```
 */
export declare function rejects(fn: () => PromiseLike<unknown>, msg?: string): Promise<unknown>;
/**
 * Executes a function which returns a promise, expecting it to reject.
 * If it does not, then it throws. An error class and a string that should be
 * included in the error message can also be asserted.
 *
 * @example
 * ```ts
 * import { rejects } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * Deno.test("doesThrow", async function () {
 *   await rejects(async () => {
 *     throw new TypeError("hello world!");
 *   }, TypeError);
 *   await rejects(
 *     async () => {
 *       throw new TypeError("hello world!");
 *     },
 *     TypeError,
 *     "hello",
 *   );
 * });
 *
 * // This test will not pass.
 * Deno.test("fails", async function () {
 *   await rejects(
 *     async () => {
 *       console.log("Hello world");
 *     },
 *   );
 * });
 * ```
 */
export declare function rejects<E extends Error = Error>(fn: () => PromiseLike<unknown>, ErrorClass: new (...args: any[]) => E, msgIncludes?: string, msg?: string): Promise<E>;
/** Use this to stub out methods that will throw when invoked. */
export declare function unimplemented(msg?: string): never;
/** Use this to assert unreachable code. */
export declare function unreachable(): never;
export {};
