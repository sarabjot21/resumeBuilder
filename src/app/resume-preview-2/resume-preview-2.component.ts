import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-preview-2',
  templateUrl: './resume-preview-2.component.html',
  styleUrls: ['./resume-preview-2.component.css']
})
export class ResumePreview2Component implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onBackPage(){
    this.route.navigate(['resumeDetails','3']);
  }
}
