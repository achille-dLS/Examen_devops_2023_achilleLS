const { isEmpty, isValidGamertag} = require("../validations");


describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// Tests pour vérifier si la fonction fonctionne correctement
describe('isValidGamerTag', () => {
    it('should return true for a valid gamer tag', () => {
        expect(isValidGamertag('Player#1')).toBe(true);
    });

    it('should return false for a gamer tag with less than 8 characters', () => {
        expect(isValidGamertag('Pl#1')).toBe(false);
    });

    it('should return false for a gamer tag without special characters', () => {
        expect(isValidGamertag('PlayerOne')).toBe(false);
    });

    it('should return false for a gamer tag without numbers', () => {
        expect(isValidGamertag('Player#One')).toBe(false);
    });
});
