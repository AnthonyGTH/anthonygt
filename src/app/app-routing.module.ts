import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { StudiesComponent } from './studies/studies.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { InterestingThingsComponent } from './interesting-things/interesting-things.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'interesting-things', component: InterestingThingsComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
