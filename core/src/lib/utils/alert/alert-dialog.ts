import { Confirm, Report } from 'notiflix';

export class AlertDialog {
  static warn(
    msg: string,
    title: string,
    yesText: string,
    noText: string,
    yesCallBack?: () => void | undefined,
    noCallBack?: () => void | undefined,
    color = '#2f6fff'
  ) {
    Confirm.show(title, msg, yesText, noText, yesCallBack, noCallBack, {
      titleColor: color,
      okButtonBackground: color,
      messageMaxLength: 200,
    });
  }

  static success(
    msg: string,
    title: string,
    btnTxt: string,
    callBackOrOption?: Notiflix.IReportOptions | (() => void) | undefined,
    options?: Notiflix.IReportOptions | undefined
  ) {
    Report.success(title, msg, btnTxt, callBackOrOption, options);
  }

  static error(
    msg: string,
    title: string,
    btnTxt: string,
    callBackOrOption?: Notiflix.IReportOptions | (() => void) | undefined,
    options?: Notiflix.IReportOptions | undefined
  ) {
    Report.failure(title, msg, btnTxt, callBackOrOption, options);
  }

  static prompt(
    defaultValue: string,
    title: string,
    msg: string,
    yesText: string,
    noText: string,
    color = '#2f6fff',
    yesCallBack?: (answer: string) => void,
    noCallBack?: (answer: string) => void
  ) {
    Confirm.prompt(
      title,
      msg,
      defaultValue,
      yesText,
      noText,
      yesCallBack,
      noCallBack,
      {
        okButtonBackground: color,
        titleColor: color,
      }
    );
  }
}
