import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TransferService } from '../transfer.service';
import { HttpHeaders } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses-by-workspaces',
  templateUrl: './courses-by-workspaces.component.html',
  styleUrls: ['./courses-by-workspaces.component.scss']
})
export class CoursesByWorkspacesComponent implements OnInit {
  courses: Array<object> 
  data: Array<object>
  public page:number
  constructor(
    private q: DataService, 
    private router: Router,
    private transfer: TransferService
  ) { 
    this.courses =[{}]
    this.getWorkspase();
    this.page=0

  }

 
  // function to get courses made by workspace
  getWorkspase() {
    let id = localStorage.getItem('userId')
    console.log(this.page)
    let path: string = 
    `https://tal-company.herokuapp.com/offeredcourse/createdByWorkspaces?instructorId=${id}&page=0`
    return this.q.getdataonly(path)
      .subscribe(
      res => {
        this.courses = res.content;
        this.transfer.setData(this.courses);

        console.log(this.courses)
      },
      err => {
        console.log(err);
      }
    
    )
  }


  pagenation()
  {
    console.log(this.page)
    let id = localStorage.getItem('userId')
    let path: string = 
    `https://tal-company.herokuapp.com/offeredcourse/createdByWorkspaces?instructorId=${id}&page=${this.page-1}`
    return this.q.getdataonly(path)
      .subscribe(
      res => {
        this.courses = res.content;
        console.log(this.courses)
      },
      err => {
        console.log(err);
      }
    
    )
  }

  details(cid)
  {
    // console.log(cid)
    let iid = localStorage.setItem('courseId',cid)

  }
  ngOnInit() {
  }

}
