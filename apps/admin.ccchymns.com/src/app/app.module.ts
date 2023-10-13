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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
