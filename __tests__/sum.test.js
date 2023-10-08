const sum = require('../src/scripts/sum');
const {expect, test} = require("@jest/globals");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});