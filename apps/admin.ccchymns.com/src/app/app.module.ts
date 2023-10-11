import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranslocoRootModule } from '@ccchymns.com/angular';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { languageLoadedFeature } from '../store/selectors/language-resource.selector';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
     TranslocoRootModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(languageLoadedFeature),
    environment.imports,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
