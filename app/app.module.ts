import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/index';
import { AuthenticationModule } from './authentication/index';
import { CoreModule } from './core/index';
import { SearchModule } from './search/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LayoutModule,
    CoreModule,
    SearchModule,
    //RouterModule.forRoot(routes, {useHash:true, enableTracing:true})
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
