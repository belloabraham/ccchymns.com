export class Regex {
  static readonly EMAIL = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static readonly BIBLE_REFERENCE =
    /^(?:(?:[1-3]\s?)?[A-Za-z]+)\s?\d+(?::\d+)?(?:-\d+)?$/;
}
