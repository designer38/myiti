import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TransferService } from '../transfer.service';
import { ParamService } from '../param.service';
import { ObjtransService } from '../objtrans.service';
@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
currentRate = 6;
instjson:Array<object>;
	
  constructor(private Data:DataService,
    private route:ActivatedRoute,
    private router:Router,
    private params:ParamService,
  private trans:ObjtransService) {
	  this.instjson=[];
  this.instructordata()
  // let instructCrs ="instructor/:id"
  }

  ngOnInit() {
  }
	
	instructordata() {
    let path: string='http://172.16.5.177:3000/workspace/instructors';
    this.Data.instructorJson(path).subscribe(
       res => {
            this.instjson = res;
            let userId = res.id   ; 
            let userName = res.Name  ; 
            console.log(res);
              },
       err => {
           console.log(err);
              }
    );
           }

 onload(id){
    this.trans.setCart(id);
    console.log(id);
    
   this.router.navigate(['/courses'])
   }

}
