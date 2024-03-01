export class StringUtil {
  /**
   *  Puts the first typographic letter unit of each word in titlecase.
   * @param value string
   * @returns string
   */
  static capitalize(value: string) {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
