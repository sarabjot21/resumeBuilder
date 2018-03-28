import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-preview-3',
  templateUrl: './resume-preview-3.component.html',
  styleUrls: ['./resume-preview-3.component.css']
})
export class ResumePreview3Component implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onBackPage(){
    this.route.navigate(['resumeDetails','4']);
  }

}
