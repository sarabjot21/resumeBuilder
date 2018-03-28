import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit,OnDestroy{

  constructor(private routeId:ResumeBuilderComponent,private dataStore:DataStoreService) { }

  templateId:number;
  froalaFlag:number=1;
  personalDetails:{name:string,profession:string,dob:string,phoneNo:string,email:string,address:string};

  ngOnInit() {
    this.templateId=this.routeId.routeId;
    this.personalDetails=this.dataStore.personalDetails;
  }

  public options: Object = { 
    placeholderText: 'Edit Me',
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic','fontSize','fontFamily']
  }

  onTextClick(froalaFlag:number){
    this.froalaFlag=froalaFlag;
  }

  ngOnDestroy(){
    this.dataStore.onSetPersonalDetails(this.personalDetails);
  }

}
