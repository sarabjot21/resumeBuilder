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
   id:number;
   froalaId:number=0;
   educationDetails=[{schoolName:'',Qualification:'',Marks:''}]; 

  ngOnInit() {
    this.templateId=this.routeId.routeId;
    this.id=this.dataStore.id;
    this.educationDetails=this.dataStore.educationDetails;
    console.log('in init')
    }
    public options: Object = { 
      placeholderText: 'Edit Me',
      charCounterCount: false,
      toolbarButtons: ['bold', 'italic','fontSize','fontFamily'],
      heightMax: 60
    }

    onAddDetails(){
      this.dataStore.onAddEducationDetails();
      this.id++;
    }

    onRemoveDetails(){
      if(this.id>=1){
        this.dataStore.onRemoveEducationDetails();
        this.id--;
      }
      if(this.froalaId>0){
        this.froalaId--;
      }
    }

    onUpdateButton(buttonId){
      console.log(buttonId.id);
      this.froalaId=buttonId.id;
    }

  ngOnDestroy(){
    this.dataStore.onSetEducationDetails(this.educationDetails)
    this.dataStore.onSetIdDetails(this.id)
  }
 
  // onAddSection(){ 
  //   this.section.push('first');
  // }

  // removeThisSection(event) {
  //   this.section.pop();
  // }
}
