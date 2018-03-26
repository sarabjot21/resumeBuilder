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
  personalDetails:{firstName,lastName,phoneNo,email,linkedIn,twitter}={
    firstName:'',
    lastName:'',
    phoneNo:'',
    email:'',
    linkedIn:'',
    twitter:''
    }

  ngOnInit() {
    this.templateId=this.routeId.routeId;
    this.personalDetails=this.dataStore.personalDetails;
  }

  public options: Object = { 
    placeholderText: '',
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic','fontSize','fontFamilyz']
  }

  ngOnDestroy(){
    this.dataStore.onSetPersonalDetails(this.personalDetails);
  }

}
