import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { DataService} from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjtransService } from '../objtrans.service';
@Component({
  selector: 'app-wrkspc-crs',
  templateUrl: './wrkspc-crs.component.html',
  styleUrls: ['./wrkspc-crs.component.scss']
})
export class WrkspcCrsComponent implements OnInit {
  cartIndex:Array<number>;
  selectedData:Array<object>;
  data:Array<any>;
  itemData:object;
  localData : any;

  constructor( private transfer : TransferService, 
    private Data:DataService,private trans:ObjtransService, private route:Router ) {
    this.selectedData=[];
    // this.cartIndex = this.transfer.getSelectedCart();
    // this.data = this.transfer.getUrlHistoryObj();
    // this.transfer.setCart(this.cartIndex);
   // console.log(this.data);
   // console.log(this.cartIndex);
   this.localData = localStorage.getItem('workSpaceId');
  
    this.coursesReq();
   
    
    console.log(this.localData);
   }

   coursesReq():void{
    let path: string='http://172.16.5.184:3000/workspace/offeredcoursebyworkspace?workSpaceId='+this.localData;
    
    this.Data.reqCrsWrkspace(path).subscribe(
       res => {
            this.selectedData = res;
           console.log(res);
              },
       err => {
           console.log(err);
              }
    );
           }

           onload(id){
           this.trans.setCart(id);
           this.route.navigate(['/ShwReq'])
           }
  

      ngOnInit() {
        
    }
}
