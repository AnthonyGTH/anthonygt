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
import { KnownTechnologiesComponent } from './elements/known-technologies/known-technologies.component';
import { WorkExperienceHomeComponent } from './elements/work-experience-home/work-experience-home.component';
import { EducationHomeComponent } from './elements/education-home/education-home.component';
import { MoreAboutComponent } from './elements/more-about/more-about.component';
import { SkillsComponent } from './elements/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkExperienceComponent,
    StudiesComponent,
    PersonalInformationComponent,
    InterestingThingsComponent,
    ContestsComponent,
    KnownTechnologiesComponent,
    WorkExperienceHomeComponent,
    EducationHomeComponent,
    MoreAboutComponent,
    SkillsComponent
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
