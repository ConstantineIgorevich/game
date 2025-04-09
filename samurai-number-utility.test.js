import { SamuraiNumberUtility } from "./samurai-number-utility.js";

describe("SamuraiNumberUtility.getRandomInteger", () => {
  const utility = new SamuraiNumberUtility();

  it("должен вернуть число в пределах диапазона (включительно - исключительно)", () => {
    const fromInclusive = 5;
    const toExclusive = 10;
    for (let i = 0; i < 100; i++) {
      // Проверяем многократно для надежности
      const result = utility.getRandomInteger(fromInclusive, toExclusive);
      expect(result).toBeGreaterThanOrEqual(fromInclusive);
      expect(result).toBeLessThan(toExclusive);
    }
  });

  it("должен выбрасывать ошибку, если fromInclusive >= toExclusive", () => {
    expect(() => utility.getRandomInteger(10, 5)).toThrow(
      "From must be less then To"
    );
    expect(() => utility.getRandomInteger(5, 5)).toThrow(
      "From must be less then To"
    );
  });

  it("должен корректно работать с отрицательными числами", () => {
    const fromInclusive = -10;
    const toExclusive = -5;
    for (let i = 0; i < 100; i++) {
      const result = utility.getRandomInteger(fromInclusive, toExclusive);
      expect(result).toBeGreaterThanOrEqual(fromInclusive);
      expect(result).toBeLessThan(toExclusive);
    }
  });

  it("должен корректно работать с диапазоном, охватывающим 0", () => {
    const fromInclusive = -5;
    const toExclusive = 5;
    for (let i = 0; i < 100; i++) {
      const result = utility.getRandomInteger(fromInclusive, toExclusive);
      expect(result).toBeGreaterThanOrEqual(fromInclusive);
      expect(result).toBeLessThan(toExclusive);
    }
  });

  it("должен возвращать одно и то же значение, если разница между границами равна 1", () => {
    const fromInclusive = 7;
    const toExclusive = 8;
    for (let i = 0; i < 100; i++) {
      const result = utility.getRandomInteger(fromInclusive, toExclusive);
      expect(result).toBe(fromInclusive);
    }
  });

  it("должен корректно работать с большими числами", () => {
    const fromInclusive = 1_000_000;
    const toExclusive = 2_000_000;
    for (let i = 0; i < 100; i++) {
      const result = utility.getRandomInteger(fromInclusive, toExclusive);
      expect(result).toBeGreaterThanOrEqual(fromInclusive);
      expect(result).toBeLessThan(toExclusive);
    }
  });
});
