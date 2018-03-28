import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumeBuilderComponent } from '../resume-builder.component';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit ,OnDestroy{
    // section: string[];

  constructor(private routeId:ResumeBuilderComponent,private dataStore:DataStoreService) {
    // this.section=["first"];
   }
   templateId:number;
   id:number=0;
   educationDetails=[{schoolName:'',Qualification:'',Marks:''}]; 

  ngOnInit() {
    this.templateId=this.routeId.routeId;
    this.educationDetails=this.dataStore.educationDetails;
    }
    public options: Object = { 
      placeholderText: '',
      charCounterCount: false,
      toolbarButtons: ['bold', 'italic','fontSize','fontFamily']
    }

    onAddDetails(){
      this.dataStore.onAddEducationDetails();
      this.id++;
    }

    onRemoveDetails(){
      if(this.id>=1){
        this.id--;
        this.dataStore.onRemoveEducationDetails();
      }
    }

  ngOnDestroy(){
    this.dataStore.onSetEducationDetails(this.educationDetails)
  }
 
  // onAddSection(){ 
  //   this.section.push('first');
  // }

  // removeThisSection(event) {
  //   this.section.pop();
  // }
}
