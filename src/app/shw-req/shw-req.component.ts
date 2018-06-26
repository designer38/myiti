import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { ObjtransService } from '../objtrans.service';

@Component({
  selector: 'app-shw-req',
  templateUrl: './shw-req.component.html',
  styleUrls: ['./shw-req.component.scss']
})
export class ShwReqComponent implements OnInit {

  constructor(private Data:DataService,private trans:ObjtransService) { 
    this.request();
  }
  instructorAdmin;
  id=this.trans.getCart();
  request(){
    let path:string='http://172.16.5.184:3000/workspace/requestedInstructors?courseId='+this.id;
     this.Data.shwQrs(path).subscribe(
       Data =>{
         this.instructorAdmin= Data
         console.log(Data)
       console.log("hi");
       console.log(path);
     })
   }
   

  ngOnInit() {
  }

}
