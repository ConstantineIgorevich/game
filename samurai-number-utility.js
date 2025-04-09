export class SamuraiNumberUtility {
  /**
   * Генерирует случайное целое число в заданном диапазоне.
   * @param {number} fromInclusive - Нижняя граница (включительно).
   * @param {number} toExclusive - Верхняя граница (исключительно).
   * @returns {number} - Случайное целое число.
   */
  getRandomInteger(fromInclusive, toExclusive) {
    if (fromInclusive >= toExclusive) {
      throw new Error("From must be less then To");
    }
    return Math.floor(
      Math.random() * (toExclusive - fromInclusive) + fromInclusive
    );
  }
}
