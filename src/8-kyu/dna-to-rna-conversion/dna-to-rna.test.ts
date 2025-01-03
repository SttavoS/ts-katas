import { describe, expect, test } from "@jest/globals";
import { DNAtoRNA } from "./dna-to-rna";

describe("DNA to RNA conversion", () => {
  test("Should return the correct string", () => {
    expect(DNAtoRNA("TTTT")).toBe("UUUU");
    expect(DNAtoRNA("GCAT")).toBe("GCAU");
    expect(DNAtoRNA("GACCGCCGCC")).toBe("GACCGCCGCC");
  });
});
