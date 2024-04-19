import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { FooterComponent } from './footer/footer.component';
import { CarausalComponent } from './carausal/carausal.component';
import { ComplainFormComponent } from './complain-form/complain-form.component';

import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  // Replace with your home component
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  { path: 'complain', component:ComplainFormComponent } ,
  {path:'video',component:VideoComponent},
  {path:'about',component:AboutPageComponent},
  {path:'contact',component:ContactComponent}// Replace with your about component
  // Add more routes for other components
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureCardComponent,
    FooterComponent,
    CarausalComponent,
    ComplainFormComponent,
    HomePageComponent,
    AboutPageComponent,
    VideoComponent,
    ContactComponent
    
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(routes)
    
   
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
