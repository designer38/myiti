import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sec-approve',
  templateUrl: './sec-approve.component.html',
  styleUrls: ['./sec-approve.component.scss']
})
export class SecApproveComponent implements OnInit {
  crsjson: Array<object>; 
  backUrl: string;
  itemData:object;
   itemId;
   localData : any;

  constructor(private DataService:DataService) {
    this.crsjson = [];
    this.courseAD();
    // this.backUrl = this.params.getUrlHistoryObj();
    this.itemData = {};
    this.localData = localStorage.getItem('adminId');
    console.log(this.localData);
   }

   courseAD():void{
    let path: string='http://172.16.5.177:3000/admin/courses/secondApproval';
    
    this.DataService.crsAdmin(path).subscribe(
       res => {
            this.crsjson = res;
           
           console.log(res);
              },
       err => {
           console.log(err);
              }
    );
           }


  ngOnInit() {}

  onload(id){
   let path:string='http://172.16.5.177:3000/admin/courses/secondApproval?courseId='+id;
    this.DataService.adsecApp(path).subscribe(
      Data =>{
      console.log("hi");
      console.log(path);
    })
  }

}
