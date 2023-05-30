// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "./_dnt.test_shims.js";
import { ok, almostEquals, arrayIncludes, equals, exists, notOk, instanceOf, isError, match, notEquals, notInstanceOf, notMatch, notStrictEquals, objectMatch, rejects, strictEquals, stringIncludes, throws, fail, unimplemented, unreachable, } from "./mod.js";
import { bold, gray, green, red, stripColor, yellow, AssertionError, equal } from "./deps.js";
dntShim.Deno.test("EqualDifferentZero", () => {
    ok(equal(0, -0));
    ok(equal(0, +0));
    ok(equal(+0, -0));
    ok(equal([0], [-0]));
    ok(equal(["hello", 12.21, 0], ["hello", 12.21, -0]));
    ok(equal(["hello", 12.21, 0], ["hello", 12.21, +0]));
    ok(equal(["hello", 12.21, -0], ["hello", 12.21, +0]));
    ok(equal({ msg: "hello", case: 0 }, { msg: "hello", case: -0 }));
    ok(equal({ msg: "hello", array: [0] }, { msg: "hello", array: [-0] }));
});
dntShim.Deno.test("Equal", function () {
    var _A_hello, _a, _B_hello, _b, _A_hello_1, _c, _B_hello_1, _d;
    ok(equal("world", "world"));
    ok(!equal("hello", "world"));
    notOk(equal("hello", "world"));
    ok(equal(5, 5));
    ok(!equal(5, 6));
    notOk(equal(5, 6));
    ok(equal(NaN, NaN));
    ok(equal({ hello: "world" }, { hello: "world" }));
    ok(!equal({ world: "hello" }, { hello: "world" }));
    notOk(equal({ world: "hello" }, { hello: "world" }));
    ok(equal({ hello: "world", hi: { there: "everyone" } }, { hello: "world", hi: { there: "everyone" } }));
    ok(!equal({ hello: "world", hi: { there: "everyone" } }, { hello: "world", hi: { there: "everyone else" } }));
    notOk(equal({ hello: "world", hi: { there: "everyone" } }, { hello: "world", hi: { there: "everyone else" } }));
    ok(equal({ [Symbol.for("foo")]: "bar" }, { [Symbol.for("foo")]: "bar" }));
    ok(!equal({ [Symbol("foo")]: "bar" }, { [Symbol("foo")]: "bar" }));
    notOk(equal({ [Symbol("foo")]: "bar" }, { [Symbol("foo")]: "bar" }));
    ok(equal(/deno/, /deno/));
    ok(!equal(/deno/, /node/));
    notOk(equal(/deno/, /node/));
    ok(equal(new Date(2019, 0, 3), new Date(2019, 0, 3)));
    ok(!equal(new Date(2019, 0, 3), new Date(2019, 1, 3)));
    notOk(equal(new Date(2019, 0, 3), new Date(2019, 1, 3)));
    ok(!equal(new Date(2019, 0, 3, 4, 20, 1, 10), new Date(2019, 0, 3, 4, 20, 1, 20)));
    notOk(equal(new Date(2019, 0, 3, 4, 20, 1, 10), new Date(2019, 0, 3, 4, 20, 1, 20)));
    ok(equal(new Date("Invalid"), new Date("Invalid")));
    ok(!equal(new Date("Invalid"), new Date(2019, 0, 3)));
    notOk(equal(new Date("Invalid"), new Date(2019, 0, 3)));
    ok(!equal(new Date("Invalid"), new Date(2019, 0, 3, 4, 20, 1, 10)));
    notOk(equal(new Date("Invalid"), new Date(2019, 0, 3, 4, 20, 1, 10)));
    ok(equal(new Set([1]), new Set([1])));
    ok(!equal(new Set([1]), new Set([2])));
    notOk(equal(new Set([1]), new Set([2])));
    ok(equal(new Set([1, 2, 3]), new Set([3, 2, 1])));
    ok(equal(new Set([1, new Set([2, 3])]), new Set([new Set([3, 2]), 1])));
    ok(!equal(new Set([1, 2]), new Set([3, 2, 1])));
    notOk(equal(new Set([1, 2]), new Set([3, 2, 1])));
    ok(!equal(new Set([1, 2, 3]), new Set([4, 5, 6])));
    notOk(equal(new Set([1, 2, 3]), new Set([4, 5, 6])));
    ok(equal(new Set("denosaurus"), new Set("denosaurussss")));
    ok(equal(new Map(), new Map()));
    ok(equal(new Map([
        ["foo", "bar"],
        ["baz", "baz"],
    ]), new Map([
        ["foo", "bar"],
        ["baz", "baz"],
    ])));
    ok(equal(new Map([["foo", new Map([["bar", "baz"]])]]), new Map([["foo", new Map([["bar", "baz"]])]])));
    ok(equal(new Map([["foo", { bar: "baz" }]]), new Map([["foo", { bar: "baz" }]])));
    ok(equal(new Map([
        ["foo", "bar"],
        ["baz", "qux"],
    ]), new Map([
        ["baz", "qux"],
        ["foo", "bar"],
    ])));
    ok(equal(new Map([["foo", ["bar"]]]), new Map([["foo", ["bar"]]])));
    ok(!equal(new Map([["foo", "bar"]]), new Map([["bar", "baz"]])));
    notOk(equal(new Map([["foo", "bar"]]), new Map([["bar", "baz"]])));
    notOk(equal(new Map([["foo", "bar"]]), new Map([["bar", "baz"]])));
    ok(!equal(new Map([["foo", "bar"]]), new Map([
        ["foo", "bar"],
        ["bar", "baz"],
    ])));
    notOk(equal(new Map([["foo", "bar"]]), new Map([
        ["foo", "bar"],
        ["bar", "baz"],
    ])));
    ok(!equal(new Map([["foo", new Map([["bar", "baz"]])]]), new Map([["foo", new Map([["bar", "qux"]])]])));
    ok(equal(new Map([[{ x: 1 }, true]]), new Map([[{ x: 1 }, true]])));
    ok(!equal(new Map([[{ x: 1 }, true]]), new Map([[{ x: 1 }, false]])));
    notOk(equal(new Map([[{ x: 1 }, true]]), new Map([[{ x: 1 }, false]])));
    ok(!equal(new Map([[{ x: 1 }, true]]), new Map([[{ x: 2 }, true]])));
    notOk(equal(new Map([[{ x: 1 }, true]]), new Map([[{ x: 2 }, true]])));
    ok(equal([1, 2, 3], [1, 2, 3]));
    ok(equal([1, [2, 3]], [1, [2, 3]]));
    ok(!equal([1, 2, 3, 4], [1, 2, 3]));
    notOk(equal([1, 2, 3, 4], [1, 2, 3]));
    ok(!equal([1, 2, 3, 4], [1, 2, 3]));
    notOk(equal([1, 2, 3, 4], [1, 2, 3]));
    ok(!equal([1, 2, 3, 4], [1, 4, 2, 3]));
    notOk(equal([1, 2, 3, 4], [1, 4, 2, 3]));
    ok(equal(new Uint8Array([1, 2, 3, 4]), new Uint8Array([1, 2, 3, 4])));
    ok(!equal(new Uint8Array([1, 2, 3, 4]), new Uint8Array([2, 1, 4, 3])));
    notOk(equal(new Uint8Array([1, 2, 3, 4]), new Uint8Array([2, 1, 4, 3])));
    ok(equal(new URL("https://example.test"), new URL("https://example.test")));
    ok(!equal(new URL("https://example.test"), new URL("https://example.test/with-path")));
    notOk(equal(new URL("https://example.test"), new URL("https://example.test/with-path")));
    ok(!equal({ a: undefined, b: undefined }, { a: undefined, c: undefined }));
    notOk(equal({ a: undefined, b: undefined }, { a: undefined, c: undefined }));
    notOk(equal({ a: undefined, b: undefined }, { a: undefined }));
    throws(() => equal(new WeakMap(), new WeakMap()));
    throws(() => equal(new WeakSet(), new WeakSet()));
    ok(!equal(new WeakMap(), new WeakSet()));
    notOk(equal(new WeakMap(), new WeakSet()));
    ok(equal(new WeakRef({ hello: "world" }), new WeakRef({ hello: "world" })));
    ok(!equal(new WeakRef({ world: "hello" }), new WeakRef({ hello: "world" })));
    notOk(equal(new WeakRef({ world: "hello" }), new WeakRef({ hello: "world" })));
    ok(!equal({ hello: "world" }, new WeakRef({ hello: "world" })));
    notOk(equal({ hello: "world" }, new WeakRef({ hello: "world" })));
    ok(!equal(new WeakRef({ hello: "world" }), 
    // deno-lint-ignore ban-types
    new (class extends WeakRef {
    })({ hello: "world" })));
    notOk(equal(new WeakRef({ hello: "world" }), 
    // deno-lint-ignore ban-types
    new (class extends WeakRef {
    })({ hello: "world" })));
    ok(!equal(new WeakRef({ hello: "world" }), 
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
    notOk(equal(new WeakRef({ hello: "world" }), 
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
    ok(!equal(new (_a = class A {
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
    notOk(equal(new (_c = class A {
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
    ok(equal(objA, objB));
    const mapA = new Map();
    mapA.set("prop", mapA);
    const mapB = new Map();
    mapB.set("prop", mapB);
    ok(equal(mapA, mapB));
});
dntShim.Deno.test("NotEquals", function () {
    const a = { foo: "bar" };
    const b = { bar: "foo" };
    notEquals(a, b);
    notEquals("Denosaurus", "Tyrannosaurus");
    notEquals(new Date(2019, 0, 3, 4, 20, 1, 10), new Date(2019, 0, 3, 4, 20, 1, 20));
    notEquals(new Date("invalid"), new Date(2019, 0, 3, 4, 20, 1, 20));
    let didThrow;
    try {
        notEquals("Raptor", "Raptor");
        didThrow = false;
    }
    catch (e) {
        ok(e instanceof AssertionError);
        didThrow = true;
    }
    equals(didThrow, true);
});
dntShim.Deno.test("AssertExists", function () {
    exists("Denosaurus");
    exists(false);
    exists(0);
    exists("");
    exists(-0);
    exists(0);
    exists(NaN);
    const value = new URLSearchParams({ value: "test" }).get("value");
    exists(value);
    equals(value.length, 4);
    let didThrow;
    try {
        exists(undefined);
        didThrow = false;
    }
    catch (e) {
        ok(e instanceof AssertionError);
        didThrow = true;
    }
    equals(didThrow, true);
    didThrow = false;
    try {
        exists(null);
        didThrow = false;
    }
    catch (e) {
        ok(e instanceof AssertionError);
        didThrow = true;
    }
    equals(didThrow, true);
});
dntShim.Deno.test("AssertStringContains", function () {
    stringIncludes("Denosaurus", "saur");
    stringIncludes("Denosaurus", "Deno");
    stringIncludes("Denosaurus", "rus");
    let didThrow;
    try {
        stringIncludes("Denosaurus", "Raptor");
        didThrow = false;
    }
    catch (e) {
        ok(e instanceof AssertionError);
        didThrow = true;
    }
    equals(didThrow, true);
});
dntShim.Deno.test("ArrayContains", function () {
    const fixture = ["deno", "iz", "luv"];
    const fixtureObject = [{ deno: "luv" }, { deno: "Js" }];
    arrayIncludes(fixture, ["deno"]);
    arrayIncludes(fixtureObject, [{ deno: "luv" }]);
    arrayIncludes(Uint8Array.from([1, 2, 3, 4]), Uint8Array.from([1, 2, 3]));
    throws(() => arrayIncludes(fixtureObject, [{ deno: "node" }]), AssertionError, `Expected actual: "[
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
        stringIncludes("Denosaurus from Jurassic", "Raptor");
    }
    catch (e) {
        ok(e instanceof AssertionError);
        ok(e.message ===
            `Expected actual: "Denosaurus from Jurassic" to contain: "Raptor".`);
        didThrow = true;
    }
    ok(didThrow);
});
dntShim.Deno.test("AssertStringMatching", function () {
    match("foobar@deno.com", RegExp(/[a-zA-Z]+@[a-zA-Z]+.com/));
});
dntShim.Deno.test("AssertStringMatchingThrows", function () {
    let didThrow = false;
    try {
        match("Denosaurus from Jurassic", RegExp(/Raptor/));
    }
    catch (e) {
        ok(e instanceof AssertionError);
        ok(e.message ===
            `Expected actual: "Denosaurus from Jurassic" to match: "/Raptor/".`);
        didThrow = true;
    }
    ok(didThrow);
});
dntShim.Deno.test("AssertStringNotMatching", function () {
    notMatch("foobar.deno.com", RegExp(/[a-zA-Z]+@[a-zA-Z]+.com/));
});
dntShim.Deno.test("AssertStringNotMatchingThrows", function () {
    let didThrow = false;
    try {
        notMatch("Denosaurus from Jurassic", RegExp(/from/));
    }
    catch (e) {
        ok(e instanceof AssertionError);
        ok(e.message ===
            `Expected actual: "Denosaurus from Jurassic" to not match: "/from/".`);
        didThrow = true;
    }
    ok(didThrow);
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
    objectMatch(a, {
        foo: true,
    });
    // Subset with another subset
    objectMatch(b, {
        foo: true,
        baz: { bar: false },
    });
    // Subset with multiple subsets
    objectMatch(c, {
        foo: true,
        baz: { bar: false },
        qux: {
            baz: { foo: true },
        },
    });
    // Subset with same object reference as subset
    objectMatch(d, {
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
    objectMatch(e, {
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
    objectMatch(g, { bar: false });
    // Subset with same symbol
    objectMatch(f, {
        [sym]: true,
    });
    // Subset with array inside
    objectMatch(h, { foo: [] });
    objectMatch(h, { foo: [1, 2] });
    objectMatch(h, { foo: [1, 2, 3] });
    objectMatch(i, { foo: [{ bar: false }] });
    objectMatch(i, {
        foo: [{ bar: false }, { bar: { bar: { bar: { foo: true } } } }],
    });
    // Subset with nested array inside
    objectMatch(j, { foo: [[1, 2, 3]] });
    objectMatch(k, { foo: [[1, [2, [3]]]] });
    objectMatch(l, { foo: [[1, [2, [a, e, j, k]]]] });
    // Regexp
    objectMatch(m, { foo: /abc+/i });
    objectMatch(m, { bar: [/abc/g, /abc/m] });
    //Built-in data structures
    objectMatch(n, { foo: new Set(["foo"]) });
    objectMatch(n, { bar: new Map([["bar", 2]]) });
    objectMatch(n, { baz: new Map([["b", b]]) });
    objectMatch(n, { baz: new Map([["b", { foo: true }]]) });
    // Missing key
    {
        let didThrow;
        try {
            objectMatch({
                foo: true,
            }, {
                foo: true,
                bar: false,
            });
            didThrow = false;
        }
        catch (e) {
            ok(e instanceof AssertionError);
            didThrow = true;
        }
        equals(didThrow, true);
    }
    // Simple subset
    {
        let didThrow;
        try {
            objectMatch(a, {
                foo: false,
            });
            didThrow = false;
        }
        catch (e) {
            ok(e instanceof AssertionError);
            didThrow = true;
        }
        equals(didThrow, true);
    }
    // Subset with another subset
    {
        let didThrow;
        try {
            objectMatch(b, {
                foo: true,
                baz: { bar: true },
            });
            didThrow = false;
        }
        catch (e) {
            ok(e instanceof AssertionError);
            didThrow = true;
        }
        equals(didThrow, true);
    }
    // Subset with multiple subsets
    {
        let didThrow;
        try {
            objectMatch(c, {
                foo: true,
                baz: { bar: false },
                qux: {
                    baz: { foo: false },
                },
            });
            didThrow = false;
        }
        catch (e) {
            ok(e instanceof AssertionError);
            didThrow = true;
        }
        equals(didThrow, true);
    }
    // Subset with same object reference as subset
    {
        let didThrow;
        try {
            objectMatch(d, {
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
            ok(e instanceof AssertionError);
            didThrow = true;
        }
        equals(didThrow, true);
    }
    // Subset with circular reference
    {
        let didThrow;
        try {
            objectMatch(e, {
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
            ok(e instanceof AssertionError);
            didThrow = true;
        }
        equals(didThrow, true);
    }
    // Subset with symbol key but with string key subset
    {
        let didThrow;
        try {
            objectMatch(f, {
                foo: true,
            });
            didThrow = false;
        }
        catch (e) {
            ok(e instanceof AssertionError);
            didThrow = true;
        }
        equals(didThrow, true);
    }
    // Subset with array inside but doesn't match key subset
    {
        let didThrow;
        try {
            objectMatch(i, {
                foo: [1, 2, 3, 4],
            });
            didThrow = false;
        }
        catch (e) {
            ok(e instanceof AssertionError);
            didThrow = true;
        }
        equals(didThrow, true);
    }
    {
        let didThrow;
        try {
            objectMatch(i, {
                foo: [{ bar: true }, { foo: false }],
            });
            didThrow = false;
        }
        catch (e) {
            ok(e instanceof AssertionError);
            didThrow = true;
        }
        equals(didThrow, true);
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
        objectMatch({ test: new A(1) }, { test: { a: 1 } });
        objectMatch({ test: { a: 1 } }, { test: { a: 1 } });
        objectMatch({ test: { a: 1 } }, { test: new A(1) });
        objectMatch({ test: new A(1) }, { test: new A(1) });
    }
    {
        // actual/expected contains same instance of Map/TypedArray/etc
        const body = new Uint8Array([0, 1, 2]);
        objectMatch({ body, foo: "foo" }, { body });
    }
    {
        // match subsets of arrays
        objectMatch({ positions: [[1, 2, 3, 4]] }, {
            positions: [[1, 2, 3]],
        });
    }
    //Regexp
    throws(() => objectMatch(m, { foo: /abc+/ }), AssertionError);
    throws(() => objectMatch(m, { foo: /abc*/i }), AssertionError);
    throws(() => objectMatch(m, { bar: [/abc/m, /abc/g] }), AssertionError);
    //Built-in data structures
    throws(() => objectMatch(n, { foo: new Set(["baz"]) }), AssertionError);
    throws(() => objectMatch(n, { bar: new Map([["bar", 3]]) }), AssertionError);
    throws(() => objectMatch(n, { baz: new Map([["a", { baz: true }]]) }), AssertionError);
});
dntShim.Deno.test("AssertsUnimplemented", function () {
    let didThrow = false;
    try {
        unimplemented();
    }
    catch (e) {
        ok(e instanceof AssertionError);
        ok(e.message === "Unimplemented.");
        didThrow = true;
    }
    ok(didThrow);
});
dntShim.Deno.test("AssertsUnreachable", function () {
    let didThrow = false;
    try {
        unreachable();
    }
    catch (e) {
        ok(e instanceof AssertionError);
        ok(e.message === "unreachable");
        didThrow = true;
    }
    ok(didThrow);
});
dntShim.Deno.test("AssertFail", function () {
    throws(fail, AssertionError, "Failed assertion.");
    throws(() => {
        fail("foo");
    }, AssertionError, "Failed assertion: foo");
});
dntShim.Deno.test("assertThrows with wrong error class", () => {
    throws(() => {
        //This next assertThrows will throw an AssertionError due to the wrong
        //expected error class
        throws(() => {
            fail("foo");
        }, TypeError, "Failed assertion: foo");
    }, AssertionError, `Expected error to be instance of "TypeError", but was "AssertionError"`);
});
dntShim.Deno.test("assertThrows with return type", () => {
    throws(() => {
        throw new Error();
    });
});
dntShim.Deno.test("assertRejects with return type", async () => {
    await rejects(() => {
        return Promise.reject(new Error());
    });
});
dntShim.Deno.test("assertRejects with synchronous function that throws", async () => {
    await rejects(() => rejects(() => {
        throw new Error();
    }));
    await rejects(() => rejects(() => {
        throw { wrong: "true" };
    }), AssertionError, "Function throws when expected to reject.");
});
dntShim.Deno.test("assertRejects with PromiseLike", async () => {
    await rejects(() => ({
        then() {
            throw new Error("some error");
        },
    }), Error, "some error");
});
dntShim.Deno.test("assertThrows with non-error value thrown and error class", () => {
    throws(() => {
        throws(() => {
            throw "Panic!";
        }, Error, "Panic!");
    }, AssertionError, "A non-Error object was thrown.");
});
dntShim.Deno.test("assertRejects with non-error value rejected and error class", async () => {
    await rejects(() => {
        return rejects(() => {
            return Promise.reject("Panic!");
        }, Error, "Panic!");
    }, AssertionError, "A non-Error object was rejected.");
});
dntShim.Deno.test("assertThrows with non-error value thrown", () => {
    throws(() => {
        throw "Panic!";
    });
    throws(() => {
        throw null;
    });
    throws(() => {
        throw undefined;
    });
});
dntShim.Deno.test("assertRejects with non-error value rejected", async () => {
    await rejects(() => {
        return Promise.reject(null);
    });
    await rejects(() => {
        return Promise.reject(undefined);
    });
});
dntShim.Deno.test("assertThrows with error class", () => {
    throws(() => {
        throw new Error("foo");
    }, Error, "foo");
});
dntShim.Deno.test("assertRejects with error class", async () => {
    await rejects(() => {
        return Promise.reject(new Error("foo"));
    }, Error, "foo");
});
dntShim.Deno.test("assertThrows with thrown error returns caught error", () => {
    const error = throws(() => {
        throw new Error("foo");
    });
    ok(error instanceof Error);
    equals(error.message, "foo");
});
dntShim.Deno.test("assertThrows with thrown non-error returns caught error", () => {
    const stringError = throws(() => {
        throw "Panic!";
    });
    ok(typeof stringError === "string");
    equals(stringError, "Panic!");
    const numberError = throws(() => {
        throw 1;
    });
    ok(typeof numberError === "number");
    equals(numberError, 1);
    const nullError = throws(() => {
        throw null;
    });
    ok(nullError === null);
    const undefinedError = throws(() => {
        throw undefined;
    });
    ok(typeof undefinedError === "undefined");
    equals(undefinedError, undefined);
});
dntShim.Deno.test("assertRejectes resolves with caught error", async () => {
    const error = await rejects(() => {
        return Promise.reject(new Error("foo"));
    });
    ok(error instanceof Error);
    equals(error.message, "foo");
});
const createHeader = () => [
    "",
    "",
    `    ${gray(bold("[Diff]"))} ${red(bold("Actual"))} / ${green(bold("Expected"))}`,
    "",
    "",
];
const added = (s) => green(bold(stripColor(s)));
const removed = (s) => red(bold(stripColor(s)));
dntShim.Deno.test({
    name: "pass case",
    fn() {
        equals({ a: 10 }, { a: 10 });
        equals(true, true);
        equals(10, 10);
        equals("abc", "abc");
        equals({ a: 10, b: { c: "1" } }, { a: 10, b: { c: "1" } });
        equals(new Date("invalid"), new Date("invalid"));
    },
});
dntShim.Deno.test({
    name: "failed with number",
    fn() {
        throws(() => equals(1, 2), AssertionError, [
            "Values are not equal.",
            ...createHeader(),
            removed(`-   ${yellow("1")}`),
            added(`+   ${yellow("2")}`),
            "",
        ].join("\n"));
    },
});
dntShim.Deno.test({
    name: "failed with number vs string",
    fn() {
        throws(() => equals(1, "1"), AssertionError, [
            "Values are not equal.",
            ...createHeader(),
            removed(`-   ${yellow("1")}`),
            added(`+   "1"`),
        ].join("\n"));
    },
});
dntShim.Deno.test({
    name: "failed with array",
    fn() {
        throws(() => equals([1, "2", 3], ["1", "2", 3]), AssertionError, `
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
        throws(() => equals({ a: 1, b: "2", c: 3 }, { a: 1, b: 2, c: [3] }), AssertionError, `
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
        throws(() => equals(new Date(2019, 0, 3, 4, 20, 1, 10), new Date(2019, 0, 3, 4, 20, 1, 20)), AssertionError, [
            "Values are not equal.",
            ...createHeader(),
            removed(`-   ${new Date(2019, 0, 3, 4, 20, 1, 10).toISOString()}`),
            added(`+   ${new Date(2019, 0, 3, 4, 20, 1, 20).toISOString()}`),
            "",
        ].join("\n"));
        throws(() => equals(new Date("invalid"), new Date(2019, 0, 3, 4, 20, 1, 20)), AssertionError, [
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
        throws(() => equals(1, 2, "CUSTOM MESSAGE"), AssertionError, [
            "Values are not equal: CUSTOM MESSAGE",
            ...createHeader(),
            removed(`-   ${yellow("1")}`),
            added(`+   ${yellow("2")}`),
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
        strictEquals(y, x);
        y.number; // ok
        // z.number;
        // ~
        // Object is of type 'unknown'.deno-ts(2571)
        strictEquals(z, x);
        z.number; // ok
    },
});
dntShim.Deno.test({
    name: "strict pass case",
    fn() {
        strictEquals(true, true);
        strictEquals(10, 10);
        strictEquals("abc", "abc");
        strictEquals(NaN, NaN);
        const xs = [1, false, "foo"];
        const ys = xs;
        strictEquals(xs, ys);
        const x = { a: 1 };
        const y = x;
        strictEquals(x, y);
    },
});
dntShim.Deno.test({
    name: "strict failed with structure diff",
    fn() {
        throws(() => strictEquals({ a: 1, b: 2 }, { a: 1, c: [3] }), AssertionError, `
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
        throws(() => strictEquals({ a: 1, b: 2 }, { a: 1, b: 2 }), AssertionError, `Values have the same structure but are not reference-equal.

    {
      a: 1,
      b: 2
    }`);
    },
});
dntShim.Deno.test({
    name: "strict failed with custom msg",
    fn() {
        throws(() => strictEquals({ a: 1 }, { a: 1 }, "CUSTOM MESSAGE"), AssertionError, `Values have the same structure but are not reference-equal: CUSTOM MESSAGE

    {
      a: 1
    }`);
    },
});
dntShim.Deno.test({
    name: "strictly unequal pass case",
    fn() {
        notStrictEquals(true, false);
        notStrictEquals(10, 11);
        notStrictEquals("abc", "xyz");
        notStrictEquals(1, "1");
        notStrictEquals(-0, +0);
        const xs = [1, false, "foo"];
        const ys = [1, true, "bar"];
        notStrictEquals(xs, ys);
        const x = { a: 1 };
        const y = { a: 2 };
        notStrictEquals(x, y);
    },
});
dntShim.Deno.test({
    name: "strictly unequal fail case",
    fn() {
        throws(() => notStrictEquals(1, 1), AssertionError);
        throws(() => notStrictEquals(NaN, NaN), AssertionError);
    },
});
dntShim.Deno.test("assert almost equals number", () => {
    //Default precision
    almostEquals(-0, +0);
    almostEquals(Math.PI, Math.PI);
    almostEquals(0.1 + 0.2, 0.3);
    almostEquals(NaN, NaN);
    almostEquals(Number.NaN, Number.NaN);
    throws(() => almostEquals(1, 2));
    throws(() => almostEquals(1, 1.1));
    //Higher precision
    almostEquals(0.1 + 0.2, 0.3, 1e-16);
    throws(() => almostEquals(0.1 + 0.2, 0.3, 1e-17), AssertionError, `Expected actual: "${(0.1 + 0.2).toExponential()}" to be close to "${(0.3).toExponential()}"`);
    //Special cases
    almostEquals(Infinity, Infinity);
    throws(() => almostEquals(0, Infinity), AssertionError, 'Expected actual: "0" to be close to "Infinity"');
    throws(() => almostEquals(-Infinity, +Infinity), AssertionError, 'Expected actual: "-Infinity" to be close to "Infinity"');
    throws(() => almostEquals(Infinity, NaN), AssertionError, 'Expected actual: "Infinity" to be close to "NaN"');
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
        instanceOf(new Date(), Date);
        instanceOf(new Number(), Number);
        instanceOf(Promise.resolve(), Promise);
        instanceOf(new TestClass1(), TestClass1);
        // Throwing cases
        throws(() => instanceOf(new Date(), RegExp), AssertionError, `Expected object to be an instance of "RegExp" but was "Date".`);
        throws(() => instanceOf(5, Date), AssertionError, `Expected object to be an instance of "Date" but was "number".`);
        throws(() => instanceOf(new TestClass1(), TestClass2), AssertionError, `Expected object to be an instance of "TestClass2" but was "TestClass1".`);
        // Custom message
        throws(() => instanceOf(new Date(), RegExp, "Custom message"), AssertionError, "Custom message");
        // Edge cases
        throws(() => instanceOf(5, Number), AssertionError, `Expected object to be an instance of "Number" but was "number".`);
        let TestClassWithSameName;
        {
            class TestClass3 {
            }
            TestClassWithSameName = TestClass3;
        }
        throws(() => instanceOf(new TestClassWithSameName(), TestClass3), AssertionError, `Expected object to be an instance of "TestClass3".`);
        throws(() => instanceOf(TestClass1, TestClass1), AssertionError, `Expected object to be an instance of "TestClass1" but was not an instanced object.`);
        throws(() => instanceOf(() => { }, TestClass1), AssertionError, `Expected object to be an instance of "TestClass1" but was not an instanced object.`);
        throws(() => instanceOf(null, TestClass1), AssertionError, `Expected object to be an instance of "TestClass1" but was "null".`);
        throws(() => instanceOf(undefined, TestClass1), AssertionError, `Expected object to be an instance of "TestClass1" but was "undefined".`);
        throws(() => instanceOf({}, TestClass1), AssertionError, `Expected object to be an instance of "TestClass1" but was "Object".`);
        throws(() => instanceOf(Object.create(null), TestClass1), AssertionError, `Expected object to be an instance of "TestClass1" but was "Object".`);
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
            instanceOf(testInstance, ClassWithProperty);
            // Now `testInstance` should be of type `ClassWithProperty`
            testInstance.property = "prop3";
            let x = 5;
            // @ts-expect-error: `x` is `unknown` so adding to it shouldn't work
            x += 5;
            instanceOf(x, Number);
            // @ts-expect-error: `x` is now `Number` rather than `number`, so this should still give a type error.
            x += 5;
        }
    },
});
dntShim.Deno.test({
    name: "assertNotInstanceOf",
    fn() {
        notInstanceOf("not a number", Number);
        notInstanceOf(42, String);
        notInstanceOf(new URL("http://example.com"), Boolean);
    },
});
dntShim.Deno.test({
    name: "assert* functions with specified type parameter",
    fn() {
        equals("hello", "hello");
        notEquals(1, 2);
        arrayIncludes([true, false], [true]);
        const value = { x: 1 };
        strictEquals(value, value);
        // deno-lint-ignore ban-types
        notStrictEquals(value, { x: 1 });
    },
});
dntShim.Deno.test("assertEquals compares objects structurally if one object's constructor is undefined and the other is Object", () => {
    const a = Object.create(null);
    a.prop = "test";
    const b = {
        prop: "test",
    };
    equals(a, b);
    equals(b, a);
});
dntShim.Deno.test("assertEquals diff for differently ordered objects", () => {
    throws(() => {
        equals({
            aaaaaaaaaaaaaaaaaaaaaaaa: 0,
            bbbbbbbbbbbbbbbbbbbbbbbb: 0,
            ccccccccccccccccccccccc: 0,
        }, {
            ccccccccccccccccccccccc: 1,
            aaaaaaaaaaaaaaaaaaaaaaaa: 0,
            bbbbbbbbbbbbbbbbbbbbbbbb: 0,
        });
    }, AssertionError, `
    {
      aaaaaaaaaaaaaaaaaaaaaaaa: 0,
      bbbbbbbbbbbbbbbbbbbbbbbb: 0,
-     ccccccccccccccccccccccc: 0
+     ccccccccccccccccccccccc: 1
    }`);
});
dntShim.Deno.test("Assert Throws Parent Error", () => {
    throws(() => {
        throw new AssertionError("Fail!");
    }, Error, "Fail!");
});
dntShim.Deno.test("Assert Throws Async Parent Error", async () => {
    await rejects(() => {
        return Promise.reject(new AssertionError("Fail!"));
    }, Error, "Fail!");
});
dntShim.Deno.test("Assert Throws Async promise rejected with custom Error", async () => {
    class CustomError extends Error {
    }
    class AnotherCustomError extends Error {
    }
    await rejects(() => rejects(() => Promise.reject(new AnotherCustomError("failed")), CustomError, "fail"), AssertionError, 'Expected error to be instance of "CustomError", but was "AnotherCustomError".');
});
dntShim.Deno.test("Assert Is Error Non-Error Fail", () => {
    throws(() => isError("Panic!", undefined, "Panic!"), AssertionError, `Expected "error" to be an Error object.`);
    throws(() => isError(null), AssertionError, `Expected "error" to be an Error object.`);
    throws(() => isError(undefined), AssertionError, `Expected "error" to be an Error object.`);
});
dntShim.Deno.test("Assert Is Error Parent Error", () => {
    isError(new AssertionError("Fail!"), Error, "Fail!");
});
dntShim.Deno.test("Assert Is Error with custom Error", () => {
    class CustomError extends Error {
    }
    class AnotherCustomError extends Error {
    }
    isError(new CustomError("failed"), CustomError, "fail");
    throws(() => isError(new AnotherCustomError("failed"), CustomError, "fail"), AssertionError, 'Expected error to be instance of "CustomError", but was "AnotherCustomError".');
});
dntShim.Deno.test("Assert False with falsy values", () => {
    notOk(false);
    notOk(0);
    notOk("");
    notOk(null);
    notOk(undefined);
});
dntShim.Deno.test("Assert False with truthy values", () => {
    throws(() => notOk(true));
    throws(() => notOk(1));
    throws(() => notOk("a"));
    throws(() => notOk({}));
    throws(() => notOk([]));
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
    equals(data, data);
    equals(new Set(data), new Set(data));
});
