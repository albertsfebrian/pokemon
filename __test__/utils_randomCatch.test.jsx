import randomCatch from "../src/utils/randomCatch";

describe('testing random catch', () => {
    test('test 0%', () => {
        expect(randomCatch(0)).toBe(false);
    });

    test('test 100%', () => {
        expect(randomCatch(100)).toBe(true);
    });

    test('test out range not number', () => {
        expect(()=>randomCatch("a")).toThrow("Percentage is Not A Number");
    });

    test('test out range number below than 0', () => {
        expect(()=>randomCatch(-1)).toThrow("Percentage Must between 0-100");
    });

    test('test out range number greater than 100', () => {
        expect(()=>randomCatch(101)).toThrow("Percentage Must between 0-100");
    });
});