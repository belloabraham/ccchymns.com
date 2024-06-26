import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import DOMPurify from 'dompurify';

if (window.trustedTypes && window.trustedTypes.createPolicy) {
  window.trustedTypes.createPolicy('default', {
    createHTML: (input, sink) => {
      const content = input as string;
      if (content.includes('notiflix')) {
        return input;
      }
      return DOMPurify.sanitize(input, {
        RETURN_TRUSTED_TYPE: true,
      }) as any;
    },
    //Permits src to be set for script url by non angular code
    //The browser 'default' CSP policy approves that this url is safe irrespective of any url
    createScriptURL: (string) => string,
  });
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
