import { Injectable } from '@angular/core';

@Injectable()
export class PersonalDetailsDataService {

  constructor() { }

  personalDetails:{name,profession,dob,phoneNo,email,address}={
    name:'Name',
    profession:'Profession',
    dob:'Dob',
    phoneNo:'Phone',
    email:'Email',
    address:'Address'
  }

  onSetPersonalDetails(personalDetails){
    this.personalDetails=personalDetails;
  }

}
