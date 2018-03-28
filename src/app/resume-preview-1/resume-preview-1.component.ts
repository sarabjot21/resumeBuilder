import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-preview-1',
  templateUrl: './resume-preview-1.component.html',
  styleUrls: ['./resume-preview-1.component.css']
})
export class ResumePreview1Component implements OnInit {

  personalDetails:{name,profession,dob,phoneNo,email,address};

  constructor(private dataStore:DataStoreService,private route:Router) { }

  ngOnInit() {
    this.personalDetails=this.dataStore.personalDetails;
  }
  onBackPage(){
    this.route.navigate(['resumeDetails','2']);
  }

}
