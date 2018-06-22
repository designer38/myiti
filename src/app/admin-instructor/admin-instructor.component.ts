import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TransferService } from '../transfer.service';
import { ParamService } from '../param.service';
@Component({
  selector: 'app-admin-instructor',
  templateUrl: './admin-instructor.component.html',
  styleUrls: ['./admin-instructor.component.scss']
})
export class AdminInstructorComponent implements OnInit {
  instructorAdmin: Array<object>; 

  constructor(private Data:DataService,
              private router:Router,
              private transferService:TransferService,
              private params:ParamService) {
    this.instructorAdmin = [];
    this.instructAD();
   }
   
   
   
   instructAD():void{
    let path: string='http://172.16.5.177:3000/admin/instructors';
    
    this.Data.instAdmin(path).subscribe(
       res => {
            this.instructorAdmin = res;
           
           console.log(res);
              },
       err => {
           console.log(err);
              }
    );
           }

  ngOnInit() {
  }

  onload(id){
    let path:string='http://172.16.5.177:3000/admin/approveUserRequest?userId='+id;
     this.Data.AdPostInst(path).subscribe(
       Data =>{
       console.log("hi");
       console.log(path)
     })
     
    
   }

}
