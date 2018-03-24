import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onPreview(){
    this.router.navigate(['resumePreview'])
  }

}
