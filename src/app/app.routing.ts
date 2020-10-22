import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule, Route} from '@angular/router'
import { AboutComponent } from './components/pages/about/about.component'
import { ContactComponent } from './components/pages/contact/contact.component'
import { HomeComponent } from './components/pages/home/home.component'
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component'

const appRoutes: Routes=[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);