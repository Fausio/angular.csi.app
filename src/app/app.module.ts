import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SiteIndexComponent } from './components/site/site-index/site-index.component';
import { SiteCreateComponent } from './components/site/site-create/site-create.component';
import { SiteEditComponent } from './components/site/site-edit/site-edit.component';


const routes: Routes = [
  { path: 'site-index', component: SiteIndexComponent },
  { path: 'site-create', component: SiteCreateComponent },
  { path: 'site-edit/id', component: SiteEditComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    SiteIndexComponent,
    SiteCreateComponent,
    SiteEditComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
