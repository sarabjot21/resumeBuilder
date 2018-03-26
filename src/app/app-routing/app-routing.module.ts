import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ResumeBuilderComponent } from '../resume-builder/resume-builder.component';
import { PersonalDetailsComponent } from '../resume-builder/personal-details/personal-details.component';
import { EducationComponent } from '../resume-builder/education/education.component';
import { ResumePreviewComponent } from '../resume-preview/resume-preview.component';
import { ResumePreview1Component } from '../resume-preview-1/resume-preview-1.component';
import { ResumePreview2Component } from '../resume-preview-2/resume-preview-2.component';
import { ResumePreview3Component } from '../resume-preview-3/resume-preview-3.component';


const appRoute:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'resumeDetails/:id',component:ResumeBuilderComponent,children:[
    { path: '', redirectTo: 'personalDetails', pathMatch: 'full' },
    {path:'personalDetails',component:PersonalDetailsComponent},
    {path:'education',component:EducationComponent}
  ]},
  {path:'1',component:ResumePreviewComponent},
  {path:'2',component:ResumePreview1Component},
  {path:'3',component:ResumePreview2Component},
  {path:'4',component:ResumePreview3Component},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
