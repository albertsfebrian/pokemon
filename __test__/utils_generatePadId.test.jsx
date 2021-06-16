import generatePadId from "../src/utils/generatePadId";

describe('testing generate Pad Id', () => {
    test('1 digit number', () => {
        expect(generatePadId(1)).toBe("#001");
    });

    test('2 digit number', () => {
        expect(generatePadId(12)).toBe("#012");
    });

    test('3 digit number', () => {
        expect(generatePadId(123)).toBe("#123");
    });

    test('more than 3 digit number', () => {
        expect(generatePadId(1234)).toBe("#1234");
    });
});