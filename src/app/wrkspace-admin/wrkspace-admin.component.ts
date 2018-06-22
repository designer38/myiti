import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-wrkspace-admin',
  templateUrl: './wrkspace-admin.component.html',
  styleUrls: ['./wrkspace-admin.component.scss']
})
export class WrkspaceAdminComponent implements OnInit {
  wrkspaceAdmin : Array<object>; 
  localData : any;
  constructor(private Data:DataService) {
    this.wrkspaceAdmin = [];
    this.workspaceAD();
    this.localData = localStorage.getItem('adminId');
  // console.log(this.localData);
   }
  
           workspaceAD():void{
            let path: string='http://172.16.5.177:3000/admin/workspaces';
            
            this.Data.wrkspaceAdmin(path).subscribe(
               res => {
                    this. wrkspaceAdmin = res;
                   
                   console.log(res);
                      },
               err => {
                   console.log(err);
                      }
            );
                   }
        
        
          ngOnInit() {}
        
          onload(id){
           let path:string='http://172.16.5.177:3000/admin/approveWorkSpaceRequest?adminId='+this.localData+'&workSpaceId='+id;
            this.Data.AdPostwrkspace(path).subscribe(
              Data =>{
              console.log("hi");
              console.log(path);
            })
           
          }
 

}
