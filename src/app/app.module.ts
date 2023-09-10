import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiteIndexComponent } from './components/site/site-index/site-index.component';
import { SiteCreateComponent } from './components/site/site-create/site-create.component';
import { SiteEditComponent } from './components/site/site-edit/site-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteIndexComponent,
    SiteCreateComponent,
    SiteEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
