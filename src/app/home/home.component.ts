import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  i:number;
  j:number;

  personalDetails:{name,profession,dob,phoneNo,email,address};
  educationDetails:{schoolName:string,Qualification:string,Marks:string}[];
  
  constructor(private router:Router,private route:ActivatedRoute,private dataStore:DataStoreService){}

  ngOnInit(){
    this.i=this.dataStore.templateIdi;
    this.j=this.dataStore.templateIdj;
  }

  onNext(){
    if(this.i<4){
    this.j=this.i;
    this.i++;
    }
    else{
      this.j=this.i;
      this.i=1;
    }
  }

  onPrev(){
    if(this.j>0){
    this.i=this.j
    this.j--;
  }
    else{
      this.j=4;
      this.i=this.j
      this.j--;
    }
  }

  onSuccess(){

    this.dataStore.onSetTemplateId(this.i,this.j);

    this.dataStore.onSetPersonalDetails(
      this.personalDetails={
        name:'Name',
        profession:'Profession',
        dob:'Dob',
        phoneNo:'Phone',
        email:'Email',
        address:'Address'
        }
    );

    this.dataStore.onSetEducationDetails(
      this.educationDetails=[{schoolName:'School',Qualification:'Qualifiaction',Marks:'Marks'}]
    )

    this.dataStore.onSetIdDetails(0);

    this.router.navigate(['resumeDetails',this.i]);
  }

}
