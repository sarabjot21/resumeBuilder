import { Injectable } from '@angular/core';

@Injectable()
export class DataStoreService {

  templateIdi:number=1;
  templateIdj:number=4;

  links:{activateHobbies,activateInterests,activateCertificates,activateLanguages,activateSummary}={
  activateHobbies:0,
  activateInterests:0,
  activateCertificates:0,
  activateLanguages:0,
  activateSummary:0
  }

  sections:{addHobbies,addInterests,addCertificates,addLanguagesKnown,addSummary}={
  addHobbies:0,
  addInterests:0,
  addCertificates:0,
  addLanguagesKnown:0,
  addSummary:0
  }

  personalDetails:{name,profession,dob,phoneNo,email,address}={
    name:'Name',
    profession:'Profession',
    dob:'Dob',
    phoneNo:'Phone',
    email:'Email',
    address:'Address'
    }

    educationDetails:{schoolName:string,Qualification:string,Marks:string}[]=[{schoolName:'School',Qualification:'Qualifiaction',Marks:'Marks'}];

    id:number=0;

    skills:{name:string,details:string}[]=[{name:'Name',details:'Details'}];

    skillId:number=0;
  constructor() { }

  onSetTemplateId(templateIdi,templateIdj){
    this.templateIdi=templateIdi;
    this.templateIdj=templateIdj;
  }

  onActivateLinks(links){
    this.links=links;
  }

  onAddSections(sections){
    this.sections=sections;
  }

  onSetPersonalDetails(personalDetails){
    this.personalDetails=personalDetails;
  }

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

  onSetIdDetails(id){
    this.id=id;
  }

  onSetSkillDetails(skills){
    this.skills=skills;
  }
  onAddSkillDetails(){
    this.skills.push({
      name:'Name',details:'Details'
    })
  }
  onRemoveSkillDetails(){
    this.skills.pop();
  }

  onSetSkillIdDetails(id){
    this.skillId=id;
  }

}
