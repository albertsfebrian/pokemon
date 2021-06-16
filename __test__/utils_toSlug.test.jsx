import toSlug from "../src/utils/toSlug";

describe('testing slug', () => {
    test('test undefined', () => {
        expect(toSlug(undefined)).toBe("");
    });

    test('test null', () => {
        expect(toSlug(null)).toBe("");
    });

    test('test empty string', () => {
        expect(toSlug("")).toBe("");
    });

    test('test normal name', () => {
        expect(toSlug("bulbasaur")).toBe("bulbasaur");
    });

    test('test 2 word name', () => {
        expect(toSlug("one two")).toBe("one-two");
    });

    test('test 3 word name', () => {
        expect(toSlug("one two three")).toBe("one-two-three");
    });
});