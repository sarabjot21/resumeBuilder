import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent implements OnInit {

   public routeId:number;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.routeId=this.route.snapshot.params['id'];
  }

  onPreview(){
    console.log(this.routeId);
    this.router.navigate([this.routeId])
  }

}
