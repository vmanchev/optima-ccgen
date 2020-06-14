import { generateCcNumber, isValidCcNumber, formatCcNumber } from "./index";
import { expect } from "chai";
import "mocha";

describe("generateCcNumber", () => {
  it("should generate a 16-lengh credit card number", () => {
    // ACT
    const result = generateCcNumber("", 16);

    // ASSERT
    expect(result.length).to.equal(16);
  });

  it("should prepend 1234 when passed as prefix argument", () => {
    // ACT
    const result = generateCcNumber("1234", 16);

    // ASSERT
    expect(/^(1234).*/.test(result)).to.be.true;
  });

  it("should add white spaces after every 4th number", () => {
    // ACT
    const result = generateCcNumber("1234", 16, true);

    // ASSERT
    expect(/^(\d{4}) (\d{4}) (\d{4}) (\d{4})$/.test(result)).to.be.true;
  });
});

describe("isValidCcNumber", () => {
  it("should return true when a valid non-formatted credit card number is used as argument", () => {
    // ARRANGE
    let validCc = generateCcNumber("", 16);

    // ACT
    const result = isValidCcNumber(validCc);

    // ASSERT
    expect(result).to.be.true;
  });

  it("should return true when a valid formatted credit card number is used as argument", () => {
    // ARRANGE
    let validCc = generateCcNumber("", 16, true);

    // ACT
    const result = isValidCcNumber(validCc);

    // ASSERT
    expect(result).to.be.true;
  });

  it("should return false when an invalid credit card number is used as argument", () => {
    // ARRANGE
    let invalidCc = "1234123412341234";

    // ACT
    const result = isValidCcNumber(invalidCc);

    // ASSERT
    expect(result).to.be.false;
  });
});

describe("formatCcNumber", () => {
  it("should add an empty space after every 4th character", () => {
    expect(formatCcNumber("123412341234")).to.equal("1234 1234 1234");
  });
});
