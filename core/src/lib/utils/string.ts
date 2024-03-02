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

  /**
   * Function to capitalize a string based on specific rules:
   * - If the first character is a number, capitalize the second character.
   * - If the first character is a letter, capitalize the first character.
   * - Ensure that the rest of the string is in lowercase.
   * @param inputStr The input string to be capitalized
   * @returns The capitalized string
   */
  static capitalizeBibleReference(reference: string) {
    if (reference[0].match(/\d/)) {
      return reference.charAt(0) + StringUtil.capitalize(reference.slice(1));
    } else {
      return StringUtil.capitalize(reference);
    }
  }
}
