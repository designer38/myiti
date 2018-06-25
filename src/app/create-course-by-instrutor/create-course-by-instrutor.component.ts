import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-course-by-instrutor',
  templateUrl: './create-course-by-instrutor.component.html',
  styleUrls: ['./create-course-by-instrutor.component.scss']
})
export class CreateCourseByInstrutorComponent implements OnInit {
  public categories:Array<object>;
  public userId:any;
  public UserId : object;
  constructor(private q: DataService, private router: Router) {
    this.getCourses();
    this.userId = localStorage.getItem('userId')
    this.UserId = {
      "userId": JSON.parse(this.userId)
    }
   }

     // function to get categories
     getCourses() {
      let path: string = 
      'https://tal-company.herokuapp.com/categories'
      return this.q.getdataonly(path)
        .subscribe(
        res => {
          this.categories = res;
          console.log(this.categories)
        },
        err => {
          console.log(err);
        }
      
      )
    }

    submitCourse(data: NgForm ):void
    {
      let token: string = localStorage.getItem('token');
      console.log(token)
      console.log(data.value) 
      let path:string = 
      'https://tal-company.herokuapp.com/offeredcourse/createofferedcoursebyinstructor'
      this.q.postDataHeader(path,data.value,
        {headers: new HttpHeaders({ 'Authorization': token})}
      ).subscribe(
          (res) => {
            console.log(res)
            this.router.navigate(['/upcomingCourses'])
          },
          (err) => {
            console.log(err)
          })
    }
  
  ngOnInit() {
  }

}
