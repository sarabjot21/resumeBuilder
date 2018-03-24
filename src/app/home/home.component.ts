import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  i:number=1;
  j:number=4;
  
  constructor(private router:Router,private route:ActivatedRoute){}

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
    this.router.navigate(['resumeDetails']);
  }


}
