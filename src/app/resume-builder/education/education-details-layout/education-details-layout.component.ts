import { EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-education-details-layout',
  templateUrl: './education-details-layout.component.html',
  styleUrls: ['./education-details-layout.component.css']
})
export class EducationDetailsLayoutComponent implements OnInit {

  @Output()
  removeClick: EventEmitter<string> = new EventEmitter();
  constructor() { }


  ngOnInit() {
  }

  removeSection() {
    this.removeClick.emit('bhola');
  }

}
