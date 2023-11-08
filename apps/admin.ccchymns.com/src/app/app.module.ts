import { TuiRootModule, TuiDialogModule } from '@taiga-ui/core';
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
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(languageLoadedFeature),
    environment.imports,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
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
})
export class AppModule {}
