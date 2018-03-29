import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-preview-1',
  templateUrl: './resume-preview-1.component.html',
  styleUrls: ['./resume-preview-1.component.css']
})
export class ResumePreview1Component implements OnInit {

  id:number=0;
  personalDetails:{name,profession,dob,phoneNo,email,address};
  educationDetails:{schoolName:string,Qualification:string,Marks:string}[]=[{schoolName:'Enter School Name',Qualification:'Enter Qualifiaction',Marks:'Enter Marks'}];
  skills:{name:string,details:string}[]=[{name:'Name',details:'Details'}];

  constructor(private dataStore:DataStoreService,private route:Router) { }

  ngOnInit() {
    this.personalDetails=this.dataStore.personalDetails;
    this.educationDetails=this.dataStore.educationDetails;
    this.skills=this.dataStore.skills;
  }
  onBackPage(){
    this.route.navigate(['resumeDetails','2']);
  }

}
