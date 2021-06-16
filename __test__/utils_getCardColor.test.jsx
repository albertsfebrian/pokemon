import getCardColor from "../src/utils/getCardColor";

describe('testing generate Pad Id', () => {
    test('test undefined', () => {
        expect(getCardColor(undefined)).toBe("#a4a4a4");
    });

    test('test null', () => {
        expect(getCardColor(12)).toBe("#a4a4a4");
    });

    test('test valid type', () => {
        const types = [
            {
              "type": {
                "name": "ghost"
              }
            },
            {
              "type": {
                "name": "poison"
              }
            }
        ]
        expect(getCardColor(types)).toBe("#726a95");
    });

    test('test new pokemon type', () => {
        const types = [
            {
              "type": {
                "name": "new-types"
              }
            },
            {
              "type": {
                "name": "poison"
              }
            }
        ]
        expect(getCardColor(types)).toBe("#a4a4a4");
    });
});