// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

let allowTrailingCommas = false;

export function setAllowTrailingCommas(value: boolean): void {
    allowTrailingCommas = value;
}

/**
 * Converts the input into a string. Objects, Sets and Maps are sorted so as to
 * make tests less flaky
 * @param v Value to be formatted
 */
export function format(v: unknown): string {
    // deno-lint-ignore no-explicit-any
    const { Deno } = globalThis as any;
    return typeof Deno?.inspect === "function"
      ? Deno.inspect(v, {
        depth: Infinity,
        sorted: true,
        trailingComma: allowTrailingCommas,
        compact: false,
        iterableLimit: Infinity,
        // getters should be true in assertEquals.
        getters: true,
      })
      : `"${String(v).replace(/(?=["\\])/g, "\\")}"`;
  }