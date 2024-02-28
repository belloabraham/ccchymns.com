import { Block } from 'notiflix';

export class Shield {
  private static readonly shield = '.shield';

  static standard(
    svgSizeInPx: number,
    fontFamily = 'Nunito Sans',
    selector: string = Shield.shield,
    message?: string
  ) {
    Block.standard(selector, message, {
      fontFamily: fontFamily,
      svgSize: `${svgSizeInPx}px`,
    });
  }

  static remove(selector: string | HTMLElement[] = Shield.shield) {
    Block.remove(selector);
  }

  static pulse(
    fontSizeInPx: number,
    svgSizeInPx: number,
    message?: string,
    selector: string | HTMLElement[] = Shield.shield,
    fontFamily = 'Nunito Sans'
  ) {
    Block.pulse(selector, message, {
      fontFamily: fontFamily,
      svgSize: `${svgSizeInPx}px`,
      messageFontSize: `${fontSizeInPx}px`,
      messageMaxLength: 200,
    });
  }
}
