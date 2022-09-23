import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeInputModule } from 'angular-code-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CashComponent } from './components/cash/cash.component';
import { ServicesComponent } from './components/services/services.component';
import { SavingsComponent } from './components/savings/savings.component';
import { StepsComponent } from './components/steps/steps.component';
import { LogosComponent } from './components/logos/logos.component';
import { DreamsComponent } from './components/dreams/dreams.component';
import { TribeComponent } from './components/tribe/tribe.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/business/business.component';
import { BusinessHeaderComponent } from './components/business-header/business-header.component';
import { PaymentComponent } from './components/payment/payment.component';
import { InstoreComponent } from './components/instore/instore.component';
import { OnlinePaymentComponent } from './components/online-payment/online-payment.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { AboutValuesComponent } from './components/about-values/about-values.component';
import { SecurityComponent } from './components/security/security.component';
import { FaqComponent } from './components/faq/faq.component';
import { TermsComponent } from './components/terms/terms.component';
import { TermsDataComponent } from './components/terms-data/terms-data.component';
import { TermsPayinbitsComponent } from './components/terms-payinbits/terms-payinbits.component';
import { TermsPayinbitsDataComponent } from './components/terms-payinbits-data/terms-payinbits-data.component';
import { LoanTermsComponent } from './components/loan-terms/loan-terms.component';
import { LoanTermsDataComponent } from './components/loan-terms-data/loan-terms-data.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { PrivacyDataComponent } from './components/privacy-data/privacy-data.component';
import { RepaymentComponent } from './components/repayment/repayment.component';
import { OtpCardComponent } from './components/otp-card/otp-card.component';
import { RepaymentScheduleComponent } from './components/repayment-schedule/repayment-schedule.component';
import { RepaymentCardComponent } from './components/repayment-card/repayment-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CashComponent,
    ServicesComponent,
    SavingsComponent,
    StepsComponent,
    LogosComponent,
    DreamsComponent,
    TribeComponent,
    CarouselComponent,
    PartnersComponent,
    ContactFormComponent,
    FooterComponent,
    HomeComponent,
    BusinessComponent,
    BusinessHeaderComponent,
    PaymentComponent,
    InstoreComponent,
    OnlinePaymentComponent,
    ShopComponent,
    ContactComponent,
    AboutComponent,
    AboutHeaderComponent,
    AboutValuesComponent,
    SecurityComponent,
    FaqComponent,
    TermsComponent,
    TermsDataComponent,
    TermsPayinbitsComponent,
    TermsPayinbitsDataComponent,
    LoanTermsComponent,
    LoanTermsDataComponent,
    PrivacyPolicyComponent,
    PrivacyDataComponent,
    RepaymentComponent,
    OtpCardComponent,
    RepaymentScheduleComponent,
    RepaymentCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    CodeInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
