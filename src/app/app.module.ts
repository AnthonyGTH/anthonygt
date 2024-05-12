import { UtilitiesService } from './tools/utilities.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { StudiesComponent } from './studies/studies.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { InterestingThingsComponent } from './interesting-things/interesting-things.component';
import { ContestsComponent } from './contests/contests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkExperienceComponent,
    StudiesComponent,
    PersonalInformationComponent,
    InterestingThingsComponent,
    ContestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [UtilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
