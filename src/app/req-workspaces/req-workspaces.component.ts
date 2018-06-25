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
  workspase: Array<object> 
  constructor(
    private q: DataService, 
    private router: Router
  ) { 
    this.workspase =[{}]
    this.getWorkspase()
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
