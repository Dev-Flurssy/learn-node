import { describe, it } from "node:test";
import assert from "node:assert";

const sum = (a, b) => {
  return a + b;
};

describe("sum operation", () => {
  it("should return the sum", () => {
    assert.strictEqual(sum(2, 3), 5);
  });
});
