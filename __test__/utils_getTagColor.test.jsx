import getTagColor from "../src/utils/getTagColor";

describe('testing get Tag Color', () => {
    test('test undefined', () => {
        expect(getTagColor(undefined)).toBe("#ffffff");
    });

    test('test null', () => {
        expect(getTagColor(12)).toBe("#ffffff");
    });

    test('test valid tag', () => {
        const tag = "flying";
        expect(getTagColor(tag)).toBe("#9aabf6");
    });

    test('test new pokemon tag', () => {
        const tag = "new-tag";
        expect(getTagColor(tag)).toBe("#ffffff");
    });
});