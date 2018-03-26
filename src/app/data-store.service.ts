import { Injectable } from '@angular/core';

@Injectable()
export class DataStoreService {

  personalDetails:{firstName,lastName,phoneNo,email,linkedIn,twitter}={
  firstName:'Example Name',
  lastName:'',
  phoneNo:'Example PhoneNo',
  email:'Example Email',
  linkedIn:'Example LinkedIn Id',
  twitter:'Example Twitter Id'
  }

  constructor() { }

  // onGetPersonalDetails(){
  //   return this.personalDetails;
  // }

  onSetPersonalDetails(personalDetails){
    this.personalDetails=personalDetails;
  }


}
