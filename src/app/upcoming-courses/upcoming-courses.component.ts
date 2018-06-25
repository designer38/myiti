import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss']
})
export class UpcomingCoursesComponent implements OnInit {
  public courses:Array<object>;
  // public token: String;
  constructor(private q: DataService) { 
    this.getCourses();
    
    // console.log(this.token);
   
  
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

  

  ngOnInit() {
  }


}
