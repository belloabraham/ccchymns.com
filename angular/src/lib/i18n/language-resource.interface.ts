import { Translation } from '@ngneat/transloco';
import { Observable, ReplaySubject } from 'rxjs';

export interface ILanguageResourceService {
  /**
   * This method is used to notify whether the language resource has been successfully loaded or not.
   * @param loaded (boolean): A boolean value indicating whether the language resource was loaded successfully.
   */
  setLanguageResourceLoadedSuccessfully: (value: boolean) => void;

  /**
   *This method returns an Observable that emits whether the language resource has been successfully loaded.
   * @returns ReplaySubject<boolean>
   * @example
   *const languageLoadObservable = getLanguageLoadSuccessfully$();
   *languageLoadObservable.subscribe((loaded) => {
   * console.log(`Language resource loaded successfully: ${loaded}`);
   *});
   */
  getLanguageLoadSuccessfully$: () => ReplaySubject<boolean>;

  /**
   * This method initiates the loading of a language resource using the provided language code.
   * @param language
   * @returns Observable<Translation>;
   * @example
   * loadLanguageResource('en').subscribe(() => {
   * console.log('Language resource loaded successfully');
   * });
   */
  loadLanguageResource: (lang: string) => Observable<Translation>;

  /**
   * This method retrieves a translated string using the provided key and optional parameters.
   * @param key (string): The translation key for the desired string.
   * @param params ({ key: string } | object): Optional parameters to be used for string interpolation.
   * @returns The translated string with parameters replaced, if applicable.
   * @example
   * const translatedString = getStringWithParameter('greeting', { name: 'John' });
   * console.log(translatedString); // Output: "Hello, John!"
   */
  getStringWithParameter: (
    key: string,
    params: { value: string } | object
  ) => string;

  /**
   * This method retrieves a translated string using the provided key.
   * @param key (string): The translation key for the desired string.
   * @returns The translated string.
   * @example
   * const translatedGreeting = getString('greeting');
   * console.log(translatedGreeting); // Output: "Hello!"
   */
  getString: (key: string) => string;
}
