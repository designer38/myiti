import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TransferService } from '../transfer.service';
import { Router,ActivatedRoute} from '@angular/router';
import { ObjtransService } from '../objtrans.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
datajson: Array<object>; 
indexx:Array<number>;
insructorId:number;
localData : any;

constructor(private Data:DataService,
            private transferService:TransferService,
            private router:Router,
          private trans:ObjtransService) {
       this.datajson = [];
      this.insructorId=trans.getCart();
      
     this.coursedata();
     this.indexx=this.transferService.getCart() || [];
     console.log(this.indexx);
     this.localData = localStorage.getItem('workSpaceId');
    console.log(this.localData);
  }

	coursedata():void {
    let path: string='http://172.16.5.184:3000/workspace/offeredcoursebyinstuctor?insructorId='+this.insructorId;
    this.Data.courseJson(path).subscribe(
       res => {
            console.log(res);
            this.datajson = res;
            this.transferService.setUrlHistoryObj(this.datajson);
            this.transferService.setSelectedCart(this.indexx);
              },
       err => {
           console.log(err);
              }
    );
           }

           addCart(id:number){
            console.log(id);
            this.indexx.push(id);
            console.log(this.indexx);
          }
	
          onload(id){
            let path:string='http://172.16.5.184:3000/requstsbyworkspace/workspacerepuestcourse?offeredCourseId='+id+'&workSpaceId='+this.localData;
             this.Data.crsapprovepost(path).subscribe(
               Data =>{
               console.log("hi");
               console.log(path);
             })
           }


          ngOnInit() {
            console.log(this.indexx);
  }
}
