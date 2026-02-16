import { describe, it, expect } from "@jest/globals";
import { sum, multiply, subtract } from "./utils.js";

describe("Utils test suite", () => {
  it("sum of the numbers", () => {
    expect(sum(5, 5)).toBe(10);
  });

  it("multiple of the numbers", () => {
    expect(multiply(5, 5)).toBe(25);
  });

  it("difference of the numbers", () => {
    expect(subtract(7, 5)).toBe(2);
  });
});
