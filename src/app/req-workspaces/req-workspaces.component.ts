import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-req-workspaces',
  templateUrl: './req-workspaces.component.html',
  styleUrls: ['./req-workspaces.component.scss']
})
export class ReqWorkspacesComponent implements OnInit {
  workspases: Array<object> 
  constructor(
    private q: DataService, 
    private router: Router
  ) { 
    this.workspases =[{}]
    this.getWorkspase()
  }

        // function to get workspase information
        getWorkspase() {
          let courseId = localStorage.getItem('courseId')
          let path: string = 
          `https://tal-company.herokuapp.com/offeredcourse/requestedWorkSpaces?courseId=${courseId}`
          return this.q.getdataonly(path)
            .subscribe(
            res => {
              this.workspases = res;
              console.log(this.workspases)
            },
            err => {
              console.log(err);
            }
          
          )
        }
  
        accept(Id)
        {
          let courseId = localStorage.getItem('courseId')
          let path: string = 
          'https://tal-company.herokuapp.com/offeredcourse/acceptWorkSpaceRequest'
          return this.q.postDataHeader(path,{
            "workSpaceId": JSON.parse(Id),
            "courseId":JSON.parse(courseId)  
          })
            .subscribe(
            res => {
              console.log(res)
            },
            err => {
              console.log(err);
            }
          
          )


        }
  ngOnInit() {
  }

}
