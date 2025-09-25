import { describe, expect, it } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  it("should be a function", () => {
    expect(typeof Counter).toBe("function");
  });

  it("should have the correct component name", () => {
    expect(Counter.name).toBe("Counter");
  });
});
