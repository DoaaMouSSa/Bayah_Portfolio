import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './website/shared/header/header.component';
import { BannerComponent } from './website/banner/banner.component';
import { WhoWeAreComponent } from './website/who-we-are/who-we-are.component';
import { AboutComponent } from './website/about/about.component';
import { FooterComponent } from './website/shared/footer/footer.component';
import { ContactComponent } from './website/contact/contact.component';
import { BlogComponent } from './website/blog/blog.component';
import { TeamComponent } from './website/team/team.component';
import { FaqComponent } from './website/faq/faq.component';
import { PricingComponent } from './website/pricing/pricing.component';
import { TestimonialComponent } from './website/testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    WhoWeAreComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
    TeamComponent,
    FaqComponent,
    PricingComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
