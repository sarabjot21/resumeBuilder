import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import * as $ from 'jquery'

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { PersonalDetailsComponent } from './resume-builder/personal-details/personal-details.component';
import { EducationComponent } from './resume-builder/education/education.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';

import { HeadingHighlightDirective } from './resume-builder/heading-highlight.directive';
import { PersonalDetailsLayoutComponent } from './resume-builder/personal-details/personal-details-layout/personal-details-layout.component';
import { PersonalDetailsEditorComponent } from './resume-builder/personal-details/personal-details-editor/personal-details-editor.component';
import { EducationDetailsEditorComponent } from './resume-builder/education/education-details-editor/education-details-editor.component';
import { EducationDetailsLayoutComponent } from './resume-builder/education/education-details-layout/education-details-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    ResumeBuilderComponent,
    HeadingHighlightDirective,
    PersonalDetailsComponent,
    EducationComponent,
    HomeComponent,
    ResumePreviewComponent,
    PersonalDetailsLayoutComponent,
    PersonalDetailsEditorComponent,
    EducationDetailsEditorComponent,
    EducationDetailsLayoutComponent,

  ],
  imports: [
    BrowserModule,AppRoutingModule,AngularFontAwesomeModule ,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
