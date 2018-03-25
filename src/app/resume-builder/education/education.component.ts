import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
    section: string[];

  constructor() {
    this.section=["first"];
   }

  ngOnInit() {
  }
 
  onAddSection(){ 
    this.section.push('first');
  }

  removeThisSection(event) {
    this.section.pop();
  }
}
