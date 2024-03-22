import { NgModule } from '@angular/core';
import { provideServerRendering, ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
  providers: [
    provideServerRendering(),
  ],
})
export class AppServerModule {}
