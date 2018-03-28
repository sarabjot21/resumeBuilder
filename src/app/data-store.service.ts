import { Injectable } from '@angular/core';

@Injectable()
export class DataStoreService {

  saveFlag:number=0;

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
    name:'Click Me to Edit Name',
    profession:'Click Me to Edit Profession',
    dob:'Click Me to Edit Dob',
    phoneNo:'Click Me to Edit Phone No',
    email:'Click Me to Edit Email',
    address:'Click Me to Edit Address'
    }

  constructor() { }

  onActivateLinks(links){
    this.links=links;
  }

  onAddSections(sections){
    this.sections=sections;
  }

  onSetPersonalDetails(personalDetails){
    this.personalDetails=personalDetails;
  }


}
