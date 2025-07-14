import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("basic test", () => {
  assertEquals(2 + 2, 4);
});

Deno.test("string test", () => {
  assertEquals("hello" + " world", "hello world");
});
