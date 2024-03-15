import { TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranslocoRootModule } from '@ccchymns.com/angular';
import { environment } from '../environments/environment';
import { provideState, provideStore } from '@ngrx/store';
import { languageLoadedFeature } from '../store/selectors/language-resource.selector';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  initializeAppCheck, 
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  TranslocoRootModule,
  AppRoutingModule,
  environment.imports,
  //Should come after BrowserAnimationsModule
  TuiRootModule,
  TuiDialogModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...MODULES,
    provideFirebaseApp(() => initializeApp({ ...environment.firebase })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAppCheck(() => {
      const provider = new ReCaptchaEnterpriseProvider(
        environment.reCAPTCHAEnterpriseKey
      );
      return initializeAppCheck(getApp(), {
        provider,
        isTokenAutoRefreshEnabled: true,
      });
    }),
  ],
  providers: [provideStore(), provideState(languageLoadedFeature)],
  bootstrap: [AppComponent],
  exports: MODULES,
})
export class AppModule {}
