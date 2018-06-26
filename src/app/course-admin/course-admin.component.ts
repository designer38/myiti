import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TransferService } from '../transfer.service';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.scss']
})
export class CourseAdminComponent implements OnInit {
  crsjson: Array<object>; 
  backUrl: string;
  itemData:object;
   itemId;
   localData : any;

  constructor(private DataService:DataService, 
              private route:ActivatedRoute,
              private router:Router,
              private transferService:TransferService,
              private params:ParamService) {
    this.crsjson = [];
    this.courseAD();
    this.backUrl = this.params.getUrlHistoryObj();
    this.itemData = {};
    this.localData = localStorage.getItem('adminId');
    console.log(this.localData);
   }
  
   courseAD():void{
    let path: string='http://172.16.5.177:3000/admin/courses/firstApproval';
    
    this.DataService.crsAdmin(path).subscribe(
       res => {
        //  if(hostingWorkSpaceId == )
            this.crsjson = res;
          //  console.log(hostingWorkSpaceId)
           console.log(res.hostingWorkSpaceId);
           res.foreach(function (value){console.log(value)})
              },
       err => {
           console.log(err);
              }
    );
           }


  ngOnInit() {}

  onload(id){
   let path:string='http://172.16.5.177:3000/admin/courses/firstApproval?adminId='+this.localData+'&courseId='+id;
    this.DataService.AdPostCrs(path).subscribe(
      Data =>{
      console.log("hi");
      console.log(path);
    })
  }
}