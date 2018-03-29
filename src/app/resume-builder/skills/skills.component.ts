import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../data-store.service';
import { ResumeBuilderComponent } from '../resume-builder.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

   templateId:number;
   id:number;
   froalaId:number=0;
   skills=[{name:'',details:''}]; 

  constructor(private dataStore:DataStoreService,private routeId:ResumeBuilderComponent) { }

  ngOnInit() {
    this.templateId=this.routeId.routeId;
    this.id=this.dataStore.skillId;
    this.skills=this.dataStore.skills;
  }

  public options: Object = { 
    placeholderText: 'Edit Me',
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic','fontSize','fontFamily'],
    heightMax: 60
  }

  onAddDetails(){
    this.dataStore.onAddSkillDetails();
    this.id++;
  }

  onRemoveDetails(){
    if(this.id>=1){
      this.dataStore.onRemoveSkillDetails();
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
  this.dataStore.onSetSkillDetails(this.skills)
  this.dataStore.onSetSkillIdDetails(this.id)
}

}
