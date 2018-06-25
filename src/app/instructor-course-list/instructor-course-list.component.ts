import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-instructor-course-list',
  templateUrl: './instructor-course-list.component.html',
  styleUrls: ['./instructor-course-list.component.scss']
})
export class InstructorCourseListComponent implements OnInit {
   coursesList: Array<object> 
   workspase: Array<object> 
  constructor(
    private q: DataService, 
    private router: Router
  ) {
    this.coursesList =[{}]
    this.workspase =[{}]
    this.getCourses()
    this.getWorkspase()
   }



     // function to get Courses List
     getCourses() {
      let path: string = 
      'https://tal-company.herokuapp.com/offeredcourse/offeredcoursebyinstuctor?insructorId=2&page=0'
      return this.q.getdataonly(path)
        .subscribe(
        res => {
          this.coursesList = res;
          console.log(this.coursesList)
        },
        err => {
          console.log(err);
        }
      
      )
    }


      // function to get workspase information
      getWorkspase() {
        let path: string = 
        'https://tal-company.herokuapp.com/offeredcourse/requestedWorkSpaces?courseId=12'
        return this.q.getdataonly(path)
          .subscribe(
          res => {
            this.workspase = res;
            console.log(this.workspase)
          },
          err => {
            console.log(err);
          }
        
        )
      }

  ngOnInit() {
  }

}
