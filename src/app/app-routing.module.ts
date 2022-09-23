import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BusinessComponent } from './components/business/business.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { LoanTermsComponent } from './components/loan-terms/loan-terms.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RepaymentScheduleComponent } from './components/repayment-schedule/repayment-schedule.component';
import { RepaymentComponent } from './components/repayment/repayment.component';
import { SecurityComponent } from './components/security/security.component';
import { TermsPayinbitsComponent } from './components/terms-payinbits/terms-payinbits.component';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'business',
    component: BusinessComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'security',
    component: SecurityComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'terms-and-conditions',
    component: TermsComponent,
  },
  {
    path: 'loan-terms',
    component: LoanTermsComponent,
  },
  {
    path: 'terms-and-conditions/payinbits',
    component: TermsPayinbitsComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'repayment',
    component: RepaymentComponent,
  },
  {
    path: 'repayment/schedule',
    component: RepaymentScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
