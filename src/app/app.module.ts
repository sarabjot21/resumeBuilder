import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import * as $ from 'jquery'

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { PersonalDetailsComponent } from './resume-builder/personal-details/personal-details.component';
import { EducationComponent } from './resume-builder/education/education.component';
import { SkillsComponent } from './resume-builder/skills/skills.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { ResumePreview1Component } from './resume-preview-1/resume-preview-1.component';
import { ResumePreview2Component } from './resume-preview-2/resume-preview-2.component';
import { ResumePreview3Component } from './resume-preview-3/resume-preview-3.component';

import { DataStoreService } from './data-store.service';
import { ExperienceComponent } from './resume-builder/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeBuilderComponent,
    PersonalDetailsComponent,
    EducationComponent,
    HomeComponent,
    ResumePreviewComponent,
    ResumePreview1Component,
    ResumePreview2Component,
    ResumePreview3Component,
    SkillsComponent,
    ExperienceComponent,

  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,AngularFontAwesomeModule ,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [ResumeBuilderComponent,DataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
