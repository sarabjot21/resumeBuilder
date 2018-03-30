import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ResumeBuilderComponent } from '../resume-builder.component';;
import { FroalaEditorService } from '../../services/froala-editor.service';
import { PersonalDetailsDataService } from '../../services/personal-details-data.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit,OnDestroy{

  constructor(
    private resumeBuilder:ResumeBuilderComponent,
    private froalaEditor:FroalaEditorService,
    private personalDetailsData:PersonalDetailsDataService
  ) { }

  templateId:number;
  options:object;
  personalDetails:{name:string,profession:string,dob:string,phoneNo:string,email:string,address:string};
  froalaId:number=1;

  ngOnInit() {
    this.templateId=this.resumeBuilder.templateId;
    this.options=this.froalaEditor.options;
    this.personalDetails=this.personalDetailsData.personalDetails;
  }

  onTextClick(froalaId:number){
    this.froalaId=froalaId;
  }

  ngOnDestroy(){
    this.personalDetailsData.onSetPersonalDetails(this.personalDetails);
  }

}
