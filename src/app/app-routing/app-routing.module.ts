import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ResumeBuilderComponent } from '../resume-builder/resume-builder.component';
import { PersonalDetailsComponent } from '../resume-builder/personal-details/personal-details.component';
import { EducationComponent } from '../resume-builder/education/education.component';
import { ResumePreviewComponent } from '../resume-preview/resume-preview.component';


const appRoute:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'resumeDetails',component:ResumeBuilderComponent,children:[
    { path: '', redirectTo: 'personalDetails', pathMatch: 'full' },
    {path:'personalDetails',component:PersonalDetailsComponent},
    {path:'education',component:EducationComponent}
  ]},
  {path:'resumePreview',component:ResumePreviewComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
