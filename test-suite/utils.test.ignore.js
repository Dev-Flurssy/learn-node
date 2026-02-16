import { describe, it } from "node:test";
import assert from "node:assert";
import { sum, multiply, subtract } from "./utils.js";

describe("sum it", () => {
  it("sum of the numbers", () => {
    assert.strictEqual(sum(5, 5), 10);
  });
});

describe("multiply it", () => {
  it("multiple of the numbers", () => {
    assert.strictEqual(multiply(5, 5), 25);
  });
});
describe("differentiate it", () => {
  it("difference of the numbers", () => {
    assert.strictEqual(subtract(10, 5), 5);
  });
});
