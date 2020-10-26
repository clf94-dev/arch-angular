import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMiddleComponent } from './components/about-middle/about-middle.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactInfoCardComponent } from './components/contact-info-card/contact-info-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { HomeFeaturedComponent } from './components/home-featured/home-featured.component';
import { HomeIntroComponent } from './components/home-intro/home-intro.component';
import { HomeTeamComponent } from './components/home-team/home-team.component';
import { MapComponent } from './components/map/map.component';
import { MapImgComponent } from './components/map-img/map-img.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { TeamAboutComponent } from './components/team-about/team-about.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { TopAboutComponent } from './components/top-about/top-about.component';
import { TopAboutContactCardComponent } from './components/top-about-contact-card/top-about-contact-card.component';
import { TopContactComponent } from './components/top-contact/top-contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { appRoutingProviders, routing } from './app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMiddleComponent,
    ContactDetailsComponent,
    ContactInfoCardComponent,
    FooterComponent,
    FormComponent,
    HomeFeaturedComponent,
    HomeIntroComponent,
    HomeTeamComponent,
    MapComponent,
    MapImgComponent,
    MemberCardComponent,
    PortfolioSectionComponent,
    TeamAboutComponent,
    ProjectCardComponent,
    TopAboutComponent,
    TopAboutContactCardComponent,
    TopContactComponent,
    WelcomeComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
