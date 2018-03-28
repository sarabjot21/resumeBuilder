import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.css']
})
export class ResumePreviewComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onBackPage(){
    this.route.navigate(['resumeDetails','1']);
  }

}
