# Bearz-Sh Assertions for Deno 🦕 Tests

The assertions work with node when Deno to Npm ("DNT") is used to generate
and run tests and they allow more streamlined namespace imports.

The main differences are the lack of the assert prefix for method names,
falling back to util.inspect, and turning off trailing commas by default
to have better parity with node.

Most of the source comes from deno_std under the MIT license.

## Deno Examples

```ts
import { equals } from "https://deno.land/x/bearzsh_assertions@MOD_VERSION/mod.ts";

Deno.test("example", function (): void {
  equals("world", "world");
  equals({ hello: "world" }, { hello: "world" });
});
```

or

```ts

import * as assert from "https://deno.land/x/bearzsh_assertions@MOD_VERSION/mod.ts";

Deno.test("example", function (): void {
  assert.equals("world", "world");
  assert.equals({ hello: "world" }, { hello: "world" });
});
```

## NPM Samples

```ts
import * as dntShim from "./_dnt.test_shims.js";
import { equals } from "@bearz-sh/assertions";

dntShim.Deno.test("example", function (): void {
  equals("world", "world");
  equals({ hello: "world" }, { hello: "world" });
});
```

or

```ts
import * as dntShim from "./_dnt.test_shims.js";
import * as assert from "@bearz-sh/assertions";

dntShim.Deno.test("example", function (): void {
  assert.equals("world", "world");
  assert.equals({ hello: "world" }, { hello: "world" });
});
```
