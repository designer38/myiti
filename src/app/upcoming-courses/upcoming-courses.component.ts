import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import { triggerAsyncId } from 'async_hooks';
import { fail } from 'assert';



@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss']
})
export class UpcomingCoursesComponent implements OnInit {
  public courses:Array<object>;
  public like :object;
  public registeration:object;
  public userid;
  public flag:boolean;
  public flagRegister:boolean;

  // public token: String;
  constructor(private q: DataService) {

    this.getCourses();
    this.flag=true;
    this.flagRegister=true;
    this.like={
      "userId":"",
      "courseId":"",
      "courseDate":""
    }
    this.registeration={
      "userId":"",
      "courseId":"",
      "courseDate":""

    }
    this.userid=localStorage.getItem("userId");
    
    // console.log(this.token);
   
  
  }

   // function to get courses
   getCourses() {
    let token: string = localStorage.getItem('token');
    let path: string = 'https://tal-company.herokuapp.com/publishedCourses/upComing?userId=2&page=0'
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

likeCourse(id,date){
  this.like['courseDate']=date;
  this.like['courseId']=id;
  this.like['userId']=JSON.parse(this.userid);
  if(this.flag){
    this.sendLike();
    this.flag=false;
    

  }
  else{

    this.deleteLike(id,date);
    this.flag=true;
  }
  
}

// function to post like
sendLike(){
  let token: string = localStorage.getItem('token');
  let path:string='https://tal-company.herokuapp.com/publishedCourses/LikeCourse';
  if(token){
    this.q.postDataHeader(path,this.like,
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
 this.getCourses();
}
// function delete like
deleteLike(id,date){
  let token: string = localStorage.getItem('token');
  let path:string=`https://tal-company.herokuapp.com/publishedCourses/disLikeCourse?userId=${this.userid}&courseId=${id}&courseDate=${date}`;
  if(token){
    this.q.deleteData(path,this.like)
      .subscribe(
    res=>{
  
      console.log(res);
    
    },
    err=>{
      console.log(err);
    },
    );

  }
this.getCourses();
}
// function to add to registerd courses
register(id,date){
  this.registeration['userId']=JSON.parse(this.userid);
  this.registeration['courseId']=id;
  this.registeration['courseDate']=date;
  let token: string = localStorage.getItem('token');
  let path:string='https://tal-company.herokuapp.com/publishedCourses/register';
  if(token){
    this.q.postDataHeader(path,this.registeration,
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
  this.getCourses();
}
 // function to unregister
 unRegister(id,date){
  let token: string = localStorage.getItem('token');
  let path:string=`https://tal-company.herokuapp.com/publishedCourses/unRegister?userId=${this.userid}&courseId=${id}&courseDate=${date}`;
  if(token){
    this.q.deleteData(path,this.like)
      .subscribe(
    res=>{
  
      console.log(res);
    
    },
    err=>{
      console.log(err);
    },
    );

  }
  this.getCourses();
 }
 details(c:object)
 {
 let stringobj= JSON.stringify(c)
 let iid= localStorage.setItem('userCourse',stringobj)

  
 }

  ngOnInit() {
  }


}
