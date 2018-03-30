import { Injectable } from '@angular/core';

@Injectable()
export class EducationDetailsDataService {

  constructor() { }

  educationDetails:{schoolName:string,Qualification:string,Marks:string}[]=[{schoolName:'School',Qualification:'Qualifiaction',Marks:'Marks'}];
  educationId:number=0;

  onSetEducationDetails(educationDetails){
    this.educationDetails=educationDetails;
  }
  onAddEducationDetails(){
    this.educationDetails.push({
      schoolName:'School',Qualification:'Qualifiaction',Marks:'Marks'
    })
  }
  onRemoveEducationDetails(){
    this.educationDetails.pop();
  }

  onSetEducationId(id){
    this.educationId=id;
  }

}
