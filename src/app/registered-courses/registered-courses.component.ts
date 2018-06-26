import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import { element } from 'protractor';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { config } from 'rxjs/internal/config';
import { triggerAsyncId } from 'async_hooks';


@Component({
  selector: 'app-registered-courses',
  templateUrl: './registered-courses.component.html',
  styleUrls: ['./registered-courses.component.scss']
})
export class RegisteredCoursesComponent implements OnInit {
  public courses:Array<object>;
  public userRating:object;
  public userid;
  public courserate:number ;
  public workspacerate:number;
  public instructorrate:number;
  public rated:boolean;
  constructor(private q: DataService,config: NgbRatingConfig) {
    config.max=5;
    this.getCourses();
    this.rated=false;
    this.userid=localStorage.getItem("userId");
    
    this.userRating={
      "userId":"",
      "courseId":"",
      "courseDate":"",
      "courseRate":0,
      "instructorRate":0,
      "workSpaceRate":0
    }

   }
   addRate(courseId,courseDate){
     this.userRating['userId']=JSON.parse(this.userid);
     this.userRating['courseId']=courseId;
     this.userRating['courseDate']=courseDate;
     this.userRating['courseRate']= this.courserate;
     this.userRating['instructorRate']=this.instructorrate;
     this.userRating['workSpaceRate']=this.workspacerate;
     this.rated=true;  
     console.log(this.userRating)
     this.sendRating();
   }


    // function to get courses
    getCourses() {
      let token: string = localStorage.getItem('token');
      let path: string = 
      'https://tal-company.herokuapp.com/publishedCourses/upComing?userId=46&page=0'
      console.log(token)
      if(token)
      {
      return this.q.getMyData(path,
        {
        headers: new HttpHeaders({ 'Authorization': token})
        })
        .subscribe(
        res => {
          this.courses = res.result;
          console.log(this.courses)
        },
        err => {
          console.log(err);
        }
      
      )
    }
  }

  // function to post rating
  sendRating(){
    let token: string = localStorage.getItem('token');
    let path:string='https://tal-company.herokuapp.com/publishedCourses/rate';
    if(token){
      this.q.postDataHeader(path,this.userRating,
        {headers : new HttpHeaders({'Authorization':token})
        })
        .subscribe(
      res=>{
    
        console.log(res);
      
      },
      err=>{
        console.log(err);
      },
      );

    }
    else{
      console.log("no token")
    }
  

  }
  


  ngOnInit() {
  }

}
