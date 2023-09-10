import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SiteIndexComponent } from './components/site/site-index/site-index.component';
import { SiteCreateComponent } from './components/site/site-create/site-create.component';
import { SiteEditComponent } from './components/site/site-edit/site-edit.component';
import { PartnerEditComponent } from './components/partner/partner-edit/partner-edit.component';
import { PartnerIndexComponent } from './components/partner/partner-index/partner-index.component';
import { PartnerCreateComponent } from './components/partner/partner-create/partner-create.component';
import { HouseholdCreateComponent } from './components/household/household-create/household-create.component';
import { HouseholdEditComponent } from './components/household/household-edit/household-edit.component';
import { HouseholdIndexComponent } from './components/household/household-index/household-index.component';
import { BeneficiaryIndexComponent } from './components/beneficiary/beneficiary-index/beneficiary-index.component';
import { BeneficiaryEditComponent } from './components/beneficiary/beneficiary-edit/beneficiary-edit.component';
import { BeneficiaryCreateComponent } from './components/beneficiary/beneficiary-create/beneficiary-create.component';



const routes: Routes = [
  { path: 'beneficiary-index', component: BeneficiaryIndexComponent },
  { path: 'beneficiary-create', component: BeneficiaryCreateComponent },
  { path: 'beneficiary-edit/id', component: BeneficiaryEditComponent },

  { path: 'household-index', component: HouseholdIndexComponent },
  { path: 'household-create', component: HouseholdCreateComponent },
  { path: 'household-edit/id', component: HouseholdEditComponent },

  { path: 'partner-index', component: PartnerIndexComponent },
  { path: 'partner-create', component: PartnerCreateComponent },
  { path: 'partner-edit/id', component: PartnerEditComponent },

  { path: 'site-index', component: SiteIndexComponent },
  { path: 'site-create', component: SiteCreateComponent },
  { path: 'site-edit/id', component: SiteEditComponent },


];


@NgModule({
  declarations: [
    AppComponent,
    SiteIndexComponent,
    SiteCreateComponent,
    SiteEditComponent,
    PartnerEditComponent,
    PartnerIndexComponent,
    PartnerCreateComponent,
    HouseholdCreateComponent,
    HouseholdEditComponent,
    HouseholdIndexComponent,
    BeneficiaryIndexComponent,
    BeneficiaryEditComponent,
    BeneficiaryCreateComponent 
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
