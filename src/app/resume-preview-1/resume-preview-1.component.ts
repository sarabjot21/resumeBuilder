import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-resume-preview-1',
  templateUrl: './resume-preview-1.component.html',
  styleUrls: ['./resume-preview-1.component.css']
})
export class ResumePreview1Component implements OnInit {

  personalDetails:{firstName,lastName,phoneNo,email,linkedIn,twitter}={
    firstName:'',
    lastName:'',
    phoneNo:'',
    email:'',
    linkedIn:'',
    twitter:''
    }

  constructor(private dataStore:DataStoreService) { }

  ngOnInit() {
    this.personalDetails=this.dataStore.personalDetails;
  }

}
