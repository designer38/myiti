import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-registered-courses',
  templateUrl: './registered-courses.component.html',
  styleUrls: ['./registered-courses.component.scss']
})
export class RegisteredCoursesComponent implements OnInit {
  public courses:Array<object>;
  public userRating:object;

  constructor(private q: DataService) {
    this.getCourses();
    this.userRating={
      "userId":"",
      "courseId":"",
      "courseDate":"",
      "courseRate":"",
      "instructorRate":"",
      "workSpaceRate":""
    }

   }


    // function to get courses
    getCourses() {
      let token: string = localStorage.getItem('token');
      let path: string = 
      'https://tal-company.herokuapp.com/publishedCourses/upComing?userId=2&page=0'
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
