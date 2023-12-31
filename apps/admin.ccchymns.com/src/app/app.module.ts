import { TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranslocoRootModule } from '@ccchymns.com/angular';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { languageLoadedFeature } from '../store/selectors/language-resource.selector';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {
  getRemoteConfig,
  provideRemoteConfig,
} from '@angular/fire/remote-config';

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
    StoreModule.forRoot({}),
    StoreModule.forFeature(languageLoadedFeature),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    // provideAppCheck(() => {
    //   const provider = new ReCaptchaEnterpriseProvider(environment.reCAPTCHAEnterpriseKey);
    //   return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    // }),
    //  provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    //provideStorage(() => getStorage()),
    // provideRemoteConfig(() => getRemoteConfig()),
  ],
  bootstrap: [AppComponent],
  exports: MODULES,
})
export class AppModule {}
