import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  i:number=1;
  j:number=4;

  personalDetails:{name,profession,dob,phoneNo,email,address};
  
  constructor(private router:Router,private route:ActivatedRoute,private dataStore:DataStoreService){}

  ngOnInit(){}

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
    this.dataStore.onSetPersonalDetails(
      this.personalDetails={
        name:'Click Me to Edit Name',
        profession:'Click Me to Edit Profession',
        dob:'Click Me to Edit Dob',
        phoneNo:'Click Me to Edit Phone No',
        email:'Click Me to Edit Email',
        address:'Click Me to Edit Address'
        }
    );
    this.router.navigate(['resumeDetails',this.i]);
  }


}
