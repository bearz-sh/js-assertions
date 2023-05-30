"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
const dntShim = __importStar(require("./_dnt.test_shims.js"));
const mod_js_1 = require("./mod.js");
const deps_js_1 = require("./deps.js");
dntShim.Deno.test("EqualDifferentZero", () => {
    (0, mod_js_1.ok)((0, deps_js_1.equal)(0, -0));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(0, +0));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(+0, -0));
    (0, mod_js_1.ok)((0, deps_js_1.equal)([0], [-0]));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(["hello", 12.21, 0], ["hello", 12.21, -0]));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(["hello", 12.21, 0], ["hello", 12.21, +0]));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(["hello", 12.21, -0], ["hello", 12.21, +0]));
    (0, mod_js_1.ok)((0, deps_js_1.equal)({ msg: "hello", case: 0 }, { msg: "hello", case: -0 }));
    (0, mod_js_1.ok)((0, deps_js_1.equal)({ msg: "hello", array: [0] }, { msg: "hello", array: [-0] }));
});
dntShim.Deno.test("Equal", function () {
    var _A_hello, _a, _B_hello, _b, _A_hello_1, _c, _B_hello_1, _d;
    (0, mod_js_1.ok)((0, deps_js_1.equal)("world", "world"));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)("hello", "world"));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)("hello", "world"));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(5, 5));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(5, 6));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(5, 6));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(NaN, NaN));
    (0, mod_js_1.ok)((0, deps_js_1.equal)({ hello: "world" }, { hello: "world" }));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)({ world: "hello" }, { hello: "world" }));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)({ world: "hello" }, { hello: "world" }));
    (0, mod_js_1.ok)((0, deps_js_1.equal)({ hello: "world", hi: { there: "everyone" } }, { hello: "world", hi: { there: "everyone" } }));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)({ hello: "world", hi: { there: "everyone" } }, { hello: "world", hi: { there: "everyone else" } }));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)({ hello: "world", hi: { there: "everyone" } }, { hello: "world", hi: { there: "everyone else" } }));
    (0, mod_js_1.ok)((0, deps_js_1.equal)({ [Symbol.for("foo")]: "bar" }, { [Symbol.for("foo")]: "bar" }));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)({ [Symbol("foo")]: "bar" }, { [Symbol("foo")]: "bar" }));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)({ [Symbol("foo")]: "bar" }, { [Symbol("foo")]: "bar" }));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(/deno/, /deno/));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(/deno/, /node/));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(/deno/, /node/));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Date(2019, 0, 3), new Date(2019, 0, 3)));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Date(2019, 0, 3), new Date(2019, 1, 3)));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Date(2019, 0, 3), new Date(2019, 1, 3)));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Date(2019, 0, 3, 4, 20, 1, 10), new Date(2019, 0, 3, 4, 20, 1, 20)));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Date(2019, 0, 3, 4, 20, 1, 10), new Date(2019, 0, 3, 4, 20, 1, 20)));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Date("Invalid"), new Date("Invalid")));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Date("Invalid"), new Date(2019, 0, 3)));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Date("Invalid"), new Date(2019, 0, 3)));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Date("Invalid"), new Date(2019, 0, 3, 4, 20, 1, 10)));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Date("Invalid"), new Date(2019, 0, 3, 4, 20, 1, 10)));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Set([1]), new Set([1])));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Set([1]), new Set([2])));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Set([1]), new Set([2])));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Set([1, 2, 3]), new Set([3, 2, 1])));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Set([1, new Set([2, 3])]), new Set([new Set([3, 2]), 1])));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Set([1, 2]), new Set([3, 2, 1])));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Set([1, 2]), new Set([3, 2, 1])));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Set([1, 2, 3]), new Set([4, 5, 6])));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Set([1, 2, 3]), new Set([4, 5, 6])));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Set("denosaurus"), new Set("denosaurussss")));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Map(), new Map()));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Map([
        ["foo", "bar"],
        ["baz", "baz"],
    ]), new Map([
        ["foo", "bar"],
        ["baz", "baz"],
    ])));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Map([["foo", new Map([["bar", "baz"]])]]), new Map([["foo", new Map([["bar", "baz"]])]])));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Map([["foo", { bar: "baz" }]]), new Map([["foo", { bar: "baz" }]])));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Map([
        ["foo", "bar"],
        ["baz", "qux"],
    ]), new Map([
        ["baz", "qux"],
        ["foo", "bar"],
    ])));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Map([["foo", ["bar"]]]), new Map([["foo", ["bar"]]])));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Map([["foo", "bar"]]), new Map([["bar", "baz"]])));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Map([["foo", "bar"]]), new Map([["bar", "baz"]])));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Map([["foo", "bar"]]), new Map([["bar", "baz"]])));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Map([["foo", "bar"]]), new Map([
        ["foo", "bar"],
        ["bar", "baz"],
    ])));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Map([["foo", "bar"]]), new Map([
        ["foo", "bar"],
        ["bar", "baz"],
    ])));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Map([["foo", new Map([["bar", "baz"]])]]), new Map([["foo", new Map([["bar", "qux"]])]])));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Map([[{ x: 1 }, true]]), new Map([[{ x: 1 }, true]])));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Map([[{ x: 1 }, true]]), new Map([[{ x: 1 }, false]])));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Map([[{ x: 1 }, true]]), new Map([[{ x: 1 }, false]])));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Map([[{ x: 1 }, true]]), new Map([[{ x: 2 }, true]])));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Map([[{ x: 1 }, true]]), new Map([[{ x: 2 }, true]])));
    (0, mod_js_1.ok)((0, deps_js_1.equal)([1, 2, 3], [1, 2, 3]));
    (0, mod_js_1.ok)((0, deps_js_1.equal)([1, [2, 3]], [1, [2, 3]]));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)([1, 2, 3, 4], [1, 2, 3]));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)([1, 2, 3, 4], [1, 2, 3]));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)([1, 2, 3, 4], [1, 2, 3]));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)([1, 2, 3, 4], [1, 2, 3]));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)([1, 2, 3, 4], [1, 4, 2, 3]));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)([1, 2, 3, 4], [1, 4, 2, 3]));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new Uint8Array([1, 2, 3, 4]), new Uint8Array([1, 2, 3, 4])));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new Uint8Array([1, 2, 3, 4]), new Uint8Array([2, 1, 4, 3])));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new Uint8Array([1, 2, 3, 4]), new Uint8Array([2, 1, 4, 3])));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new URL("https://example.test"), new URL("https://example.test")));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new URL("https://example.test"), new URL("https://example.test/with-path")));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new URL("https://example.test"), new URL("https://example.test/with-path")));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)({ a: undefined, b: undefined }, { a: undefined, c: undefined }));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)({ a: undefined, b: undefined }, { a: undefined, c: undefined }));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)({ a: undefined, b: undefined }, { a: undefined }));
    (0, mod_js_1.throws)(() => (0, deps_js_1.equal)(new WeakMap(), new WeakMap()));
    (0, mod_js_1.throws)(() => (0, deps_js_1.equal)(new WeakSet(), new WeakSet()));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new WeakMap(), new WeakSet()));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new WeakMap(), new WeakSet()));
    (0, mod_js_1.ok)((0, deps_js_1.equal)(new WeakRef({ hello: "world" }), new WeakRef({ hello: "world" })));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new WeakRef({ world: "hello" }), new WeakRef({ hello: "world" })));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new WeakRef({ world: "hello" }), new WeakRef({ hello: "world" })));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)({ hello: "world" }, new WeakRef({ hello: "world" })));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)({ hello: "world" }, new WeakRef({ hello: "world" })));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new WeakRef({ hello: "world" }), 
    // deno-lint-ignore ban-types
    new (class extends WeakRef {
    })({ hello: "world" })));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new WeakRef({ hello: "world" }), 
    // deno-lint-ignore ban-types
    new (class extends WeakRef {
    })({ hello: "world" })));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new WeakRef({ hello: "world" }), 
    // deno-lint-ignore ban-types
    new (class extends WeakRef {
        constructor() {
            super(...arguments);
            Object.defineProperty(this, "foo", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "bar"
            });
        }
    })({ hello: "world" })));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new WeakRef({ hello: "world" }), 
    // deno-lint-ignore ban-types
    new (class extends WeakRef {
        constructor() {
            super(...arguments);
            Object.defineProperty(this, "foo", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "bar"
            });
        }
    })({ hello: "world" })));
    (0, mod_js_1.ok)(!(0, deps_js_1.equal)(new (_a = class A {
            constructor() {
                _A_hello.set(this, "world");
            }
        },
        _A_hello = new WeakMap(),
        _a)(), new (_b = class B {
            constructor() {
                _B_hello.set(this, "world");
            }
        },
        _B_hello = new WeakMap(),
        _b)()));
    (0, mod_js_1.notOk)((0, deps_js_1.equal)(new (_c = class A {
            constructor() {
                _A_hello_1.set(this, "world");
            }
        },
        _A_hello_1 = new WeakMap(),
        _c)(), new (_d = class B {
            constructor() {
                _B_hello_1.set(this, "world");
            }
        },
        _B_hello_1 = new WeakMap(),
        _d)()));
});
dntShim.Deno.test("EqualCircular", () => {
    const objA = {};
    objA.prop = objA;
    const objB = {};
    objB.prop = objB;
    (0, mod_js_1.ok)((0, deps_js_1.equal)(objA, objB));
    const mapA = new Map();
    mapA.set("prop", mapA);
    const mapB = new Map();
    mapB.set("prop", mapB);
    (0, mod_js_1.ok)((0, deps_js_1.equal)(mapA, mapB));
});
dntShim.Deno.test("NotEquals", function () {
    const a = { foo: "bar" };
    const b = { bar: "foo" };
    (0, mod_js_1.notEquals)(a, b);
    (0, mod_js_1.notEquals)("Denosaurus", "Tyrannosaurus");
    (0, mod_js_1.notEquals)(new Date(2019, 0, 3, 4, 20, 1, 10), new Date(2019, 0, 3, 4, 20, 1, 20));
    (0, mod_js_1.notEquals)(new Date("invalid"), new Date(2019, 0, 3, 4, 20, 1, 20));
    let didThrow;
    try {
        (0, mod_js_1.notEquals)("Raptor", "Raptor");
        didThrow = false;
    }
    catch (e) {
        (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
        didThrow = true;
    }
    (0, mod_js_1.equals)(didThrow, true);
});
dntShim.Deno.test("AssertExists", function () {
    (0, mod_js_1.exists)("Denosaurus");
    (0, mod_js_1.exists)(false);
    (0, mod_js_1.exists)(0);
    (0, mod_js_1.exists)("");
    (0, mod_js_1.exists)(-0);
    (0, mod_js_1.exists)(0);
    (0, mod_js_1.exists)(NaN);
    const value = new URLSearchParams({ value: "test" }).get("value");
    (0, mod_js_1.exists)(value);
    (0, mod_js_1.equals)(value.length, 4);
    let didThrow;
    try {
        (0, mod_js_1.exists)(undefined);
        didThrow = false;
    }
    catch (e) {
        (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
        didThrow = true;
    }
    (0, mod_js_1.equals)(didThrow, true);
    didThrow = false;
    try {
        (0, mod_js_1.exists)(null);
        didThrow = false;
    }
    catch (e) {
        (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
        didThrow = true;
    }
    (0, mod_js_1.equals)(didThrow, true);
});
dntShim.Deno.test("AssertStringContains", function () {
    (0, mod_js_1.stringIncludes)("Denosaurus", "saur");
    (0, mod_js_1.stringIncludes)("Denosaurus", "Deno");
    (0, mod_js_1.stringIncludes)("Denosaurus", "rus");
    let didThrow;
    try {
        (0, mod_js_1.stringIncludes)("Denosaurus", "Raptor");
        didThrow = false;
    }
    catch (e) {
        (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
        didThrow = true;
    }
    (0, mod_js_1.equals)(didThrow, true);
});
dntShim.Deno.test("ArrayContains", function () {
    const fixture = ["deno", "iz", "luv"];
    const fixtureObject = [{ deno: "luv" }, { deno: "Js" }];
    (0, mod_js_1.arrayIncludes)(fixture, ["deno"]);
    (0, mod_js_1.arrayIncludes)(fixtureObject, [{ deno: "luv" }]);
    (0, mod_js_1.arrayIncludes)(Uint8Array.from([1, 2, 3, 4]), Uint8Array.from([1, 2, 3]));
    (0, mod_js_1.throws)(() => (0, mod_js_1.arrayIncludes)(fixtureObject, [{ deno: "node" }]), deps_js_1.AssertionError, `Expected actual: "[
  {
    deno: "luv"
  },
  {
    deno: "Js"
  }
]" to include: "[
  {
    deno: "node"
  }
]".
missing: [
  {
    deno: "node"
  }
]`);
});
dntShim.Deno.test("AssertStringContainsThrow", function () {
    let didThrow = false;
    try {
        (0, mod_js_1.stringIncludes)("Denosaurus from Jurassic", "Raptor");
    }
    catch (e) {
        (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
        (0, mod_js_1.ok)(e.message ===
            `Expected actual: "Denosaurus from Jurassic" to contain: "Raptor".`);
        didThrow = true;
    }
    (0, mod_js_1.ok)(didThrow);
});
dntShim.Deno.test("AssertStringMatching", function () {
    (0, mod_js_1.match)("foobar@deno.com", RegExp(/[a-zA-Z]+@[a-zA-Z]+.com/));
});
dntShim.Deno.test("AssertStringMatchingThrows", function () {
    let didThrow = false;
    try {
        (0, mod_js_1.match)("Denosaurus from Jurassic", RegExp(/Raptor/));
    }
    catch (e) {
        (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
        (0, mod_js_1.ok)(e.message ===
            `Expected actual: "Denosaurus from Jurassic" to match: "/Raptor/".`);
        didThrow = true;
    }
    (0, mod_js_1.ok)(didThrow);
});
dntShim.Deno.test("AssertStringNotMatching", function () {
    (0, mod_js_1.notMatch)("foobar.deno.com", RegExp(/[a-zA-Z]+@[a-zA-Z]+.com/));
});
dntShim.Deno.test("AssertStringNotMatchingThrows", function () {
    let didThrow = false;
    try {
        (0, mod_js_1.notMatch)("Denosaurus from Jurassic", RegExp(/from/));
    }
    catch (e) {
        (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
        (0, mod_js_1.ok)(e.message ===
            `Expected actual: "Denosaurus from Jurassic" to not match: "/from/".`);
        didThrow = true;
    }
    (0, mod_js_1.ok)(didThrow);
});
dntShim.Deno.test("AssertObjectMatching", function () {
    const sym = Symbol("foo");
    const a = { foo: true, bar: false };
    const b = { ...a, baz: a };
    const c = { ...b, qux: b };
    const d = { corge: c, grault: c };
    const e = { foo: true };
    e.bar = e;
    const f = { [sym]: true, bar: false };
    const g = { foo: true, bar: false };
    const h = { foo: [1, 2, 3], bar: true };
    const i = { foo: [a, e], bar: true };
    const j = { foo: [[1, 2, 3]], bar: true };
    const k = { foo: [[1, [2, [3]]]], bar: true };
    const l = { foo: [[1, [2, [a, e, j, k]]]], bar: true };
    const m = { foo: /abc+/i, bar: [/abc/g, /abc/m] };
    const n = {
        foo: new Set(["foo", "bar"]),
        bar: new Map([
            ["foo", 1],
            ["bar", 2],
        ]),
        baz: new Map([
            ["a", a],
            ["b", b],
        ]),
    };
    // Simple subset
    (0, mod_js_1.objectMatch)(a, {
        foo: true,
    });
    // Subset with another subset
    (0, mod_js_1.objectMatch)(b, {
        foo: true,
        baz: { bar: false },
    });
    // Subset with multiple subsets
    (0, mod_js_1.objectMatch)(c, {
        foo: true,
        baz: { bar: false },
        qux: {
            baz: { foo: true },
        },
    });
    // Subset with same object reference as subset
    (0, mod_js_1.objectMatch)(d, {
        corge: {
            foo: true,
            qux: { bar: false },
        },
        grault: {
            bar: false,
            qux: { foo: true },
        },
    });
    // Subset with circular reference
    (0, mod_js_1.objectMatch)(e, {
        foo: true,
        bar: {
            bar: {
                bar: {
                    foo: true,
                },
            },
        },
    });
    // Subset with interface
    (0, mod_js_1.objectMatch)(g, { bar: false });
    // Subset with same symbol
    (0, mod_js_1.objectMatch)(f, {
        [sym]: true,
    });
    // Subset with array inside
    (0, mod_js_1.objectMatch)(h, { foo: [] });
    (0, mod_js_1.objectMatch)(h, { foo: [1, 2] });
    (0, mod_js_1.objectMatch)(h, { foo: [1, 2, 3] });
    (0, mod_js_1.objectMatch)(i, { foo: [{ bar: false }] });
    (0, mod_js_1.objectMatch)(i, {
        foo: [{ bar: false }, { bar: { bar: { bar: { foo: true } } } }],
    });
    // Subset with nested array inside
    (0, mod_js_1.objectMatch)(j, { foo: [[1, 2, 3]] });
    (0, mod_js_1.objectMatch)(k, { foo: [[1, [2, [3]]]] });
    (0, mod_js_1.objectMatch)(l, { foo: [[1, [2, [a, e, j, k]]]] });
    // Regexp
    (0, mod_js_1.objectMatch)(m, { foo: /abc+/i });
    (0, mod_js_1.objectMatch)(m, { bar: [/abc/g, /abc/m] });
    //Built-in data structures
    (0, mod_js_1.objectMatch)(n, { foo: new Set(["foo"]) });
    (0, mod_js_1.objectMatch)(n, { bar: new Map([["bar", 2]]) });
    (0, mod_js_1.objectMatch)(n, { baz: new Map([["b", b]]) });
    (0, mod_js_1.objectMatch)(n, { baz: new Map([["b", { foo: true }]]) });
    // Missing key
    {
        let didThrow;
        try {
            (0, mod_js_1.objectMatch)({
                foo: true,
            }, {
                foo: true,
                bar: false,
            });
            didThrow = false;
        }
        catch (e) {
            (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
            didThrow = true;
        }
        (0, mod_js_1.equals)(didThrow, true);
    }
    // Simple subset
    {
        let didThrow;
        try {
            (0, mod_js_1.objectMatch)(a, {
                foo: false,
            });
            didThrow = false;
        }
        catch (e) {
            (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
            didThrow = true;
        }
        (0, mod_js_1.equals)(didThrow, true);
    }
    // Subset with another subset
    {
        let didThrow;
        try {
            (0, mod_js_1.objectMatch)(b, {
                foo: true,
                baz: { bar: true },
            });
            didThrow = false;
        }
        catch (e) {
            (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
            didThrow = true;
        }
        (0, mod_js_1.equals)(didThrow, true);
    }
    // Subset with multiple subsets
    {
        let didThrow;
        try {
            (0, mod_js_1.objectMatch)(c, {
                foo: true,
                baz: { bar: false },
                qux: {
                    baz: { foo: false },
                },
            });
            didThrow = false;
        }
        catch (e) {
            (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
            didThrow = true;
        }
        (0, mod_js_1.equals)(didThrow, true);
    }
    // Subset with same object reference as subset
    {
        let didThrow;
        try {
            (0, mod_js_1.objectMatch)(d, {
                corge: {
                    foo: true,
                    qux: { bar: true },
                },
                grault: {
                    bar: false,
                    qux: { foo: false },
                },
            });
            didThrow = false;
        }
        catch (e) {
            (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
            didThrow = true;
        }
        (0, mod_js_1.equals)(didThrow, true);
    }
    // Subset with circular reference
    {
        let didThrow;
        try {
            (0, mod_js_1.objectMatch)(e, {
                foo: true,
                bar: {
                    bar: {
                        bar: {
                            foo: false,
                        },
                    },
                },
            });
            didThrow = false;
        }
        catch (e) {
            (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
            didThrow = true;
        }
        (0, mod_js_1.equals)(didThrow, true);
    }
    // Subset with symbol key but with string key subset
    {
        let didThrow;
        try {
            (0, mod_js_1.objectMatch)(f, {
                foo: true,
            });
            didThrow = false;
        }
        catch (e) {
            (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
            didThrow = true;
        }
        (0, mod_js_1.equals)(didThrow, true);
    }
    // Subset with array inside but doesn't match key subset
    {
        let didThrow;
        try {
            (0, mod_js_1.objectMatch)(i, {
                foo: [1, 2, 3, 4],
            });
            didThrow = false;
        }
        catch (e) {
            (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
            didThrow = true;
        }
        (0, mod_js_1.equals)(didThrow, true);
    }
    {
        let didThrow;
        try {
            (0, mod_js_1.objectMatch)(i, {
                foo: [{ bar: true }, { foo: false }],
            });
            didThrow = false;
        }
        catch (e) {
            (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
            didThrow = true;
        }
        (0, mod_js_1.equals)(didThrow, true);
    }
    // actual/expected value as instance of class
    {
        class A {
            constructor(a) {
                Object.defineProperty(this, "a", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                this.a = a;
            }
        }
        (0, mod_js_1.objectMatch)({ test: new A(1) }, { test: { a: 1 } });
        (0, mod_js_1.objectMatch)({ test: { a: 1 } }, { test: { a: 1 } });
        (0, mod_js_1.objectMatch)({ test: { a: 1 } }, { test: new A(1) });
        (0, mod_js_1.objectMatch)({ test: new A(1) }, { test: new A(1) });
    }
    {
        // actual/expected contains same instance of Map/TypedArray/etc
        const body = new Uint8Array([0, 1, 2]);
        (0, mod_js_1.objectMatch)({ body, foo: "foo" }, { body });
    }
    {
        // match subsets of arrays
        (0, mod_js_1.objectMatch)({ positions: [[1, 2, 3, 4]] }, {
            positions: [[1, 2, 3]],
        });
    }
    //Regexp
    (0, mod_js_1.throws)(() => (0, mod_js_1.objectMatch)(m, { foo: /abc+/ }), deps_js_1.AssertionError);
    (0, mod_js_1.throws)(() => (0, mod_js_1.objectMatch)(m, { foo: /abc*/i }), deps_js_1.AssertionError);
    (0, mod_js_1.throws)(() => (0, mod_js_1.objectMatch)(m, { bar: [/abc/m, /abc/g] }), deps_js_1.AssertionError);
    //Built-in data structures
    (0, mod_js_1.throws)(() => (0, mod_js_1.objectMatch)(n, { foo: new Set(["baz"]) }), deps_js_1.AssertionError);
    (0, mod_js_1.throws)(() => (0, mod_js_1.objectMatch)(n, { bar: new Map([["bar", 3]]) }), deps_js_1.AssertionError);
    (0, mod_js_1.throws)(() => (0, mod_js_1.objectMatch)(n, { baz: new Map([["a", { baz: true }]]) }), deps_js_1.AssertionError);
});
dntShim.Deno.test("AssertsUnimplemented", function () {
    let didThrow = false;
    try {
        (0, mod_js_1.unimplemented)();
    }
    catch (e) {
        (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
        (0, mod_js_1.ok)(e.message === "Unimplemented.");
        didThrow = true;
    }
    (0, mod_js_1.ok)(didThrow);
});
dntShim.Deno.test("AssertsUnreachable", function () {
    let didThrow = false;
    try {
        (0, mod_js_1.unreachable)();
    }
    catch (e) {
        (0, mod_js_1.ok)(e instanceof deps_js_1.AssertionError);
        (0, mod_js_1.ok)(e.message === "unreachable");
        didThrow = true;
    }
    (0, mod_js_1.ok)(didThrow);
});
dntShim.Deno.test("AssertFail", function () {
    (0, mod_js_1.throws)(mod_js_1.fail, deps_js_1.AssertionError, "Failed assertion.");
    (0, mod_js_1.throws)(() => {
        (0, mod_js_1.fail)("foo");
    }, deps_js_1.AssertionError, "Failed assertion: foo");
});
dntShim.Deno.test("assertThrows with wrong error class", () => {
    (0, mod_js_1.throws)(() => {
        //This next assertThrows will throw an AssertionError due to the wrong
        //expected error class
        (0, mod_js_1.throws)(() => {
            (0, mod_js_1.fail)("foo");
        }, TypeError, "Failed assertion: foo");
    }, deps_js_1.AssertionError, `Expected error to be instance of "TypeError", but was "AssertionError"`);
});
dntShim.Deno.test("assertThrows with return type", () => {
    (0, mod_js_1.throws)(() => {
        throw new Error();
    });
});
dntShim.Deno.test("assertRejects with return type", async () => {
    await (0, mod_js_1.rejects)(() => {
        return Promise.reject(new Error());
    });
});
dntShim.Deno.test("assertRejects with synchronous function that throws", async () => {
    await (0, mod_js_1.rejects)(() => (0, mod_js_1.rejects)(() => {
        throw new Error();
    }));
    await (0, mod_js_1.rejects)(() => (0, mod_js_1.rejects)(() => {
        throw { wrong: "true" };
    }), deps_js_1.AssertionError, "Function throws when expected to reject.");
});
dntShim.Deno.test("assertRejects with PromiseLike", async () => {
    await (0, mod_js_1.rejects)(() => ({
        then() {
            throw new Error("some error");
        },
    }), Error, "some error");
});
dntShim.Deno.test("assertThrows with non-error value thrown and error class", () => {
    (0, mod_js_1.throws)(() => {
        (0, mod_js_1.throws)(() => {
            throw "Panic!";
        }, Error, "Panic!");
    }, deps_js_1.AssertionError, "A non-Error object was thrown.");
});
dntShim.Deno.test("assertRejects with non-error value rejected and error class", async () => {
    await (0, mod_js_1.rejects)(() => {
        return (0, mod_js_1.rejects)(() => {
            return Promise.reject("Panic!");
        }, Error, "Panic!");
    }, deps_js_1.AssertionError, "A non-Error object was rejected.");
});
dntShim.Deno.test("assertThrows with non-error value thrown", () => {
    (0, mod_js_1.throws)(() => {
        throw "Panic!";
    });
    (0, mod_js_1.throws)(() => {
        throw null;
    });
    (0, mod_js_1.throws)(() => {
        throw undefined;
    });
});
dntShim.Deno.test("assertRejects with non-error value rejected", async () => {
    await (0, mod_js_1.rejects)(() => {
        return Promise.reject(null);
    });
    await (0, mod_js_1.rejects)(() => {
        return Promise.reject(undefined);
    });
});
dntShim.Deno.test("assertThrows with error class", () => {
    (0, mod_js_1.throws)(() => {
        throw new Error("foo");
    }, Error, "foo");
});
dntShim.Deno.test("assertRejects with error class", async () => {
    await (0, mod_js_1.rejects)(() => {
        return Promise.reject(new Error("foo"));
    }, Error, "foo");
});
dntShim.Deno.test("assertThrows with thrown error returns caught error", () => {
    const error = (0, mod_js_1.throws)(() => {
        throw new Error("foo");
    });
    (0, mod_js_1.ok)(error instanceof Error);
    (0, mod_js_1.equals)(error.message, "foo");
});
dntShim.Deno.test("assertThrows with thrown non-error returns caught error", () => {
    const stringError = (0, mod_js_1.throws)(() => {
        throw "Panic!";
    });
    (0, mod_js_1.ok)(typeof stringError === "string");
    (0, mod_js_1.equals)(stringError, "Panic!");
    const numberError = (0, mod_js_1.throws)(() => {
        throw 1;
    });
    (0, mod_js_1.ok)(typeof numberError === "number");
    (0, mod_js_1.equals)(numberError, 1);
    const nullError = (0, mod_js_1.throws)(() => {
        throw null;
    });
    (0, mod_js_1.ok)(nullError === null);
    const undefinedError = (0, mod_js_1.throws)(() => {
        throw undefined;
    });
    (0, mod_js_1.ok)(typeof undefinedError === "undefined");
    (0, mod_js_1.equals)(undefinedError, undefined);
});
dntShim.Deno.test("assertRejectes resolves with caught error", async () => {
    const error = await (0, mod_js_1.rejects)(() => {
        return Promise.reject(new Error("foo"));
    });
    (0, mod_js_1.ok)(error instanceof Error);
    (0, mod_js_1.equals)(error.message, "foo");
});
const createHeader = () => [
    "",
    "",
    `    ${(0, deps_js_1.gray)((0, deps_js_1.bold)("[Diff]"))} ${(0, deps_js_1.red)((0, deps_js_1.bold)("Actual"))} / ${(0, deps_js_1.green)((0, deps_js_1.bold)("Expected"))}`,
    "",
    "",
];
const added = (s) => (0, deps_js_1.green)((0, deps_js_1.bold)((0, deps_js_1.stripColor)(s)));
const removed = (s) => (0, deps_js_1.red)((0, deps_js_1.bold)((0, deps_js_1.stripColor)(s)));
dntShim.Deno.test({
    name: "pass case",
    fn() {
        (0, mod_js_1.equals)({ a: 10 }, { a: 10 });
        (0, mod_js_1.equals)(true, true);
        (0, mod_js_1.equals)(10, 10);
        (0, mod_js_1.equals)("abc", "abc");
        (0, mod_js_1.equals)({ a: 10, b: { c: "1" } }, { a: 10, b: { c: "1" } });
        (0, mod_js_1.equals)(new Date("invalid"), new Date("invalid"));
    },
});
dntShim.Deno.test({
    name: "failed with number",
    fn() {
        (0, mod_js_1.throws)(() => (0, mod_js_1.equals)(1, 2), deps_js_1.AssertionError, [
            "Values are not equal.",
            ...createHeader(),
            removed(`-   ${(0, deps_js_1.yellow)("1")}`),
            added(`+   ${(0, deps_js_1.yellow)("2")}`),
            "",
        ].join("\n"));
    },
});
dntShim.Deno.test({
    name: "failed with number vs string",
    fn() {
        (0, mod_js_1.throws)(() => (0, mod_js_1.equals)(1, "1"), deps_js_1.AssertionError, [
            "Values are not equal.",
            ...createHeader(),
            removed(`-   ${(0, deps_js_1.yellow)("1")}`),
            added(`+   "1"`),
        ].join("\n"));
    },
});
dntShim.Deno.test({
    name: "failed with array",
    fn() {
        (0, mod_js_1.throws)(() => (0, mod_js_1.equals)([1, "2", 3], ["1", "2", 3]), deps_js_1.AssertionError, `
    [
-     1,
+     "1",
      "2",
      3
    ]`);
    },
});
dntShim.Deno.test({
    name: "failed with object",
    fn() {
        (0, mod_js_1.throws)(() => (0, mod_js_1.equals)({ a: 1, b: "2", c: 3 }, { a: 1, b: 2, c: [3] }), deps_js_1.AssertionError, `
    {
      a: 1,
+     b: 2,
+     c: [
+       3
+     ]
-     b: "2",
-     c: 3
    }`);
    },
});
dntShim.Deno.test({
    name: "failed with date",
    fn() {
        (0, mod_js_1.throws)(() => (0, mod_js_1.equals)(new Date(2019, 0, 3, 4, 20, 1, 10), new Date(2019, 0, 3, 4, 20, 1, 20)), deps_js_1.AssertionError, [
            "Values are not equal.",
            ...createHeader(),
            removed(`-   ${new Date(2019, 0, 3, 4, 20, 1, 10).toISOString()}`),
            added(`+   ${new Date(2019, 0, 3, 4, 20, 1, 20).toISOString()}`),
            "",
        ].join("\n"));
        (0, mod_js_1.throws)(() => (0, mod_js_1.equals)(new Date("invalid"), new Date(2019, 0, 3, 4, 20, 1, 20)), deps_js_1.AssertionError, [
            "Values are not equal.",
            ...createHeader(),
            removed(`-   ${new Date("invalid")}`),
            added(`+   ${new Date(2019, 0, 3, 4, 20, 1, 20).toISOString()}`),
            "",
        ].join("\n"));
    },
});
dntShim.Deno.test({
    name: "failed with custom msg",
    fn() {
        (0, mod_js_1.throws)(() => (0, mod_js_1.equals)(1, 2, "CUSTOM MESSAGE"), deps_js_1.AssertionError, [
            "Values are not equal: CUSTOM MESSAGE",
            ...createHeader(),
            removed(`-   ${(0, deps_js_1.yellow)("1")}`),
            added(`+   ${(0, deps_js_1.yellow)("2")}`),
            "",
        ].join("\n"));
    },
});
dntShim.Deno.test({
    name: "strict types test",
    fn() {
        const x = { number: 2 };
        const y = x;
        const z = x;
        // y.number;
        //   ~~~~~~
        // Property 'number' does not exist on type 'Record<never, never>'.deno-ts(2339)
        (0, mod_js_1.strictEquals)(y, x);
        y.number; // ok
        // z.number;
        // ~
        // Object is of type 'unknown'.deno-ts(2571)
        (0, mod_js_1.strictEquals)(z, x);
        z.number; // ok
    },
});
dntShim.Deno.test({
    name: "strict pass case",
    fn() {
        (0, mod_js_1.strictEquals)(true, true);
        (0, mod_js_1.strictEquals)(10, 10);
        (0, mod_js_1.strictEquals)("abc", "abc");
        (0, mod_js_1.strictEquals)(NaN, NaN);
        const xs = [1, false, "foo"];
        const ys = xs;
        (0, mod_js_1.strictEquals)(xs, ys);
        const x = { a: 1 };
        const y = x;
        (0, mod_js_1.strictEquals)(x, y);
    },
});
dntShim.Deno.test({
    name: "strict failed with structure diff",
    fn() {
        (0, mod_js_1.throws)(() => (0, mod_js_1.strictEquals)({ a: 1, b: 2 }, { a: 1, c: [3] }), deps_js_1.AssertionError, `
    {
      a: 1,
+     c: [
+       3
+     ]
-     b: 2
    }`);
    },
});
dntShim.Deno.test({
    name: "strict failed with reference diff",
    fn() {
        (0, mod_js_1.throws)(() => (0, mod_js_1.strictEquals)({ a: 1, b: 2 }, { a: 1, b: 2 }), deps_js_1.AssertionError, `Values have the same structure but are not reference-equal.

    {
      a: 1,
      b: 2
    }`);
    },
});
dntShim.Deno.test({
    name: "strict failed with custom msg",
    fn() {
        (0, mod_js_1.throws)(() => (0, mod_js_1.strictEquals)({ a: 1 }, { a: 1 }, "CUSTOM MESSAGE"), deps_js_1.AssertionError, `Values have the same structure but are not reference-equal: CUSTOM MESSAGE

    {
      a: 1
    }`);
    },
});
dntShim.Deno.test({
    name: "strictly unequal pass case",
    fn() {
        (0, mod_js_1.notStrictEquals)(true, false);
        (0, mod_js_1.notStrictEquals)(10, 11);
        (0, mod_js_1.notStrictEquals)("abc", "xyz");
        (0, mod_js_1.notStrictEquals)(1, "1");
        (0, mod_js_1.notStrictEquals)(-0, +0);
        const xs = [1, false, "foo"];
        const ys = [1, true, "bar"];
        (0, mod_js_1.notStrictEquals)(xs, ys);
        const x = { a: 1 };
        const y = { a: 2 };
        (0, mod_js_1.notStrictEquals)(x, y);
    },
});
dntShim.Deno.test({
    name: "strictly unequal fail case",
    fn() {
        (0, mod_js_1.throws)(() => (0, mod_js_1.notStrictEquals)(1, 1), deps_js_1.AssertionError);
        (0, mod_js_1.throws)(() => (0, mod_js_1.notStrictEquals)(NaN, NaN), deps_js_1.AssertionError);
    },
});
dntShim.Deno.test("assert almost equals number", () => {
    //Default precision
    (0, mod_js_1.almostEquals)(-0, +0);
    (0, mod_js_1.almostEquals)(Math.PI, Math.PI);
    (0, mod_js_1.almostEquals)(0.1 + 0.2, 0.3);
    (0, mod_js_1.almostEquals)(NaN, NaN);
    (0, mod_js_1.almostEquals)(Number.NaN, Number.NaN);
    (0, mod_js_1.throws)(() => (0, mod_js_1.almostEquals)(1, 2));
    (0, mod_js_1.throws)(() => (0, mod_js_1.almostEquals)(1, 1.1));
    //Higher precision
    (0, mod_js_1.almostEquals)(0.1 + 0.2, 0.3, 1e-16);
    (0, mod_js_1.throws)(() => (0, mod_js_1.almostEquals)(0.1 + 0.2, 0.3, 1e-17), deps_js_1.AssertionError, `Expected actual: "${(0.1 + 0.2).toExponential()}" to be close to "${(0.3).toExponential()}"`);
    //Special cases
    (0, mod_js_1.almostEquals)(Infinity, Infinity);
    (0, mod_js_1.throws)(() => (0, mod_js_1.almostEquals)(0, Infinity), deps_js_1.AssertionError, 'Expected actual: "0" to be close to "Infinity"');
    (0, mod_js_1.throws)(() => (0, mod_js_1.almostEquals)(-Infinity, +Infinity), deps_js_1.AssertionError, 'Expected actual: "-Infinity" to be close to "Infinity"');
    (0, mod_js_1.throws)(() => (0, mod_js_1.almostEquals)(Infinity, NaN), deps_js_1.AssertionError, 'Expected actual: "Infinity" to be close to "NaN"');
});
dntShim.Deno.test({
    name: "assertInstanceOf",
    fn() {
        class TestClass1 {
        }
        class TestClass2 {
        }
        class TestClass3 {
        }
        // Regular types
        (0, mod_js_1.instanceOf)(new Date(), Date);
        (0, mod_js_1.instanceOf)(new Number(), Number);
        (0, mod_js_1.instanceOf)(Promise.resolve(), Promise);
        (0, mod_js_1.instanceOf)(new TestClass1(), TestClass1);
        // Throwing cases
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)(new Date(), RegExp), deps_js_1.AssertionError, `Expected object to be an instance of "RegExp" but was "Date".`);
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)(5, Date), deps_js_1.AssertionError, `Expected object to be an instance of "Date" but was "number".`);
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)(new TestClass1(), TestClass2), deps_js_1.AssertionError, `Expected object to be an instance of "TestClass2" but was "TestClass1".`);
        // Custom message
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)(new Date(), RegExp, "Custom message"), deps_js_1.AssertionError, "Custom message");
        // Edge cases
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)(5, Number), deps_js_1.AssertionError, `Expected object to be an instance of "Number" but was "number".`);
        let TestClassWithSameName;
        {
            class TestClass3 {
            }
            TestClassWithSameName = TestClass3;
        }
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)(new TestClassWithSameName(), TestClass3), deps_js_1.AssertionError, `Expected object to be an instance of "TestClass3".`);
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)(TestClass1, TestClass1), deps_js_1.AssertionError, `Expected object to be an instance of "TestClass1" but was not an instanced object.`);
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)(() => { }, TestClass1), deps_js_1.AssertionError, `Expected object to be an instance of "TestClass1" but was not an instanced object.`);
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)(null, TestClass1), deps_js_1.AssertionError, `Expected object to be an instance of "TestClass1" but was "null".`);
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)(undefined, TestClass1), deps_js_1.AssertionError, `Expected object to be an instance of "TestClass1" but was "undefined".`);
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)({}, TestClass1), deps_js_1.AssertionError, `Expected object to be an instance of "TestClass1" but was "Object".`);
        (0, mod_js_1.throws)(() => (0, mod_js_1.instanceOf)(Object.create(null), TestClass1), deps_js_1.AssertionError, `Expected object to be an instance of "TestClass1" but was "Object".`);
        // Test TypeScript types functionality, wrapped in a function that never runs
        // deno-lint-ignore no-unused-vars
        function typeScriptTests() {
            class ClassWithProperty {
                constructor() {
                    Object.defineProperty(this, "property", {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: "prop1"
                    });
                }
            }
            const testInstance = new ClassWithProperty();
            // @ts-expect-error: `testInstance` is `unknown` so setting its property before `assertInstanceOf` should give a type error.
            testInstance.property = "prop2";
            (0, mod_js_1.instanceOf)(testInstance, ClassWithProperty);
            // Now `testInstance` should be of type `ClassWithProperty`
            testInstance.property = "prop3";
            let x = 5;
            // @ts-expect-error: `x` is `unknown` so adding to it shouldn't work
            x += 5;
            (0, mod_js_1.instanceOf)(x, Number);
            // @ts-expect-error: `x` is now `Number` rather than `number`, so this should still give a type error.
            x += 5;
        }
    },
});
dntShim.Deno.test({
    name: "assertNotInstanceOf",
    fn() {
        (0, mod_js_1.notInstanceOf)("not a number", Number);
        (0, mod_js_1.notInstanceOf)(42, String);
        (0, mod_js_1.notInstanceOf)(new URL("http://example.com"), Boolean);
    },
});
dntShim.Deno.test({
    name: "assert* functions with specified type parameter",
    fn() {
        (0, mod_js_1.equals)("hello", "hello");
        (0, mod_js_1.notEquals)(1, 2);
        (0, mod_js_1.arrayIncludes)([true, false], [true]);
        const value = { x: 1 };
        (0, mod_js_1.strictEquals)(value, value);
        // deno-lint-ignore ban-types
        (0, mod_js_1.notStrictEquals)(value, { x: 1 });
    },
});
dntShim.Deno.test("assertEquals compares objects structurally if one object's constructor is undefined and the other is Object", () => {
    const a = Object.create(null);
    a.prop = "test";
    const b = {
        prop: "test",
    };
    (0, mod_js_1.equals)(a, b);
    (0, mod_js_1.equals)(b, a);
});
dntShim.Deno.test("assertEquals diff for differently ordered objects", () => {
    (0, mod_js_1.throws)(() => {
        (0, mod_js_1.equals)({
            aaaaaaaaaaaaaaaaaaaaaaaa: 0,
            bbbbbbbbbbbbbbbbbbbbbbbb: 0,
            ccccccccccccccccccccccc: 0,
        }, {
            ccccccccccccccccccccccc: 1,
            aaaaaaaaaaaaaaaaaaaaaaaa: 0,
            bbbbbbbbbbbbbbbbbbbbbbbb: 0,
        });
    }, deps_js_1.AssertionError, `
    {
      aaaaaaaaaaaaaaaaaaaaaaaa: 0,
      bbbbbbbbbbbbbbbbbbbbbbbb: 0,
-     ccccccccccccccccccccccc: 0
+     ccccccccccccccccccccccc: 1
    }`);
});
dntShim.Deno.test("Assert Throws Parent Error", () => {
    (0, mod_js_1.throws)(() => {
        throw new deps_js_1.AssertionError("Fail!");
    }, Error, "Fail!");
});
dntShim.Deno.test("Assert Throws Async Parent Error", async () => {
    await (0, mod_js_1.rejects)(() => {
        return Promise.reject(new deps_js_1.AssertionError("Fail!"));
    }, Error, "Fail!");
});
dntShim.Deno.test("Assert Throws Async promise rejected with custom Error", async () => {
    class CustomError extends Error {
    }
    class AnotherCustomError extends Error {
    }
    await (0, mod_js_1.rejects)(() => (0, mod_js_1.rejects)(() => Promise.reject(new AnotherCustomError("failed")), CustomError, "fail"), deps_js_1.AssertionError, 'Expected error to be instance of "CustomError", but was "AnotherCustomError".');
});
dntShim.Deno.test("Assert Is Error Non-Error Fail", () => {
    (0, mod_js_1.throws)(() => (0, mod_js_1.isError)("Panic!", undefined, "Panic!"), deps_js_1.AssertionError, `Expected "error" to be an Error object.`);
    (0, mod_js_1.throws)(() => (0, mod_js_1.isError)(null), deps_js_1.AssertionError, `Expected "error" to be an Error object.`);
    (0, mod_js_1.throws)(() => (0, mod_js_1.isError)(undefined), deps_js_1.AssertionError, `Expected "error" to be an Error object.`);
});
dntShim.Deno.test("Assert Is Error Parent Error", () => {
    (0, mod_js_1.isError)(new deps_js_1.AssertionError("Fail!"), Error, "Fail!");
});
dntShim.Deno.test("Assert Is Error with custom Error", () => {
    class CustomError extends Error {
    }
    class AnotherCustomError extends Error {
    }
    (0, mod_js_1.isError)(new CustomError("failed"), CustomError, "fail");
    (0, mod_js_1.throws)(() => (0, mod_js_1.isError)(new AnotherCustomError("failed"), CustomError, "fail"), deps_js_1.AssertionError, 'Expected error to be instance of "CustomError", but was "AnotherCustomError".');
});
dntShim.Deno.test("Assert False with falsy values", () => {
    (0, mod_js_1.notOk)(false);
    (0, mod_js_1.notOk)(0);
    (0, mod_js_1.notOk)("");
    (0, mod_js_1.notOk)(null);
    (0, mod_js_1.notOk)(undefined);
});
dntShim.Deno.test("Assert False with truthy values", () => {
    (0, mod_js_1.throws)(() => (0, mod_js_1.notOk)(true));
    (0, mod_js_1.throws)(() => (0, mod_js_1.notOk)(1));
    (0, mod_js_1.throws)(() => (0, mod_js_1.notOk)("a"));
    (0, mod_js_1.throws)(() => (0, mod_js_1.notOk)({}));
    (0, mod_js_1.throws)(() => (0, mod_js_1.notOk)([]));
});
dntShim.Deno.test("assertEquals same Set with object keys", () => {
    const data = [
        {
            id: "_1p7ZED73OF98VbT1SzSkjn",
            type: { id: "_ETGENUS" },
            name: "Thuja",
            friendlyId: "g-thuja",
        },
        {
            id: "_567qzghxZmeQ9pw3q09bd3",
            type: { id: "_ETGENUS" },
            name: "Pinus",
            friendlyId: "g-pinus",
        },
    ];
    (0, mod_js_1.equals)(data, data);
    (0, mod_js_1.equals)(new Set(data), new Set(data));
});
